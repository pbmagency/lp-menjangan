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

async function login() {
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

    return res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
}

async function updatePluginFile(cookies, filePath, content) {
    const editUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`;
    const editorRes = await request(editUrl, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    const nonceMatch = editorRes.body.match(/id="nonce"\s+name="nonce"\s+value="([^"]+)"/);
    if (!nonceMatch) throw new Error('Could not get nonce for ' + filePath);
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

    const saveRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(updateBody),
            'User-Agent': 'Mozilla/5.0'
        }
    }, updateBody);

    return saveRes.statusCode === 302 || saveRes.body.includes('File edited successfully');
}

async function main() {
    console.log('Logging in...');
    const cookies = await login();

    const editUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=menjangan-elementor%2Fmenjangan-elementor.php&plugin=menjangan-elementor%2Fmenjangan-elementor.php`;
    const editorRes = await request(editUrl, { headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' } });
    const contentMatch = editorRes.body.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    let php = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

    const oldBlockRegex = /add_action\('wp_enqueue_scripts'[\s\S]*?add_action\('wp_head'[\s\S]*?\}, 5\);/;
    const newBlock = `add_action('wp_enqueue_scripts', function () {
    wp_register_style('menjangan-landing', plugins_url('assets/landing.css', __FILE__), [], '1.4.3');
    wp_register_script('menjangan-landing', plugins_url('assets/landing.js', __FILE__), [], '1.4.3', true);

    if (is_page('c2-lp') || is_page(2092)) {
        wp_enqueue_style('menjangan-landing');
        wp_enqueue_script('menjangan-landing');
    }
});

add_action('template_redirect', function () {
    if (is_page('c2-lp') || is_page(2092)) {
        remove_filter('the_content', 'wpautop');
    }
});

add_filter('option_gtm4wp-options', function ($options) {
    if (is_page('c2-lp') || is_page(2092)) {
        if (is_array($options)) {
            $options['gtm-code'] = '';
        }
    }
    return $options;
});

// The existing Clarity project used by the Menjangan Laravel landing page with interaction deferral.
add_action('wp_head', function () {
    if (is_admin() || isset($_GET['elementor-preview'])) return;
    ?>
    <!-- Menjangan Microsoft Clarity -->
    <script id="menjangan-clarity" type="text/javascript">
    (function(){
        function loadClarity() {
            if (window.clarityLoaded) return;
            window.clarityLoaded = true;
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y5mhtiav9f");
        }
        ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function(e) {
            window.addEventListener(e, loadClarity, { once: true, passive: true });
        });
    })();
    </script>
    <?php
    if (is_page('c2-lp') || is_page(2092)) {
        ?>
        <meta name="description" content="Explore Menjangan Island snorkeling and diving trips with licensed local guides. Small groups, equipment, park permit, lunch, and daily departures from Banyuwedang Harbour.">
        <link rel="preload" href="/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" as="image" href="/c1/hero-reef-diver-800.avif" type="image/avif" imagesrcset="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w" imagesizes="100vw" fetchpriority="high">
        <style id="c2-body-reset">
        body.page-id-2092, body.page-template-elementor_canvas {
            margin: 0 !important;
            padding: 0 !important;
            --wp--style--root--padding-left: 0px !important;
            --wp--style--root--padding-right: 0px !important;
            overflow-x: hidden !important;
            background-color: #f2f2f3;
        }
        </style>
        <?php
    }
}, 5);`;

    php = php.replace(oldBlockRegex, newBlock);
    const ok = await updatePluginFile(cookies, 'menjangan-elementor/menjangan-elementor.php', php);
    console.log('PHP updated:', ok);

    console.log('Purging disk cache...');
    await request('https://menjangansnorkelingtripanddiving.com/wp/?purge_w3tc_disk=arif2026');

    // Warm up cache
    console.log('Warming up cache...');
    const pub = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    console.log('Fresh cache timestamp:\n', pub.body.match(/Served from: [^\n]+/)?.[0]);
    console.log('Has gtm.js in body:', pub.body.includes('//www.googletagmanager.com/gtm.js'));
    console.log('Has meta description:', pub.body.includes('name="description"'));
}

main().catch(console.error);
