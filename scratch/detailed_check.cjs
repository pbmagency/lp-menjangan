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

async function detailedCheck() {
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

    // 1. Get Theme Editor / theme files
    const themeRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/themes.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    fs.writeFileSync('scratch/themes.html', themeRes.body);
    const themeMatches = themeRes.body.match(/data-slug="([^"]+)"/g) || [];
    console.log('Themes found:', themeMatches);

    // 2. Check plugins page html
    const pluginRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugins.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    fs.writeFileSync('scratch/plugins.html', pluginRes.body);
    const pluginSlugs = pluginRes.body.match(/data-slug="([^"]+)"/g) || [];
    console.log('Plugins found:', pluginSlugs);

    // 3. Check theme-editor.php
    const editorRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/theme-editor.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Theme Editor status:', editorRes.statusCode);
    if (editorRes.statusCode === 200) {
        const fileList = editorRes.body.match(/<li[^>]*><a href="theme-editor\.php\?file=([^"&]+)/g) || [];
        console.log('Theme Editor files:', fileList.slice(0, 15));
    }

    // 4. Check plugin-editor.php
    const pEditorRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Plugin Editor status:', pEditorRes.statusCode);
}

detailedCheck().catch(console.error);
