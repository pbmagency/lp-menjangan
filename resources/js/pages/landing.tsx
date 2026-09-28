import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import LandingBelow from './landing-below';

export default function Landing() {
  const [lang, setLang] = useState<'en' | 'id'>('en');

  // ── Analytics + A/B Testing Tracking for '/' ─────────────────────────────
  useEffect(() => {
    const isBot = navigator.webdriver ||
      /Lighthouse|HeadlessChrome|Chrome-Lighthouse/i.test(navigator.userAgent) ||
      (window.innerWidth === 412 && window.innerHeight === 823 && window.devicePixelRatio === 1.75);
    if (isBot) return;
    const page = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const LANDING_KEY = 'landing_source';
    const REFERRAL_KEY = 'referral_source';
    const AB_KEY = 'ab_variant_landing';
    const MILESTONES = [25, 50, 75, 90];

    const get = (k: string) => { try { return sessionStorage.getItem(k); } catch { return null; } };
    const set = (k: string, v: string) => { try { sessionStorage.setItem(k, v); } catch {} };

    // Init Session
    if (!get(LANDING_KEY)) set(LANDING_KEY, page);
    if (!get(REFERRAL_KEY)) {
      let ref = params.get('ref') || 'direct';
      if (document.referrer) {
        try {
          if (new URL(document.referrer).hostname !== window.location.hostname) {
            ref = document.referrer;
          }
        } catch {}
      }
      set(REFERRAL_KEY, ref);
    }

    // A/B Variant Assignment (50/50 split per session)
    if (!get(AB_KEY)) set(AB_KEY, Math.random() < 0.5 ? 'A' : 'B');
    (window as any).__abVariant = get(AB_KEY);

    const eventId = (prefix: string) =>
      prefix + '-' + (crypto.randomUUID?.() ?? (Date.now() + '-' + Math.random().toString(36).slice(2, 11)));

    const cookie = (name: string) => {
      const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    };

    const track = (type: string, data: Record<string, unknown> = {}, useBeacon = false) => {
      const csrf = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
      const payload = JSON.stringify({
        event_type: type,
        event_data: Object.assign(
          { landing_source: get(LANDING_KEY) || page, page, timestamp: new Date().toISOString() },
          data
        ),
        referral_source: get(REFERRAL_KEY) || 'direct',
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term'),
      });

      if (useBeacon && navigator.sendBeacon) {
        return navigator.sendBeacon('/analytics/track', new Blob([payload], { type: 'application/json' }));
      }
      fetch('/analytics/track', {
        method: 'POST',
        credentials: 'same-origin',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json',
          ...(csrf ? { 'X-CSRF-TOKEN': csrf } : {}),
        },
        body: payload,
      }).catch(() => {});
      return true;
    };

    // Track Visit
    const trackVisit = () => {
      if (isBot) return;
      const key = 'analytics_visit_tracked:' + (get(LANDING_KEY) || page);
      if (get(key)) return;
      const id = eventId('page-view');
      if (track('visit', { event_id: id, is_initial: true, _fbp: cookie('_fbp'), _fbc: cookie('_fbc'), ab_variant: get(AB_KEY) }, true)) {
        set(key, '1');
      }
    };

    // Scroll depth milestones
    const trackScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const depth = Math.round((window.scrollY / max) * 100);
      MILESTONES.forEach((m) => {
        const key = 'analytics_scroll:' + page + ':' + m;
        if (depth >= m && !get(key)) {
          set(key, '1');
          track('scroll', { depth: m });
        }
      });
    };
    window.addEventListener('scroll', trackScroll, { passive: true });

    // Dwell pings (15s initial, then 30s)
    let dwellInterval: number | undefined;
    const trackDwell = () => {
      let activeMs = 0;
      let initialSent = false;
      let sincePing = 0;
      return window.setInterval(() => {
        if (document.hidden) return;
        activeMs += 1000;
        if (!initialSent && activeMs >= 15000) {
          initialSent = true;
          sincePing = 0;
          track('engagement', { type: 'dwell_ping', duration: 15000, is_initial: true });
          return;
        }
        if (initialSent && ++sincePing >= 30) {
          sincePing = 0;
          track('engagement', { type: 'dwell_ping', duration: 30000, is_initial: false });
        }
      }, 1000);
    };

    // Section view (IntersectionObserver)
    let sectionObs: IntersectionObserver | null = null;
    const observeSections = () => {
      if (!('IntersectionObserver' in window)) return;
      const timers = new Map<string, number>();
      if (!sectionObs) {
        sectionObs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const sec = entry.target as HTMLElement;
            if (!sec.id) return;
            const key = 'section_seen_v2_' + page + ':' + sec.id;
            if (!entry.isIntersecting) {
              if (timers.has(sec.id)) window.clearTimeout(timers.get(sec.id)!);
              timers.delete(sec.id);
              return;
            }
            if (get(key) || timers.has(sec.id)) return;
            timers.set(sec.id, window.setTimeout(() => {
              timers.delete(sec.id);
              if (get(key)) return;
              set(key, '1');
              track('section_view', { section: sec.id });
              sectionObs?.unobserve(sec);
            }, 500));
          });
        }, { threshold: 0.2 });
      }
      document.querySelectorAll('section[id]').forEach((s) => sectionObs!.observe(s));
    };

    // WhatsApp CTA clicks
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a');
      if (!link) return;
      const href = link.href || '';
      if (href.includes('wa.me/')) {
        const text = (link.textContent || link.getAttribute('aria-label') || 'CTA').replace(/\s+/g, ' ').trim().slice(0, 255);
        const decoded = decodeURIComponent(href.replace(/\+/g, ' ')).toLowerCase();
        const closestSection = link.closest('section[id]');
        const location =
          link.id === 'whatsapp-button' || link.getAttribute('aria-label') === 'WhatsApp' ? 'floating_whatsapp'
          : link.id === 'btn-hero-wa' ? 'header_whatsapp'
          : link.id === 'btn-hero-wa-main' ? 'hero_cta'
          : link.id === 'btn-final-cta-wa' ? 'final_cta'
          : closestSection ? (closestSection as HTMLElement).id
          : link.closest('header') ? 'header'
          : 'footer';

        let packageName: string | null = null;
        if (decoded.includes('try scuba')) packageName = 'Try Scuba Diving';
        else if (decoded.includes('scuba')) packageName = 'Scuba Diving';
        else if (decoded.includes('snorkel')) packageName = 'Snorkeling';

        const conversionId = eventId('wa');
        const conversionType = packageName ? 'wa_registration' : 'wa_inquiry';
        const common = { location, text, destination: href, package: packageName, _fbp: cookie('_fbp'), _fbc: cookie('_fbc'), ab_variant: get(AB_KEY) };

        track('cta_click', { event_id: eventId('cta'), ...common }, true);
        track('conversion', { event_id: conversionId, type: conversionType, meta_event: 'Search', ...common }, true);

        if (typeof (window as any).fbq === 'function') {
          (window as any).fbq('track', 'Search', { content_category: conversionType, content_name: packageName || 'WhatsApp inquiry' }, { eventID: conversionId });
        }
      }
    };
    document.addEventListener('click', handleClick);

    const whenIdle = (fn: () => void) => {
      if ('requestIdleCallback' in window) window.requestIdleCallback(fn, { timeout: 3000 });
      else setTimeout(fn, 1500);
    };

    whenIdle(trackVisit);
    dwellInterval = trackDwell();
    observeSections();

    return () => {
      window.removeEventListener('scroll', trackScroll);
      document.removeEventListener('click', handleClick);
      if (dwellInterval) clearInterval(dwellInterval);
      if (sectionObs) sectionObs.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Menjangan Island Snorkeling &amp; Diving Trips | Menjangan Snorkeling Trip &amp; Diving</title>
        <meta name="description" content="Discover the best of Menjangan Island: Explore crystal-clear waters, vibrant coral reefs, and incredible marine life with our snorkeling and diving trips." />
        <link rel="canonical" href="https://menjanganislandtrip.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menjangan Island Snorkeling &amp; Diving Trips" />
        <meta property="og:description" content="Discover the best of Menjangan Island: Explore crystal-clear waters, vibrant coral reefs, and incredible marine life with our snorkeling and diving trips." />
        <meta property="og:image" content="https://menjanganislandtrip.com/c1/hero-reef-diver.webp" />
        <meta property="og:url" content="https://menjanganislandtrip.com/" />
        <meta property="og:site_name" content="Menjangan Snorkeling Trip &amp; Diving" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menjangan Island Snorkeling &amp; Diving Trips" />
        <meta name="twitter:description" content="Discover the best of Menjangan Island: Explore crystal-clear waters, vibrant coral reefs, and incredible marine life with our snorkeling and diving trips." />
        <meta name="twitter:image" content="https://menjanganislandtrip.com/c1/hero-reef-diver.webp" />
      </Head>

      <div id="page" data-lg={lang} style={{ background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
        <main>
          {/* Header */}
          <header style={{ position: 'sticky', top: 0, zIndex: 70, background: '#FFFFFF', borderBottom: '1px solid var(--color-divider)', boxShadow: '0 1px 6px rgba(15, 26, 48, 0.07)' }}>
            <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'nowrap' }}>
              <a href="#top" style={{ marginRight: 'auto', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/logo-menjangan.webp" alt="Menjangan Snorkeling Trip &amp; Diving" width={128} height={128} style={{ height: '52px', width: 'auto', flex: 'none' }} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-divider)' }}>
                <button
                  id="btn-lang-en"
                  type="button"
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  id="btn-lang-id"
                  type="button"
                  className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                  onClick={() => setLang('id')}
                  aria-pressed={lang === 'id'}
                  aria-label="Ganti ke Bahasa Indonesia"
                >
                  ID
                </button>
              </div>
              <a
                id="btn-hero-wa"
                className="btn btn-primary"
                href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '14px', padding: '9px 16px', whiteSpace: 'nowrap' }}
              >
                <svg viewBox="0 0 24 24" fill="#ffffff" style={{ width: '32px', height: '32px' }} aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.15-.15.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.34 5.08 4.56.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"></path>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21z"></path>
                </svg>
                <span data-l="en">Booking via WhatsApp</span>
                <span data-l="id">Booking via WhatsApp</span>
              </a>
            </div>
          </header>

          {/* Hero Section */}
          <section id="top" className="hero-wrapper">
            <picture style={{ position: 'absolute', inset: 0 }}>
              <source type="image/avif" srcSet="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w" sizes="100vw" />
              <source type="image/webp" srcSet="/c1/hero-reef-diver-480.webp 480w, /c1/hero-reef-diver-800.webp 800w, /c1/hero-reef-diver.webp 1400w" sizes="100vw" />
              <img id="hero-img" fetchPriority="high" loading="eager" src="/c1/hero-reef-diver-800.webp" alt="Snorkeler gliding over coral and sea fans at Menjangan Island" className="hero-bg-img" width={1400} height={933} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '58% 42%' }} />
            </picture>
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">
                <span data-l="en">MENJANGAN<br />ISLAND TOUR</span>
                <span data-l="id">MENJANGAN<br />ISLAND TOUR</span>
              </h1>
              <h2 className="hero-subtitle">
                <span data-l="en">Snorkeling &amp; Diving in West Bali National Park</span>
                <span data-l="id">Snorkeling &amp; Diving di Taman Nasional Bali Barat</span>
              </h2>
              <p className="hero-desc">
                <span data-l="en">Daily departures from Banyuwedang Harbour. Small groups, local guides in the water with you, and everything included.</span>
                <span data-l="id">Keberangkatan setiap hari dari Pelabuhan Banyuwedang. Grup kecil, pemandu lokal mendampingi di air, dan semua kebutuhan sudah termasuk.</span>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                <a
                  id="btn-hero-wa-main"
                  className="hero-cta-btn"
                  href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="#ffffff" width="19" height="19" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z" />
                  </svg>
                  <span data-l="en">Book via WhatsApp Now</span>
                  <span data-l="id">Booking via WhatsApp Sekarang</span>
                </a>
                <div className="hero-badge">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0, color: '#86efac' }}>
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.38 17.55 9.17 12.3 17 10.3V8zm0-6C10.92 2 6 6.92 6 13c0 1.25.21 2.45.58 3.57C8.16 12.4 12.06 9.68 17 9.1V2zm0 1c3.87 0 7 3.13 7 7s-3.13 7-7 7c-.7 0-1.37-.1-2-.3 1.34-3.1 3.57-5.58 6.53-6.9-.27-.08-.55-.13-.83-.16-4.57.57-8.15 3.33-9.59 7.36-.07.2-.13.4-.19.6-.6-.73-1.04-1.58-1.31-2.5C9.28 9.53 12.82 3 17 3z" />
                  </svg>
                  <span data-l="en">Licensed local operator, based in Pemuteran</span>
                  <span data-l="id">Operator lokal berlisensi resmi, berbasis di Pemuteran</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section id="hero-stats" style={{ background: '#ffffff', borderBottom: '1px solid var(--color-divider)', padding: '46px 24px 42px' }}>
            <div className="stats-grid" style={{ maxWidth: '1160px', margin: '0 auto' }}>
              {/* Google Card */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 272 92" width="94" height="32" aria-label="Google">
                    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
                    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
                    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.45zm-8.99 21.01c0-7.81-5.21-13.44-11.84-13.44-6.72 0-12.35 5.63-12.35 13.44 0 7.72 5.63 13.35 12.35 13.35 6.63 0 11.84-5.63 11.84-13.35z" />
                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
                    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-13.61-8.15l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" />
                    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.8.36 34.83.36 15.86 16.32.31 35.3.31c10.42 0 17.73 4.03 23.36 9.41l-6.64 6.64c-3.95-3.7-9.24-6.55-16.72-6.55-13.44 0-24.11 10.84-24.11 24.28 0 13.44 10.67 24.28 24.11 24.28 8.65 0 13.53-3.44 16.63-6.55 1.76-1.76 2.94-4.28 3.36-7.73H35.29v-.68z" />
                  </svg>
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: 'clamp(38px, 4.2vw, 50px)', fontWeight: 800, lineHeight: 1, color: '#17233f', marginTop: '4px' }}>
                  1,000+
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: '14px', fontWeight: 600, color: '#475569' }}>
                  <span data-l="en">Google Reviews</span>
                  <span data-l="id">Google Reviews</span>
                </div>
                <div style={{ color: '#f59e0b', fontSize: '15px', letterSpacing: '2px', lineHeight: 1 }}>
                  ★★★★★
                </div>
              </div>

              {/* Tripadvisor Card */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="11" fill="#00AA6C" />
                    <circle cx="8.2" cy="12" r="3" fill="#ffffff" />
                    <circle cx="15.8" cy="12" r="3" fill="#ffffff" />
                    <circle cx="8.2" cy="12" r="1.5" fill="#000000" />
                    <circle cx="15.8" cy="12" r="1.5" fill="#000000" />
                    <path d="M12 9.2c-.8 0-1.5.6-1.5 1.4 0 .4.2.8.5 1 .3-.2.6-.4 1-.4s.7.2 1 .4c.3-.2.5-.6.5-1 0-.8-.7-1.4-1.5-1.4z" fill="#ffffff" />
                    <polygon points="12,12.3 11,14 13,14" fill="#000000" />
                  </svg>
                  <span style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontWeight: 800, fontSize: '18px', color: '#111827', letterSpacing: '-0.02em' }}>Tripadvisor</span>
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: 'clamp(38px, 4.2vw, 50px)', fontWeight: 800, lineHeight: 1, color: '#17233f', marginTop: '4px' }}>
                  200+
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: '14px', fontWeight: 600, color: '#475569' }}>
                  <span data-l="en">Tripadvisor Reviews</span>
                  <span data-l="id">Tripadvisor Reviews</span>
                </div>
                <div style={{ color: '#f59e0b', fontSize: '15px', letterSpacing: '2px', lineHeight: 1 }}>
                  ★★★★★
                </div>
              </div>

              {/* 10+ Experience Card */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: 'clamp(38px, 4.2vw, 50px)', fontWeight: 800, lineHeight: 1, color: '#17233f', marginTop: '4px' }}>
                  10+
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: '14px', fontWeight: 600, color: '#475569' }}>
                  <span data-l="en">Years of Local Experience</span>
                  <span data-l="id">Years of Local Experience</span>
                </div>
                <div style={{ fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif", fontSize: '12px', fontWeight: 500, color: '#3b82f6' }}>
                  <span data-l="en">Licensed operator, Pemuteran</span>
                  <span data-l="id">Licensed operator, Pemuteran</span>
                </div>
              </div>
            </div>
          </section>

          {/* All Below-the-fold content */}
          <LandingBelow />
        </main>
      </div>
    </>
  );
}
