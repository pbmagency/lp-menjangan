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

async function updatePage2092() {
    console.log('Logging into WordPress...');
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
    // Ensure #page has class menjangan-page for universal selector matching
    c2Html = c2Html.replace('id="page"', 'id="page" class="menjangan-page"');

    console.log('Updating page 2092 via REST API (content length: ' + c2Html.length + ')...');

    const updatePayload = JSON.stringify({
        title: 'Menjangan Island Snorkeling & Diving Trips | Menjangan Snorkeling Trip & Diving',
        slug: 'c2-lp',
        status: 'publish',
        template: 'elementor_canvas',
        content: c2Html
    });

    const updateRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages/2092', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'X-WP-Nonce': apiSettings.nonce,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    }, updatePayload);

    console.log('Update status:', updateRes.statusCode);
    if (updateRes.statusCode === 200) {
        const json = JSON.parse(updateRes.body);
        console.log('Page updated successfully!');
        console.log('ID:', json.id);
        console.log('Slug:', json.slug);
        console.log('Link:', json.link);
        console.log('Status:', json.status);
    } else {
        console.error('Update failed:', updateRes.body);
    }
}

updatePage2092().catch(console.error);
