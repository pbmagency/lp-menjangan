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

async function touchPage2092() {
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

    const editRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post-new.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const match = editRes.body.match(/wpApiSettings = (\{[^}]+\});/);
    const apiSettings = match ? JSON.parse(match[1]) : null;

    let c2Html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
    c2Html = c2Html.replace('id="page"', 'id="page" class="menjangan-page"');

    // Trigger update on post 2092
    const updateRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages/2092', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'X-WP-Nonce': apiSettings.nonce,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    }, JSON.stringify({
        content: c2Html
    }));

    console.log('Touch update status:', updateRes.statusCode);

    // Fetch the public page to check freshness
    const pubRes = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    console.log('Served timestamp:', pubRes.body.match(/Served from: [^\n]+/)?.[0]);
    console.log('Has meta description:', pubRes.body.includes('name="description"'));
    console.log('Has isBot:', pubRes.body.includes('isBot'));
}

touchPage2092().catch(console.error);
