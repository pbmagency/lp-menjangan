(function () {
  function setLanguage(lang) {
    document.querySelectorAll('.menjangan-page').forEach(function (page) {
      page.setAttribute('data-lg', lang);
    });
    document.querySelectorAll('.menjangan-page .lang-btn').forEach(function (button) {
      var active = button.id === 'btn-lang-' + lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (event) {
    var languageButton = event.target.closest('.menjangan-page .lang-btn');
    if (languageButton) {
      setLanguage(languageButton.id === 'btn-lang-id' ? 'id' : 'en');
      return;
    }
    var arrow = event.target.closest('.menjangan-page .rev-arrow-btn, .menjangan-page [id="ta-prev-btn"], .menjangan-page [id="ta-next-btn"]');
    if (arrow) {
      var section = arrow.closest('section');
      var track = section && section.querySelector('.rev-cards-track, .ta-cards-track');
      if (track) {
        var card = track.querySelector('.rev-card-item, .ta-card-item');
        var width = card ? card.getBoundingClientRect().width + 16 : 300;
        var direction = /prev/.test(arrow.id || arrow.className) ? -1 : 1;
        track.scrollBy({ left: direction * width * 2, behavior: 'smooth' });
      }
      return;
    }
    var wa = event.target.closest('.menjangan-page a[href*="wa.me/"]');
    if (wa && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_click', location: wa.id || 'menjangan-section' });
    }
  });

  // Feed the existing Laravel /admin analytics dashboard from the WordPress page.
  // The Laravel route issues a session-bound CSRF token; no token is embedded in
  // the public page or stored in WordPress.
  function startLaravelAnalytics() {
    if (!document.querySelector('.menjangan-page') || window.top !== window || document.body.classList.contains('admin-bar')) return;

    var page = window.location.pathname;
    var params = new URLSearchParams(window.location.search);
    var csrf = fetch('/analytics/csrf', { credentials: 'same-origin', cache: 'no-store' })
      .then(function (response) { if (!response.ok) throw new Error('Analytics bridge unavailable'); return response.json(); })
      .then(function (data) { return data.token; });

    function eventId() {
      return window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : String(Date.now()) + '-' + Math.random().toString(36).slice(2);
    }

    function send(type, data) {
      var payload = {
        event_type: type,
        event_data: Object.assign({ page: page, landing_source: 'wordpress:' + page, timestamp: new Date().toISOString() }, data || {}),
        referral_source: document.referrer && new URL(document.referrer).hostname !== window.location.hostname ? document.referrer : 'direct',
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term')
      };
      return csrf.then(function (token) {
        return fetch('/analytics/track', {
          method: 'POST', credentials: 'same-origin', keepalive: true,
          headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token },
          body: JSON.stringify(payload)
        });
      }).then(function (response) { return response.ok; }).catch(function () { return false; });
    }

    var visitKey = 'menjangan_wp_visit:' + page;
    if (sessionStorage.getItem(visitKey) !== 'tracked') {
      send('visit', { event_id: eventId() }).then(function (ok) {
        if (ok) sessionStorage.setItem(visitKey, 'tracked');
      });
    }

    var dwellSent = false;
    window.setTimeout(function () {
      if (!dwellSent && document.visibilityState === 'visible') {
        dwellSent = true;
        send('engagement', { type: 'dwell_ping', duration: 15000, is_initial: true });
      }
    }, 15000);

    var depths = [25, 50, 75, 100];
    window.addEventListener('scroll', function () {
      var available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      var current = Math.round(window.scrollY / available * 100);
      while (depths.length && current >= depths[0]) send('scroll', { depth: depths.shift() });
    }, { passive: true });

    document.addEventListener('click', function (event) {
      var link = event.target.closest('.menjangan-page a[href*="wa.me/"]');
      if (!link) return;
      var section = link.closest('section, header, footer');
      var location = (link.id || (section && section.id) || 'menjangan-section').slice(0, 100);
      var destination = link.href.slice(0, 2048);
      send('cta_click', { location: location, text: (link.textContent || '').trim().slice(0, 255), destination: destination });
      send('conversion', { type: 'wa_inquiry', location: location, destination: destination, event_id: eventId() });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startLaravelAnalytics);
  else startLaravelAnalytics();
})();
