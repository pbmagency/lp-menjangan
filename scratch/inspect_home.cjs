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

async function inspectHome() {
    console.log('Fetching https://menjangansnorkelingtripanddiving.com/wp/ ...');
    const res = await request('https://menjangansnorkelingtripanddiving.com/wp/');
    console.log('Status:', res.statusCode);
    fs.writeFileSync('scratch/wp-home.html', res.body);
    console.log('Length:', res.body.length);
    console.log('Title:', (res.body.match(/<title>([^<]+)<\/title>/i) || [])[1]);
    console.log('Has elementor:', res.body.includes('elementor'));
    console.log('Has menjangan-landing:', res.body.includes('menjangan-landing'));
    console.log('Has c1:', res.body.includes('/c1/'));
    console.log('Has c2:', res.body.includes('/c2/'));
}

inspectHome().catch(console.error);
