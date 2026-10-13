const https = require('https');
const querystring = require('querystring');
const fs = require('fs');

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
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: data
                });
            });
        });

        req.on('error', reject);
        if (postData) {
            req.write(postData);
        }
        req.end();
    });
}

async function inspectThemeAndPlugin() {
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

    // 1. Get plugin-editor default file or plugin list
    const pEdit = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    fs.writeFileSync('scratch/plugin-editor.html', pEdit.body);
    const pluginsInSelect = pEdit.body.match(/<option value="([^"]+)"[^>]*>([^<]+)<\/option>/g) || [];
    console.log('Plugins in editor:', pluginsInSelect);

    // 2. Check plugin-editor with plugin=menjangan-landing-for-elementor
    const mPlugin = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?plugin=menjangan-landing-for-elementor%2Fmenjangan-landing-for-elementor.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('mPlugin status:', mPlugin.statusCode);
    if (mPlugin.statusCode === 200) {
        const textareaMatch = mPlugin.body.match(/<textarea[^>]*id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/i);
        if (textareaMatch) {
            console.log('Found plugin content! Length:', textareaMatch[1].length);
            fs.writeFileSync('scratch/menjangan-landing-plugin.php', textareaMatch[1]);
        }
        const fileList = mPlugin.body.match(/<li[^>]*><a href="plugin-editor\.php\?file=([^"&]+)[^>]*>([^<]+)<\/a>/g) || [];
        console.log('Files in this plugin:', fileList);
    }
}

inspectThemeAndPlugin().catch(console.error);
