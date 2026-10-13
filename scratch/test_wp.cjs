const https = require('https');

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

async function testWp() {
    console.log('1. Checking wp-login.php...');
    const step1 = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-login.php');
    console.log('Status:', step1.statusCode);
    const cookies = step1.headers['set-cookie'] || [];
    console.log('Cookies:', cookies);

    // Try WP REST API
    console.log('2. Checking WP REST API...');
    const rest = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/');
    console.log('REST Status:', rest.statusCode);
    if (rest.statusCode === 200) {
        try {
            const json = JSON.parse(rest.body);
            console.log('Site Name:', json.name);
            console.log('Namespaces:', json.namespaces);
            console.log('Auth:', json.authentication);
        } catch(e) {
            console.log('Body snippet:', rest.body.slice(0, 200));
        }
    }
}

testWp().catch(console.error);
