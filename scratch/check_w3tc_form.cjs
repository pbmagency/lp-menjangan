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

async function inspectDash() {
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

    const dashRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/admin.php?page=w3tc_dashboard', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    console.log('Dash status:', dashRes.statusCode);
    const nonceMatch = dashRes.body.match(/data-w3tc-nonce="([^"]+)"/);
    console.log('data-w3tc-nonce:', nonceMatch ? nonceMatch[1] : null);

    const wpnonceMatch = dashRes.body.match(/_wpnonce=([a-f0-9]+)/);
    console.log('_wpnonce in body:', wpnonceMatch ? wpnonceMatch[1] : null);

    if (wpnonceMatch) {
        const flushUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/admin.php?w3tc_flush_all=1&_wpnonce=${wpnonceMatch[1]}`;
        console.log('Testing flush URL:', flushUrl);
        const fRes = await request(flushUrl, {
            headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
        });
        console.log('Flush status:', fRes.statusCode, 'Location:', fRes.headers['location']);

        // Check public page
        const pub = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
        console.log('Pub timestamp:', pub.body.match(/Served from: [^\n]+/)?.[0]);
        console.log('Has meta description:', pub.body.includes('name="description"'));
        console.log('Has isBot:', pub.body.includes('isBot'));
    }
}

inspectDash().catch(console.error);
