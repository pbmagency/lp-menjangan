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

async function inspect2063Edit() {
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

    const edit2063 = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post.php?post=2063&action=edit', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    fs.writeFileSync('scratch/edit-2063.html', edit2063.body);

    // Look for post_content in the edit screen form
    const textarea = edit2063.body.match(/<textarea[^>]*id="content"[^>]*>([\s\S]*?)<\/textarea>/i);
    if (textarea) {
        console.log('Textarea content in edit 2063 length:', textarea[1].length);
        console.log('Snippet:', textarea[1].slice(0, 300));
    } else {
        console.log('No content textarea found in edit 2063');
    }

    // Look for elementor buttons
    const elementorBtn = edit2063.body.match(/<a[^>]*action=elementor[^>]*>/i);
    console.log('Elementor edit button:', elementorBtn ? elementorBtn[0] : 'not found');
}

inspect2063Edit().catch(console.error);
