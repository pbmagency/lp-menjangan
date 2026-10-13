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

async function checkPluginEditor() {
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

    const editorRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?plugin=menjangan-elementor%2Fmenjangan-elementor.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    console.log('Plugin editor status:', editorRes.statusCode);
    fs.writeFileSync('scratch/menjangan_editor.html', editorRes.body);

    const regex = /file=([^&"']+)/g;
    const files = new Set();
    let m;
    while ((m = regex.exec(editorRes.body)) !== null) {
        files.add(decodeURIComponent(m[1]));
    }
    console.log('Menjangan plugin files:', Array.from(files));

    const nonceMatch = editorRes.body.match(/name="_wpnonce"\s+value="([^"]+)"/);
    console.log('Nonce:', nonceMatch ? nonceMatch[1] : null);

    const isWritable = !editorRes.body.includes('cannot be edited') && !editorRes.body.includes('DISALLOW_FILE_EDIT');
    console.log('Is writable likely:', isWritable);
}

checkPluginEditor().catch(console.error);
