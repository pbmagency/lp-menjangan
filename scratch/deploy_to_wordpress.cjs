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

async function loginWP() {
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
    console.log('Logged in successfully!');
    return cookies;
}

async function updatePluginFile(cookies, filePath, content) {
    console.log(`Updating plugin file: ${filePath}...`);
    const editUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`;
    const editorRes = await request(editUrl, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    const nonceMatch = editorRes.body.match(/id="nonce"\s+name="nonce"\s+value="([^"]+)"/);
    if (!nonceMatch) {
        throw new Error('Could not get nonce for file: ' + filePath);
    }
    const nonce = nonceMatch[1];

    const updateParams = {
        _wpnonce: nonce,
        nonce: nonce,
        _wp_http_referer: `/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`,
        action: 'update',
        file: filePath,
        plugin: 'menjangan-elementor/menjangan-elementor.php',
        newcontent: content,
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

    console.log(`Plugin file ${filePath} updated! HTTP: ${updateRes.statusCode}`);
}

async function updatePage2092(cookies) {
    console.log('Fetching REST API nonce for page 2092...');
    const editRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post-new.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const match = editRes.body.match(/wpApiSettings = (\{[^}]+\});/);
    if (!match) throw new Error('Could not find wpApiSettings nonce');
    const apiSettings = JSON.parse(match[1]);

    let c2Html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
    c2Html = c2Html.replace('id="page"', 'id="page" class="menjangan-page"');

    console.log(`Updating page 2092 content (${c2Html.length} bytes)...`);
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

    console.log(`Page 2092 updated! HTTP: ${updateRes.statusCode}`);
    if (updateRes.statusCode !== 200) {
        console.error('Page update error:', updateRes.body);
    }
}

async function bumpPluginVersion(cookies) {
    console.log('Fetching menjangan-elementor.php to bump version...');
    const filePath = 'menjangan-elementor/menjangan-elementor.php';
    const editUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`;
    const editorRes = await request(editUrl, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    const contentMatch = editorRes.body.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    let phpContent = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

    // Bump version string
    phpContent = phpContent.replace(/'1\.4\.8'/g, "'1.4.9'").replace(/'1\.4\.7'/g, "'1.4.9'");
    await updatePluginFile(cookies, filePath, phpContent);
}

async function purgeCache() {
    console.log('Purging W3TC Disk Cache...');
    const purgeRes = await request('https://menjangansnorkelingtripanddiving.com/wp/?purge_w3tc_disk=arif2026', {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Purge response:', purgeRes.statusCode, purgeRes.body.trim());
}

async function deploy() {
    try {
        const cookies = await loginWP();

        // 1. Update landing.css
        const cssContent = fs.readFileSync('resources/css/landing.css', 'utf8');
        await updatePluginFile(cookies, 'menjangan-elementor/assets/landing.css', cssContent);

        // 2. Bump version in menjangan-elementor.php
        await bumpPluginVersion(cookies);

        // 3. Update page 2092 content
        await updatePage2092(cookies);

        // 4. Purge cache
        await purgeCache();

        console.log('=== DEPLOYMENT COMPLETED SUCCESSFULLY ===');
    } catch (e) {
        console.error('Deployment failed:', e);
    }
}

deploy();
