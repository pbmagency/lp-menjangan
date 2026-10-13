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

async function inspectPost2063() {
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

    console.log('Fetching post 2063 details via REST...');
    const rest = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages/2063?context=edit', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Status:', rest.statusCode);
    if (rest.statusCode === 200) {
        const json = JSON.parse(rest.body);
        console.log('Title:', json.title);
        console.log('Slug:', json.slug);
        console.log('Template:', json.template);
        console.log('Content rendered snippet:', json.content?.raw?.slice(0, 300));
        console.log('Meta keys:', Object.keys(json.meta || {}));
    }

    console.log('\nChecking plugin file sections.json...');
    const secRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-content/plugins/menjangan-elementor/sections.json');
    console.log('sections.json status:', secRes.statusCode);
    if (secRes.statusCode === 200) {
        fs.writeFileSync('scratch/sections.json', secRes.body);
        console.log('Saved sections.json, length:', secRes.body.length);
    }
}

inspectPost2063().catch(console.error);
