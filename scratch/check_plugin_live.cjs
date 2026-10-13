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
            res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
        });
        req.on('error', reject);
        if (postData) req.write(postData);
        req.end();
    });
}

async function check() {
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
    const filePath = 'menjangan-elementor/menjangan-elementor.php';
    const editUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`;
    const editorRes = await request(editUrl, { headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' } });

    const contentMatch = editorRes.body.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    let phpContent = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');
    
    console.log('Plugin version in live PHP:');
    const verMatch = phpContent.match(/Version: ([^\r\n]+)/);
    console.log(verMatch ? verMatch[0] : 'not found');
    const enqMatch = phpContent.match(/wp_register_style\([^;]+\);/);
    console.log(enqMatch ? enqMatch[0] : 'not found');

    const heroOverlay = phpContent.match(/\.hero-overlay\s*\{[^}]+\}/);
    console.log('Hero overlay in PHP:', heroOverlay ? heroOverlay[0] : 'none');

    const ctaMatches = [...phpContent.matchAll(/(?:cta|btn)[^{]*\{[^}]*background:[^}]*\}/gi)];
    console.log('CTA background rules in PHP:', ctaMatches.map(m => m[0]));
}
check();
