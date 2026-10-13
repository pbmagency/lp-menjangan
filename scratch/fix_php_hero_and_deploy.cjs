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
            res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
        });
        req.on('error', reject);
        if (postData) req.write(postData);
        req.end();
    });
}

async function fixAndDeploy() {
    console.log('Logging in to WordPress...');
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

    const nonceMatch = editorRes.body.match(/id="nonce"\s+name="nonce"\s+value="([^"]+)"/);
    const nonce = nonceMatch[1];

    const contentMatch = editorRes.body.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    let phpContent = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

    // Fix the dark overlay in PHP
    const darkGradient = 'linear-gradient(180deg, rgba(8, 20, 38, 0.88) 0%, rgba(8, 20, 38, 0.72) 50%, rgba(8, 20, 38, 0.82) 100%)';
    const brightGradient = 'linear-gradient(180deg, rgba(15, 26, 48, 0.52) 0%, rgba(15, 26, 48, 0.18) 34%, rgba(15, 26, 48, 0.74) 74%, rgba(15, 26, 48, 0.92) 100%)';
    
    if (phpContent.includes(darkGradient)) {
        phpContent = phpContent.replace(darkGradient, brightGradient);
        console.log('Replaced dark gradient in menjangan-elementor.php with bright gradient!');
    }

    const updateParams = {
        _wpnonce: nonce,
        nonce: nonce,
        _wp_http_referer: `/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`,
        action: 'update',
        file: filePath,
        plugin: 'menjangan-elementor/menjangan-elementor.php',
        newcontent: phpContent,
        submit: 'Update File'
    };

    const updateBody = querystring.stringify(updateParams);
    const updateRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(updateBody),
            'Cookie': cookies,
            'User-Agent': 'Mozilla/5.0'
        }
    }, updateBody);
    console.log('menjangan-elementor.php updated! HTTP:', updateRes.statusCode);

    // Purge cache
    console.log('Purging W3TC Disk Cache...');
    const purgeRes = await request('https://menjangansnorkelingtripanddiving.com/wp/?purge_w3tc_disk=arif2026', {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Cache purge response:', purgeRes.statusCode, purgeRes.body.trim());
}

fixAndDeploy();
