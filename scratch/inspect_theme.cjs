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

async function inspectThemeFiles() {
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

    // Check active theme in theme editor
    const te = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/theme-editor.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    fs.writeFileSync('scratch/theme-editor.html', te.body);

    const selectTheme = te.body.match(/<select[^>]*name="theme"[^>]*>([\s\S]*?)<\/select>/i);
    if (selectTheme) {
        console.log('Themes in theme-editor:', selectTheme[1]);
    }

    const currentFile = te.body.match(/<textarea[^>]*id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/i);
    if (currentFile) {
        console.log('Theme editor file content preview:');
        console.log(currentFile[1].slice(0, 300));
    }
}

inspectThemeFiles().catch(console.error);
