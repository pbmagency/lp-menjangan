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
    console.log('1. Logging in...');
    const cookies = await login();

    // 2. Update menjangan-elementor.php
    console.log('2. Updating menjangan-elementor.php...');
    const editUrl = `https://menjangansnorkelingtripanddiving.com/wp/wp-admin/plugin-editor.php?file=menjangan-elementor%2Fmenjangan-elementor.php&plugin=menjangan-elementor%2Fmenjangan-elementor.php`;
    const editorRes = await request(editUrl, { headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' } });
    const contentMatch = editorRes.body.match(/<textarea[^>]+id="newcontent"[^>]*>([\s\S]*?)<\/textarea>/);
    let php = contentMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"');

    const oldBlockRegex = /add_action\('wp_enqueue_scripts'[\s\S]*?add_action\('wp_head'[\s\S]*?\}, 5\);/;
    const newBlock = `add_action('wp_enqueue_scripts', function () {
    wp_register_style('menjangan-landing', plugins_url('assets/landing.css', __FILE__), [], '1.4.2');
    wp_register_script('menjangan-landing', plugins_url('assets/landing.js', __FILE__), [], '1.4.2', true);

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

add_filter('gtm4wp_render_container', function ($render) {
    if (is_page('c2-lp') || is_page(2092)) {
        return false;
    }
    return $render;
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
        <link rel="preload" as="image" href="/c1/hero-reef-diver-800.avif" type="image/avif" fetchpriority="high">
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
    const phpOk = await updatePluginFile(cookies, 'menjangan-elementor/menjangan-elementor.php', php);
    console.log('PHP updated:', phpOk);

    // 3. Update landing.js with deferred GTM
    console.log('3. Updating landing.js with deferred GTM...');
    const landingJs = `(function () {
  'use strict';

  function setLanguage(lang) {
    var pages = document.querySelectorAll('#page, .menjangan-page');
    pages.forEach(function (page) {
      page.setAttribute('data-lg', lang);
    });
    document.documentElement.lang = lang;

    var enButtons = document.querySelectorAll('#btn-lang-en, .lang-btn[id*="en"]');
    var idButtons = document.querySelectorAll('#btn-lang-id, .lang-btn[id*="id"]');

    enButtons.forEach(function (btn) {
      var active = lang === 'en';
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    idButtons.forEach(function (btn) {
      var active = lang === 'id';
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (event) {
    var langBtn = event.target.closest('#btn-lang-en, #btn-lang-id, .lang-btn');
    if (langBtn) {
      var code = (langBtn.id === 'btn-lang-id' || langBtn.textContent.trim() === 'ID') ? 'id' : 'en';
      setLanguage(code);
      return;
    }

    var heroService = event.target.closest('#btn-hero-snorkeling, #btn-hero-scuba, #btn-hero-discovery');
    if (heroService) {
      event.preventDefault();
      var targetId = heroService.id === 'btn-hero-snorkeling' ? 'snorkeling-intro' :
                     heroService.id === 'btn-hero-scuba' ? 'scuba-diving-section' :
                     'discovery-scuba-section';
      var eventName = heroService.getAttribute('data-event') || heroService.id.replace('btn-', '');
      if (window.dataLayer) {
        window.dataLayer.push({ event: eventName, cta_location: 'hero' });
      }
      var targetElem = document.getElementById(targetId);
      if (targetElem) {
        var header = document.querySelector('header');
        var headerHeight = header ? header.getBoundingClientRect().height : 0;
        var top = targetElem.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
      return;
    }

    var arrow = event.target.closest('#rev-prev-btn, #rev-next-btn, #ta-prev-btn, #ta-next-btn, .rev-arrow-btn');
    if (arrow) {
      var isRev = arrow.id.indexOf('rev') !== -1;
      var track = document.getElementById(isRev ? 'rev-cards-carousel' : 'ta-cards-carousel') ||
                  (arrow.closest('section') && arrow.closest('section').querySelector('.rev-cards-track, .ta-cards-track'));
      if (track) {
        var card = track.querySelector('.rev-card-item, .ta-card-item');
        var cardWidth = card ? (card.getBoundingClientRect().width + 16) : 280;
        var dir = (arrow.id.indexOf('prev') !== -1 || arrow.classList.contains('rev-arrow-prev')) ? -1 : 1;
        track.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
      }
      return;
    }
  });

  // ── Deferred Google Tag Manager (Loads on interaction for real users) ──
  var gtmLoaded = false;
  function loadGTM() {
    if (gtmLoaded) return;
    gtmLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-57DRDWXR';
    document.head.appendChild(s);
  }
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (e) {
    window.addEventListener(e, loadGTM, { once: true, passive: true });
  });

  // ── Analytics Bridge (Connects WordPress to Laravel Analytics) ────────────
  function startLaravelAnalytics() {
    if (window.top !== window || document.body.classList.contains('admin-bar')) return;

    var page = window.location.pathname;
    var params = new URLSearchParams(window.location.search);

    var variantKey = 'ab_variant_c2lp';
    var variant;
    try {
      variant = sessionStorage.getItem(variantKey);
      if (variant !== 'A' && variant !== 'B') {
        variant = Math.random() < 0.5 ? 'A' : 'B';
        sessionStorage.setItem(variantKey, variant);
      }
    } catch (e) {
      variant = 'A';
    }

    window.__abVariant = variant;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      landing_source: 'wordpress:' + page,
      ab_variant: variant
    });

    var csrfPromise = fetch('/analytics/csrf', { credentials: 'same-origin', cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('CSRF fetch failed: ' + res.status);
        return res.json();
      })
      .then(function (data) { return data.token; })
      .catch(function (err) {
        console.warn('Analytics CSRF unavailable:', err);
        return null;
      });

    function generateEventId(prefix) {
      return (prefix || 'evt') + '-' + (window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : (Date.now() + '-' + Math.random().toString(36).slice(2)));
    }

    function send(eventType, eventData) {
      var payload = {
        event_type: eventType,
        event_data: Object.assign({
          page: page,
          landing_source: 'wordpress:' + page,
          ab_variant: variant,
          timestamp: new Date().toISOString()
        }, eventData || {}),
        referral_source: (document.referrer && new URL(document.referrer, location.href).hostname !== window.location.hostname) ? document.referrer.slice(0, 255) : 'direct',
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term')
      };

      return csrfPromise.then(function (token) {
        if (!token) return false;
        return fetch('/analytics/track', {
          method: 'POST',
          credentials: 'same-origin',
          keepalive: true,
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token
          },
          body: JSON.stringify(payload)
        }).then(function (res) { return res.ok; });
      }).catch(function (err) {
        console.warn('Track failed:', err);
        return false;
      });
    }

    var visitKey = 'menjangan_wp_visit:' + page;
    var visitTracked = false;
    try {
      visitTracked = sessionStorage.getItem(visitKey) === 'tracked';
    } catch (e) {}

    if (!visitTracked) {
      send('visit', { event_id: generateEventId('v') }).then(function (ok) {
        if (ok) {
          try { sessionStorage.setItem(visitKey, 'tracked'); } catch (e) {}
        }
      });
    }

    var dwellSent = false;
    window.setTimeout(function () {
      if (!dwellSent && document.visibilityState === 'visible') {
        dwellSent = true;
        send('engagement', { type: 'dwell_ping', duration: 15000, is_initial: true });
      }
    }, 15000);

    var depths = [25, 50, 75, 90];
    window.addEventListener('scroll', function () {
      var available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      var current = Math.round(window.scrollY / available * 100);
      while (depths.length && current >= depths[0]) {
        send('scroll', { depth: depths.shift() });
      }
    }, { passive: true });

    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href*="wa.me/"]');
      if (!link) return;

      var section = link.closest('section, header, footer');
      var locationId = (link.id || (section && section.id) || 'c2-landing').slice(0, 100);
      var text = (link.textContent || '').trim().slice(0, 255);
      var dest = link.href.slice(0, 2048);
      var convEventId = generateEventId('wa');

      send('cta_click', { location: locationId, text: text, destination: dest });
      send('conversion', { type: 'wa_inquiry', location: locationId, destination: dest, event_id: convEventId });

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'whatsapp_click',
          location: locationId,
          text: text,
          destination: dest,
          ab_variant: variant
        });
        window.dataLayer.push({
          event: 'conversion',
          conversion_type: 'whatsapp_lead',
          location: locationId,
          event_id: convEventId
        });
        window.dataLayer.push({
          event: 'generate_lead',
          lead_source: 'wordpress:' + page
        });
      }

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: locationId,
          content_category: 'WhatsApp',
          value: 0,
          currency: 'IDR'
        }, { eventID: convEventId });
      }

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: locationId
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startLaravelAnalytics);
  } else {
    startLaravelAnalytics();
  }
})();
`;
    const jsOk = await updatePluginFile(cookies, 'menjangan-elementor/assets/landing.js', landingJs);
    console.log('JS updated:', jsOk);

    // 4. Update Page 2092 with local avatars and clean markup
    console.log('4. Updating Page 2092 content with local avatars...');
    const postEditRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-admin/post-new.php?post_type=page', {
        headers: { 'Cookie': cookies, 'User-Agent': 'Mozilla/5.0' }
    });
    const apiMatch = postEditRes.body.match(/wpApiSettings = (\{[^}]+\});/);
    const apiSettings = apiMatch ? JSON.parse(apiMatch[1]) : null;

    let c2Html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
    c2Html = c2Html.replace('id="page"', 'id="page" class="menjangan-page"');

    // Replace lh3 avatar URLs with local avatars
    c2Html = c2Html.replace(
        'https://lh3.googleusercontent.com/a-/ALV-UjWgkfdm69EosFB2aGTOvOG8fJAhDiDs-6kjQHwAfen3aB7WXMDY-g=w80-h80-c-rp-mo-br100',
        'https://menjangansnorkelingtripanddiving.com/wp/wp-content/plugins/menjangan-elementor/assets/avatars/google-1.jpg'
    );
    c2Html = c2Html.replace(
        'https://lh3.googleusercontent.com/a-/ALV-UjUe8F2EkfzifVFcolV6LH52P7urkwIJt9u-9YQRxgiRzuqEgGSdQw=w80-h80-c-rp-mo-ba12-br100',
        'https://menjangansnorkelingtripanddiving.com/wp/wp-content/plugins/menjangan-elementor/assets/avatars/google-2.jpg'
    );
    c2Html = c2Html.replace(
        'https://lh3.googleusercontent.com/a-/ALV-UjW-6b9dWJYlqucqyOG9MKBwePsZDQk6FMk2lCZxhY9Z1lN2FcE=w80-h80-c-rp-mo-br100',
        'https://menjangansnorkelingtripanddiving.com/wp/wp-content/plugins/menjangan-elementor/assets/avatars/google-3.jpg'
    );

    const updateRes = await request('https://menjangansnorkelingtripanddiving.com/wp/wp-json/wp/v2/pages/2092', {
        method: 'POST',
        headers: {
            'Cookie': cookies,
            'X-WP-Nonce': apiSettings.nonce,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0'
        }
    }, JSON.stringify({
        content: c2Html
    }));
    console.log('Post 2092 update status:', updateRes.statusCode);

    // 5. Verify the live page
    console.log('5. Verifying live page...');
    const pub = await request('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    console.log('Served timestamp:', pub.body.match(/Served from: [^\n]+/)?.[0]);
    console.log('Has meta description:', pub.body.includes('name="description"'));
    console.log('Has local avatar 1:', pub.body.includes('google-1.jpg'));
    console.log('Has gtm4wp disabled:', !pub.body.includes('gtm4wp_datalayer_name'));
}

main().catch(console.error);
