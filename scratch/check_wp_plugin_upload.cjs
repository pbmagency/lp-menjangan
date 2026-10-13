const https = require('https');
const querystring = require('querystring');

function request(url, options = {}, postData = null) {
    return new Promise((resolve, reject) => {
        const u = new URL(url);
        const reqOptions = {
            hostname: u.hostname,
            port: u.port || 443,
            path: u.pathname + u.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        const req = https.request(reqOptions, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
        });
        req.on('error', reject);
        if (postData) req.write(postData);
        req.end();
    });
}

async function checkPluginUpload() {
    const postBody = querystring.stringify({
        log: 'admin',
        pwd: 'arifadmin',
        'wp-submit': 'Log In',
        redirect_to: 'https://menjangansnorkelingtripanddiving.com/wp/wp-admin/',
        testcookie: '1'
    });

    const res = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postBody),
            'Cookie': 'wordpress_test_cookie=WP%20Cookie%20check',
            'User-Agent': 'Mozilla/5.0'
        }
    }, postBody);

    const cookies = res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');

    // Check plugin-install.php
    const uploadPage = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-install.php?tab=upload', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    console.log('Upload page HTTP status:', uploadPage.statusCode);
    const hasForm = uploadPage.body.includes('upload-plugin');
    console.log('Has upload plugin form:', hasForm);

    const nonceMatch = uploadPage.body.match(/id="_wpnonce"\s+name="_wpnonce"\s+value="([^"]+)"/);
    console.log('Upload nonce:', nonceMatch ? nonceMatch[1] : 'not found');

    // Check active plugins
    const pluginsPage = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugins.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Plugins page HTTP status:', pluginsPage.statusCode);
    const activePlugins = [...pluginsPage.body.matchAll(/<tr[^>]+class="[^"]*active[^"]*"[^>]+data-plugin="([^"]+)"/g)].map(m => m[1]);
    console.log('Active plugins:', activePlugins);
}

checkPluginUpload();
