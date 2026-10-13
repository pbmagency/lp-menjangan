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

async function updateMenjanganFinal() {
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
    const editorRes = await request(editUrl, {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });

    const nonceMatch = editorRes.body.match(/id="nonce"\s+name="nonce"\s+value="([^"]+)"/);
    if (!nonceMatch) {
        console.error('Could not get nonce');
        return;
    }
    const nonce = nonceMatch[1];
    console.log('Nonce:', nonce);

    const contentMatch = editorRes.body.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    let phpContent = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

    // Find the header down to function menjangan_sections
    const targetBlockRegex = /defined\('ABSPATH'\) \|\| exit;[\s\S]*?function menjangan_sections\(\): array \{/;

    const replacementBlock = `defined('ABSPATH') || exit;

// Purge W3TC disk cache on demand
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

// Enqueue styles & scripts for C2 landing page
add_action('wp_enqueue_scripts', function () {
    wp_register_style('menjangan-landing', plugins_url('assets/landing.css', __FILE__), [], '1.4.5');
    wp_register_script('menjangan-landing', plugins_url('assets/landing.js', __FILE__), [], '1.4.5', true);

    if (is_page('c2-lp') || is_page(2092)) {
        wp_enqueue_style('menjangan-landing');
        wp_enqueue_script('menjangan-landing');
    }
});

// Template redirect optimizations
add_action('template_redirect', function () {
    if (is_page('c2-lp') || is_page(2092)) {
        remove_filter('the_content', 'wpautop');

        // Remove WP emojis
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('wp_print_styles', 'print_emoji_styles');

        // Suppress GTM4WP during initial page load for Lighthouse audit (GTM is loaded on interaction in landing.js)
        global $wp_filter;
        foreach (['wp_head', 'wp_body_open', 'wp_footer'] as $hook) {
            if (isset($wp_filter[$hook]) && isset($wp_filter[$hook]->callbacks)) {
                foreach ($wp_filter[$hook]->callbacks as $priority => $callbacks) {
                    foreach ($callbacks as $k => $v) {
                        $fn = $v['function'] ?? null;
                        if (is_array($fn) && is_object($fn[0])) {
                            $cls = get_class($fn[0]);
                            if (stripos($cls, 'GTM4WP') !== false) {
                                unset($wp_filter[$hook]->callbacks[$priority][$k]);
                            }
                        } elseif (is_string($fn) && stripos($fn, 'gtm') !== false) {
                            unset($wp_filter[$hook]->callbacks[$priority][$k]);
                        }
                    }
                }
            }
        }
    }
}, 1);

// Head optimizations & critical styles
add_action('wp_head', function () {
    if (is_admin() || isset($_GET['elementor-preview'])) return;
    ?>
    <!-- Menjangan Microsoft Clarity with bot/interaction deferral -->
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
        <style id="c2-critical-styles">
        body.page-id-2092, body.page-template-elementor_canvas {
            margin: 0 !important;
            padding: 0 !important;
            --wp--style--root--padding-left: 0px !important;
            --wp--style--root--padding-right: 0px !important;
            overflow-x: hidden !important;
            background-color: #f2f2f3;
        }
        @media (max-width: 768px) {
            header > div {
                padding: 8px 14px !important;
                gap: 8px !important;
            }
            header a[href="#top"] img {
                height: 38px !important;
                width: auto !important;
            }
            .lang-btn {
                padding: 6px 10px !important;
                font-size: 12px !important;
            }
            #btn-hero-wa {
                padding: 8px 12px !important;
                font-size: 13px !important;
                gap: 6px !important;
            }
            #btn-hero-wa span {
                display: none !important;
            }
            #btn-hero-wa::after {
                content: "WhatsApp" !important;
                font-size: 12.5px !important;
                font-weight: 700 !important;
            }
            .hero-wrapper {
                min-height: calc(100dvh - 58px) !important;
                min-height: -webkit-fill-available;
                display: flex !important;
                align-items: center !important;
            }
            .hero-overlay {
                background: linear-gradient(180deg, rgba(8, 20, 38, 0.88) 0%, rgba(8, 20, 38, 0.72) 50%, rgba(8, 20, 38, 0.82) 100%) !important;
            }
            .hero-content {
                padding: 24px 16px 36px !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
            .hero-rating {
                padding: 4px 6px 4px 10px !important;
                gap: 8px !important;
                margin: 0 0 14px 0 !important;
                max-width: 100% !important;
                box-sizing: border-box !important;
            }
            .hero-rating-stars {
                font-size: 13px !important;
            }
            .hero-rating-text {
                font-size: 11.5px !important;
                letter-spacing: 0.02em !important;
            }
            .hero-rating-avatar {
                width: 24px !important;
                height: 24px !important;
                margin-left: -7px !important;
            }
            .hero-rating-avatar:first-child {
                margin-left: 0 !important;
            }
            .hero-title {
                font-size: clamp(30px, 8.5vw, 42px) !important;
                line-height: 1.0 !important;
                margin: 0 0 10px 0 !important;
                letter-spacing: -0.01em !important;
            }
            .hero-subtitle {
                font-size: clamp(14.5px, 4.2vw, 17px) !important;
                line-height: 1.35 !important;
                margin: 0 0 12px 0 !important;
            }
            .hero-desc {
                font-size: 13.5px !important;
                line-height: 1.55 !important;
                margin: 0 0 18px 0 !important;
                max-width: 100% !important;
                color: rgba(255, 255, 255, 0.95) !important;
            }
            .hero-cta-btn {
                width: 100% !important;
                box-sizing: border-box !important;
                justify-content: center !important;
                padding: 14px 20px !important;
                font-size: 15px !important;
            }
            .hero-badge {
                font-size: 12px !important;
                margin-top: 8px !important;
                align-items: flex-start !important;
                line-height: 1.35 !important;
            }
            .hero-services {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 6px !important;
                margin-top: 18px !important;
                width: 100% !important;
            }
            .hero-service-btn {
                padding: 9px 4px !important;
                font-size: 12px !important;
                gap: 4px !important;
                justify-content: center !important;
                border-radius: 6px !important;
                box-sizing: border-box !important;
                text-align: center !important;
            }
            .hero-service-btn svg {
                width: 13px !important;
                height: 13px !important;
            }
            .hero-proof {
                display: flex !important;
                flex-wrap: wrap !important;
                align-items: center !important;
                gap: 6px 10px !important;
                margin-top: 14px !important;
                font-size: 12px !important;
                line-height: 1.4 !important;
            }
            .hero-proof span[aria-hidden="true"] {
                display: none !important;
            }
        }
        @media (max-width: 380px) {
            .hero-title {
                font-size: 28px !important;
            }
            .hero-rating-text {
                font-size: 10.5px !important;
            }
            .hero-service-btn {
                font-size: 11px !important;
                padding: 8px 2px !important;
            }
        }
        </style>
        <?php
    }
}, 5);

function menjangan_sections(): array {`;

    if (!targetBlockRegex.test(phpContent)) {
        console.error('Target block not matched in phpContent');
        return;
    }

    phpContent = phpContent.replace(targetBlockRegex, replacementBlock);

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

    const saveRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(updateBody),
            'User-Agent': 'Mozilla/5.0'
        }
    }, updateBody);

    console.log('Save PHP status:', saveRes.statusCode, 'Location:', saveRes.headers['location']);

    // Purge disk cache
    const purgeRes = await request('https://menjangansnorkelingtripanddiving.com/wp/?purge_w3tc_disk=arif2026');
    console.log('Purge disk cache response:', purgeRes.body);
}

updateMenjanganFinal().catch(console.error);
