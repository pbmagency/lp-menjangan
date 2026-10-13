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

async function addCachePurger() {
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
    let php = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

    // Add immediate disk cache purger on request
    const purgeCode = `
add_action('init', function () {
    if (isset($_GET['purge_w3tc_disk']) && $_GET['purge_w3tc_disk'] === 'arif2026') {
        $cache_dir = WP_CONTENT_DIR . '/cache/page_enhanced';
        if (is_dir($cache_dir)) {
            $files = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($cache_dir, RecursiveDirectoryIterator::SKIP_DOTS),
                RecursiveIteratorIterator::CHILD_FIRST
            );
            foreach ($files as $fileinfo) {
                $todo = ($fileinfo->isDir() ? 'rmdir' : 'unlink');
                @$todo($fileinfo->getRealPath());
            }
        }
        if (function_exists('w3tc_flush_all')) @w3tc_flush_all();
        wp_die('DISK_CACHE_PURGED_OK');
    }
});
`;
    if (!php.includes('purge_w3tc_disk')) {
        php = php.replace('defined(\'ABSPATH\') || exit;', 'defined(\'ABSPATH\') || exit;' + purgeCode);
    }

    const updateParams = {
        _wpnonce: nonce,
        nonce: nonce,
        _wp_http_referer: `/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`,
        action: 'update',
        file: filePath,
        plugin: 'menjangan-elementor/menjangan-elementor.php',
        newcontent: php,
        submit: 'Update File'
    };
    const updateBody = querystring.stringify(updateParams);
    const saveRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(updateBody),
            'User-Agent': 'Mozilla/5.0'
        }
    }, updateBody);

    console.log('Purger added, save status:', saveRes.statusCode);

    // Call the purge URL!
    console.log('Triggering purge_w3tc_disk...');
    const purgeRes = await request('https://menjangansnorkelingtripanddiving.com/wp/?purge_w3tc_disk=arif2026');
    console.log('Purge response:', purgeRes.statusCode, purgeRes.body.trim());

    // Check public page
    const pub = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    console.log('Public page timestamp:\n', pub.body.match(/Served from: [^\n]+/)?.[0]);
    console.log('Has local avatar 1:', pub.body.includes('google-1.jpg'));
    console.log('Has meta description:', pub.body.includes('name="description"'));
    console.log('Has gtm4wp disabled:', !pub.body.includes('gtm4wp_datalayer_name'));
}

addCachePurger().catch(console.error);
