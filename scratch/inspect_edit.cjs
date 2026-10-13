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

async function inspectPageScreen() {
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

    // Check post-new.php
    const newPage = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post-new.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('post-new status:', newPage.statusCode);
    const wpNonce = newPage.body.match(/"nonce":"([^"]+)"/);
    console.log('REST/wp nonce:', wpNonce ? wpNonce[1] : 'not found');

    // Check post 2063 edit screen
    const edit2063 = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post.php?post=2063&action=edit', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('edit 2063 status:', edit2063.statusCode);
    const postData = edit2063.body.match(/wp\.apiFetch\.use\( wp\.apiFetch\.createNonceMiddleware\( "([^"]+)" \) \);/);
    console.log('apiFetch nonce in edit 2063:', postData ? postData[1] : 'not found');

    // Also look for wpApiSettings
    const wpApiSettings = edit2063.body.match(/wpApiSettings = (\{[^}]+\});/);
    console.log('wpApiSettings:', wpApiSettings ? wpApiSettings[1] : 'not found');
}

inspectPageScreen().catch(console.error);
