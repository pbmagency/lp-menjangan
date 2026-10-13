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

async function inspectHooks() {
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

    // Add hook inspector on request
    const debugCode = `
add_action('init', function () {
    if (isset($_GET['debug_hooks'])) {
        global $wp_filter;
        $footer_callbacks = [];
        if (isset($wp_filter['wp_footer'])) {
            foreach ($wp_filter['wp_footer']->callbacks as $priority => $callbacks) {
                foreach ($callbacks as $k => $v) {
                    $footer_callbacks[] = "[$priority] " . (is_string($v['function']) ? $v['function'] : (is_array($v['function']) ? (is_object($v['function'][0]) ? get_class($v['function'][0]) . '->' . $v['function'][1] : $v['function'][0] . '::' . $v['function'][1]) : 'Closure'));
                }
            }
        }
        wp_die(implode("\\n", $footer_callbacks));
    }
});
`;
    if (!php.includes('debug_hooks')) {
        php = php.replace('defined(\'ABSPATH\') || exit;', 'defined(\'ABSPATH\') || exit;' + debugCode);
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
    await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(updateBody),
            'User-Agent': 'Mozilla/5.0'
        }
    }, updateBody);

    const testRes = await request('https://menjangansnorkelingtripanddiving.com/wp/?debug_hooks=1');
    console.log('WP Footer callbacks:\n', testRes.body);
}

inspectHooks().catch(console.error);
