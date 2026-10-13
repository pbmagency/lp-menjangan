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

async function testRestWithNonce() {
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

    // 1. Get fresh nonce from edit screen
    const editRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post-new.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const match = editRes.body.match(/wpApiSettings = (\{[^}]+\});/);
    const apiSettings = match ? JSON.parse(match[1]) : null;
    console.log('Got apiSettings:', apiSettings);

    if (apiSettings && apiSettings.nonce) {
        // Query post 2063 with X-WP-Nonce
        const pageRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages/2063?context=edit', {
            headers: {
                'Cookie': cookies,
                'X-WP-Nonce': apiSettings.nonce,
                'User-Agent': 'Mozilla/5.0'
            }
        });
        console.log('Page 2063 with nonce status:', pageRes.statusCode);
        if (pageRes.statusCode === 200) {
            const pageJson = JSON.parse(pageRes.body);
            console.log('Page 2063 details:');
            console.log('  title:', pageJson.title);
            console.log('  slug:', pageJson.slug);
            console.log('  template:', pageJson.template);
            console.log('  status:', pageJson.status);
            console.log('  content length:', pageJson.content?.raw?.length);
            fs.writeFileSync('scratch/page-2063.json', JSON.stringify(pageJson, null, 2));
        } else {
            console.log('Error:', pageRes.body);
        }
    }
}

testRestWithNonce().catch(console.error);
