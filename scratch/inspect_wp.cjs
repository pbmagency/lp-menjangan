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

async function inspectWP() {
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
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    }, postBody);

    const cookies = res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');

    // 1. Check pages list in wp-admin
    console.log('--- Fetching Pages list ---');
    const pagesRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/edit.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('Pages list status:', pagesRes.statusCode);
    const pageRows = pagesRes.body.match(/<a class="row-title"[^>]*>([^<]+)<\/a>/g) || [];
    console.log('Existing Pages:', pageRows.slice(0, 10));

    // 2. Check active plugins
    console.log('\n--- Fetching Plugins list ---');
    const pluginsRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugins.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const pluginNames = pluginsRes.body.match(/<strong class="plugin-name">([^<]+)<\/strong>/g) || 
                        pluginsRes.body.match(/<td class="plugin-title[^>]*><strong>([^<]+)<\/strong>/g) || [];
    console.log('Active plugins:', pluginNames);

    // 3. Check theme
    console.log('\n--- Fetching Themes list ---');
    const themesRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/themes.php', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const currentTheme = themesRes.body.match(/<h3>Current Theme<\/h3>[^<]*<h2[^>]*>([^<]+)<\/h2>/i) ||
                         themesRes.body.match(/current-theme[^>]*>[\s\S]*?<h3>([^<]+)<\/h3>/i) ||
                         themesRes.body.match(/class="theme-name"[^>]*>([^<]+)<\/span>/g);
    console.log('Theme info snippet:', currentTheme ? currentTheme.slice(0, 2) : 'Not found');

    // 4. Check REST API /wp/v2/pages
    console.log('\n--- Fetching REST API pages ---');
    const restPages = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    console.log('REST pages status:', restPages.statusCode);
    if (restPages.statusCode === 200) {
        try {
            const pages = JSON.parse(restPages.body);
            pages.forEach(p => console.log(`ID: ${p.id}, Slug: ${p.slug}, Title: ${p.title?.rendered}, Link: ${p.link}`));
        } catch(e) {
            console.error('Parse error:', e);
        }
    }
}

inspectWP().catch(console.error);
