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

async function testWpRest() {
    console.log('Logging in to WordPress...');
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

    // Get nonce from post-new.php
    const editRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post-new.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const match = editRes.body.match(/wpApiSettings = (\{[^}]+\});/);
    const apiSettings = match ? JSON.parse(match[1]) : null;
    console.log('Nonce:', apiSettings?.nonce);

    // Test creating a draft page "C2 Menjangan" with slug "c2-lp"
    console.log('Creating page via REST API...');
    const createRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'X-WP-Nonce': apiSettings.nonce,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    }, JSON.stringify({
        title: 'Menjangan C2 Landing Page',
        slug: 'c2-lp',
        status: 'draft',
        content: '<h1>Testing C2 LP</h1>',
        template: 'elementor_canvas'
    }));

    console.log('Create page status:', createRes.statusCode);
    if (createRes.statusCode === 201) {
        const json = JSON.parse(createRes.body);
        console.log('Created page successfully! ID:', json.id, 'Slug:', json.slug, 'Link:', json.link);
    } else {
        console.log('Create error:', createRes.body);
    }
}

testWpRest().catch(console.error);
