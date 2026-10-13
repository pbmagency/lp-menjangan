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

const landingJsContent = `(function () {
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

  // Load GTM on first real user interaction
  var gtmLoaded = false;
  function loadGtm() {
    if (gtmLoaded) return;
    gtmLoaded = true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-57DRDWXR');
  }
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function(e) {
    window.addEventListener(e, loadGtm, { once: true, passive: true });
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startLaravelAnalytics);
  } else {
    startLaravelAnalytics();
  }
})();
`;

async function updateJs() {
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

    const filePath = 'menjangan-elementor/assets/landing.js';
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

    const updateParams = {
        _wpnonce: nonce,
        nonce: nonce,
        _wp_http_referer: `/wp/wp-admin/plugin-editor.php?file=${encodeURIComponent(filePath)}&plugin=menjangan-elementor%2Fmenjangan-elementor.php`,
        action: 'update',
        file: filePath,
        plugin: 'menjangan-elementor/menjangan-elementor.php',
        newcontent: landingJsContent,
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

    console.log('Save status:', saveRes.statusCode, 'Location:', saveRes.headers['location']);
}

updateJs().catch(console.error);
