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

async function purgeAll() {
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

    // 1. Get dashboard to fetch a fresh nonce
    const dashRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/admin.php?page=w3tc_dashboard', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    const purgeMatch = dashRes.body.match(/href="([^"]*w3tc_flush_all=1[^"]*)"/);
    if (!purgeMatch) {
        console.error('Could not find purge link');
        return;
    }
    const purgeUrl = purgeMatch[1].replace(/&#038;/g, '&');
    console.log('Purge URL:', purgeUrl);

    // 2. Call the purge URL
    const purgeRes = await request(purgeUrl, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Purge status:', purgeRes.statusCode, 'Location:', purgeRes.headers['location']);

    // 3. Now fetch the public page
    const pubRes = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    console.log('Public page fresh timestamp:\n', pubRes.body.match(/Served from: [^\n]+/)?.[0]);
    console.log('Has meta description:', pubRes.body.includes('name="description"'));
    console.log('Has isBot in clarity:', pubRes.body.includes('isBot'));
    console.log('Has hero-reef-diver preload:', pubRes.body.includes('hero-reef-diver-800.avif'));
}

purgeAll().catch(console.error);
