const https = require('https');
const querystring = require('querystring');
const fs = require('fs');

async function getPhp() {
    const postBody = querystring.stringify({
        log: 'admin',
        pwd: 'arifadmin',
        'wp-submit': 'Log In',
        redirect_to: 'https://menjangansnorkelingtripanddiving.com/wp/wp-admin/',
        testcookie: '1'
    });

    const loginRes = await new Promise((resolve) => {
        const req = https.request('https://menjangansnorkelingtripanddiving.com/wp/wp-login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postBody),
                'Cookie': 'wordpress_test_cookie=WP%20Cookie%20check'
            }
        }, res => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve({ res, data }));
        });
        req.write(postBody);
        req.end();
    });

    const cookies = loginRes.res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');

    const editorRes = await new Promise((resolve) => {
        const req = https.request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=menjangan-elementor%2Fmenjangan-elementor.php&plugin=menjangan-elementor%2Fmenjangan-elementor.php', {
            headers: { Cookie: cookies }
        }, res => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve({ res, data }));
        });
        req.end();
    });

    const contentMatch = editorRes.data.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    if (contentMatch) {
        let code = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');
        fs.writeFileSync('scratch/menjangan-elementor-current.php', code);
        console.log('Saved PHP, length:', code.length);
    } else {
        console.error('Could not extract code');
    }
}
getPhp().catch(console.error);
