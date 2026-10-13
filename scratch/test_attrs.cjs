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

async function testAttrs() {
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

    const testSnippet = '<div id="page" data-lg="en" class="menjangan-page"><span data-l="en">English</span><span data-l="id">Indo</span><svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg><picture><source srcset="/c1/hero-reef-diver-800.avif" type="image/avif"><img src="/c1/hero-reef-diver-800.avif" alt="test" width="100" height="100"></picture></div>';

    const updateRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages/2092', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'X-WP-Nonce': apiSettings.nonce,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    }, JSON.stringify({
        content: testSnippet
    }));

    console.log('Update status:', updateRes.statusCode);

    const pubRes = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    console.log('Contains data-lg="en":', pubRes.body.includes('data-lg="en"'));
    console.log('Contains data-l="en":', pubRes.body.includes('data-l="en"'));
    console.log('Contains svg viewBox:', pubRes.body.includes('viewBox="0 0 24 24"') || pubRes.body.includes('viewbox="0 0 24 24"'));
    console.log('Contains picture source:', pubRes.body.includes('srcset="/c1/hero-reef-diver-800.avif"'));
    console.log('Snippet rendered in body:\n', pubRes.body.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1]?.slice(0, 400));
}

testAttrs().catch(console.error);
