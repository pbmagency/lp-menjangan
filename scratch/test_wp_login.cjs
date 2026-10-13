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

async function loginWP() {
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
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    }, postBody);

    console.log('Status:', res.statusCode);
    console.log('Location:', res.headers.location);
    console.log('Set-Cookie:', res.headers['set-cookie']);

    if (res.headers['set-cookie']) {
        const cookies = res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
        console.log('\nTesting wp-admin access with cookies...');
        const adminRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/', {
            method: 'GET',
            headers: {
                'Cookie': cookies,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });
        console.log('Admin Status:', adminRes.statusCode);
        console.log('Admin Title:', (adminRes.body.match(/<title>([^<]+)<\/title>/i) || [])[1]);
    }
}

loginWP().catch(console.error);
