import { lazy, Suspense, useEffect, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';

type Language = 'en' | 'id';

const C1BelowFold = lazy(() => import('./c1-lp-below'));

const pageStyles = String.raw`:root {
  --brand: #273B6A;
  --brand-700: #1f2f55;
  --brand-800: #17233f;
  --brand-900: #0f1a30;
  --brand-100: #eef1f7;
  --brand-200: #dbe2ee;
  --cta: #70CE73;
  --cta-dark: #4fae55;
  --star: #FFC107;
  --ink: #17233f;
  --body: #48536b;
  --line: #e2e6ee;
  --wash: #f6f8fc;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 86px; }
body { margin: 0; background: #FFFFFF; font-family: "Montserrat", system-ui, sans-serif; color: var(--ink); }
img { display: block; max-width: 100%; }
.hero-review-avatars { flex: none; min-width: 56px; }
.hero-review-avatar {
  width: 24px !important;
  min-width: 24px !important;
  max-width: 24px !important;
  height: 24px !important;
  min-height: 24px !important;
  max-height: 24px !important;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  flex: none;
}
a { color: var(--brand); }
a:hover { color: var(--brand-700); }
h1, h2, h3, h4 { font-family: "Montserrat", system-ui, sans-serif; font-weight: 800; line-height: 1.14; margin: 0; letter-spacing: -0.01em; }
p { margin: 0; line-height: 1.65; }
ul { margin: 0; }
[data-lg="id"] [data-l="en"], [data-lg="en"] [data-l="id"] { display: none !important; }
summary { list-style: none; }
summary::-webkit-details-marker { display: none; }
details[open] .plus { transform: rotate(45deg); }
.cta { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: var(--cta); color: #FFFFFF; font-family: "Montserrat", sans-serif; font-weight: 800; font-size: 15px; letter-spacing: 0.01em; padding: 15px 26px; border-radius: 8px; text-decoration: none; box-shadow: 0 6px 18px rgba(79, 174, 85, 0.28); transition: background 0.15s ease, transform 0.15s ease; }
.cta:hover { background: var(--cta-dark); color: #FFFFFF; transform: translateY(-1px); }
.cta:focus-visible { outline: 3px solid var(--brand); outline-offset: 3px; }
.micro { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; font-size: 12px; font-weight: 600; color: var(--body); }
.micro .st { color: var(--star); letter-spacing: 1px; }
.kicker { font-family: "Montserrat", sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--brand); }
.sec { padding: 84px 24px; }
.wrap { max-width: 1160px; margin: 0 auto; }
.card { background: #FFFFFF; border: 1px solid var(--line); border-radius: 14px; padding: 26px; box-shadow: 0 2px 10px rgba(23, 35, 63, 0.05); }
#page > header { position: sticky !important; top: 0 !important; z-index: 70 !important; }
#page > section:not(#top), #page > div, #page > footer {
  content-visibility: auto;
  contain-intrinsic-size: auto 900px;
}
@media (max-width: 760px) {
  .rev-grid[data-collapsed="1"] > figure:nth-child(n + 4) { display: none !important; }
  .rev-more { display: flex !important; }
}
.photo-grid img { height: auto !important; }
.rev-grid > figure { background: #F5F5F8 !important; }
.rev-grid figcaption img { background: #d7dbe3 !important; }
@media (max-width: 900px) {
  .sec { padding: 56px 18px; }
  #page > header { position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; width: 100% !important; z-index: 90 !important; }
  #page { padding-top: 62px !important; }
  #page > header > div { padding: 8px 12px !important; gap: 8px !important; }
  #page > header img { height: 34px !important; }
  #page > header a[href*="wa.me"] { padding: 9px 12px !important; font-size: 11px !important; box-shadow: none !important; }
  #page > header a[href*="wa.me"] span { display: none !important; }
  #page > header a[href*="wa.me"]::after { content: "Book now"; font-weight: 800; }
  #page > header button { padding: 7px 9px !important; font-size: 11px !important; }
  .cmp thead th:first-child, .cmp tbody th { font-size: 12px !important; }
  #snorkeling, #scuba-diving, #try-scuba { grid-template-columns: 1fr !important; }
  #snorkeling > div:first-child, #try-scuba > div:first-child, #scuba-diving > div:last-child { min-height: 260px !important; }
  #top { min-height: calc(100svh - 62px) !important; }
  #hero-img { object-position: 62% 40% !important; }
  h1 { font-size: 27px !important; }
  h2 { font-size: 24px !important; }
  #page section .cta, #page footer .cta { width: 100% !important; }
  .micro { font-size: 11px !important; }
  .cmp th, .cmp td { padding: 10px 8px !important; }
  .photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
}`;

const languageButtonStyle = (active: boolean): CSSProperties => ({
    cursor: 'pointer',
    border: 0,
    padding: '8px 12px',
    fontSize: '12px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 800,
    letterSpacing: '0.04em',
    background: active ? '#273B6A' : 'transparent',
    color: active ? '#FFFFFF' : '#48536b',
});

export default function C1LandingPage() {
    const [language, setLanguage] = useState<Language>('en');
    const [showBelowFold, setShowBelowFold] = useState(false);

    useEffect(() => {
        let revealed = false;
        let idleId: number | undefined;

        const reveal = () => {
            if (revealed) return;
            revealed = true;
            setShowBelowFold(true);
        };
        const revealOnIdle = () => {
            if ('requestIdleCallback' in window) {
                idleId = window.requestIdleCallback(reveal, { timeout: 1500 });
            } else {
                reveal();
            }
        };
        const timerId = window.setTimeout(revealOnIdle, 5000);
        const events: Array<keyof WindowEventMap> = [
            'wheel',
            'touchstart',
            'pointerdown',
            'keydown',
        ];

        events.forEach((eventName) => {
            window.addEventListener(eventName, reveal, {
                once: true,
                passive: true,
            });
        });

        return () => {
            window.clearTimeout(timerId);
            if (idleId !== undefined && 'cancelIdleCallback' in window) {
                window.cancelIdleCallback(idleId);
            }
            events.forEach((eventName) => {
                window.removeEventListener(eventName, reveal);
            });
        };
    }, []);

    // ── Analytics + A/B Testing ───────────────────────────────────────────────
    useEffect(() => {
        const page = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        const LANDING_KEY = 'landing_source';
        const REFERRAL_KEY = 'referral_source';
        const MILESTONES = [25, 50, 75, 90];

        const get = (k: string) => { try { return sessionStorage.getItem(k); } catch { return null; } };
        const set = (k: string, v: string) => { try { sessionStorage.setItem(k, v); } catch {} };

        // Session init
        if (!get(LANDING_KEY)) set(LANDING_KEY, page);
        if (!get(REFERRAL_KEY)) {
            let ref = params.get('ref') || 'direct';
            if (document.referrer) {
                try { if (new URL(document.referrer).hostname !== window.location.hostname) ref = document.referrer; } catch {}
            }
            set(REFERRAL_KEY, ref);
        }

        // A/B variant — assign once per session, expose on window for GTM / custom triggers
        const AB_KEY = 'ab_variant_c1lp';
        if (!get(AB_KEY)) set(AB_KEY, Math.random() < 0.5 ? 'A' : 'B');
        (window as any).__abVariant = get(AB_KEY);

        // Helpers
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
                    data,
                ),
                referral_source: get(REFERRAL_KEY) || 'direct',
                utm_source:   params.get('utm_source'),
                utm_medium:   params.get('utm_medium'),
                utm_campaign: params.get('utm_campaign'),
                utm_content:  params.get('utm_content'),
                utm_term:     params.get('utm_term'),
            });
            if (useBeacon && navigator.sendBeacon)
                return navigator.sendBeacon('/analytics/track', new Blob([payload], { type: 'application/json' }));
            fetch('/analytics/track', {
                method: 'POST', credentials: 'same-origin', keepalive: true,
                headers: { 'Content-Type': 'application/json', ...(csrf ? { 'X-CSRF-TOKEN': csrf } : {}) },
                body: payload,
            }).catch(() => {});
            return true;
        };

        // Visit tracking (once per session)
        const trackVisit = () => {
            const key = 'analytics_visit_tracked:' + (get(LANDING_KEY) || page);
            if (get(key)) return;
            const id = eventId('page-view');
            if (track('visit', { event_id: id, is_initial: true, _fbp: cookie('_fbp'), _fbc: cookie('_fbc'), ab_variant: get(AB_KEY) }, true))
                set(key, '1');
        };

        // Scroll depth milestones (25 / 50 / 75 / 90 %)
        const trackScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            if (max <= 0) return;
            const depth = Math.round((window.scrollY / max) * 100);
            MILESTONES.forEach((m) => {
                const key = 'analytics_scroll:' + page + ':' + m;
                if (depth >= m && !get(key)) { set(key, '1'); track('scroll', { depth: m }); }
            });
        };

        // Dwell pings (15 s initial, then every 30 s)
        const trackDwell = () => {
            let activeMs = 0, initialSent = false, sincePing = 0;
            return window.setInterval(() => {
                if (document.hidden) return;
                activeMs += 1000;
                if (!initialSent && activeMs >= 15000) {
                    initialSent = true; sincePing = 0;
                    track('engagement', { type: 'dwell_ping', duration: 15000, is_initial: true });
                    return;
                }
                if (initialSent && ++sincePing >= 30) {
                    sincePing = 0;
                    track('engagement', { type: 'dwell_ping', duration: 30000, is_initial: false });
                }
            }, 1000);
        };

        // Section view (IntersectionObserver, 500 ms dwell at 20 % threshold)
        let sectionObs: IntersectionObserver | null = null;
        const trackSections = () => {
            if (!('IntersectionObserver' in window)) return;
            const timers = new Map<string, number>();
            sectionObs = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const sec = entry.target as HTMLElement;
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
            document.querySelectorAll('section[id]').forEach((s) => sectionObs!.observe(s));
        };

        // WhatsApp + CTA click tracking
        const handleClick = (e: MouseEvent) => {
            const link = (e.target as Element).closest('a');
            if (!link) return;
            const text = (link.textContent || link.getAttribute('aria-label') || 'CTA').replace(/\s+/g, ' ').trim().slice(0, 255);

            if (link.href.includes('wa.me/')) {
                const href = link.href;
                const decoded = decodeURIComponent(href.replace(/\+/g, ' ')).toLowerCase();
                const closestSection = link.closest('section[id]');
                const location =
                    link.getAttribute('aria-label') === 'Chat on WhatsApp' ? 'floating_whatsapp'
                    : closestSection ? (closestSection as HTMLElement).id
                    : link.closest('header') ? 'header' : 'footer';

                let packageName: string | null = null;
                if (decoded.includes('try scuba'))    packageName = 'Try Scuba Diving';
                else if (decoded.includes('scuba'))   packageName = 'Scuba Diving';
                else if (decoded.includes('snorkel')) packageName = 'Snorkeling';

                const conversionId = eventId('wa');
                const conversionType = packageName ? 'wa_registration' : 'wa_inquiry';
                const common = { location, text, destination: href, package: packageName, _fbp: cookie('_fbp'), _fbc: cookie('_fbc'), ab_variant: get(AB_KEY) };

                track('cta_click',  { event_id: eventId('cta'), ...common }, true);
                track('conversion', { event_id: conversionId, type: conversionType, meta_event: 'Search', ...common }, true);

                // Mirror to Meta Pixel if loaded
                if (typeof (window as any).fbq === 'function')
                    (window as any).fbq('track', 'Search', { content_category: conversionType, content_name: packageName || 'WhatsApp inquiry' }, { eventID: conversionId });
            }
        };
        document.addEventListener('click', handleClick);

        // Boot everything on load
        const whenIdle = (fn: () => void) => {
            if ('requestIdleCallback' in window) window.requestIdleCallback(fn, { timeout: 3000 });
            else window.setTimeout(fn, 1500);
        };

        let dwellInterval: number | undefined;
        const onLoad = () => { whenIdle(trackVisit); trackScroll(); dwellInterval = trackDwell(); trackSections(); };

        if (document.readyState === 'complete') onLoad();
        else window.addEventListener('load', onLoad, { once: true });

        const onScroll = () => trackScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', onScroll);
            if (dwellInterval !== undefined) window.clearInterval(dwellInterval);
            sectionObs?.disconnect();
        };
    }, []);
    // ── End Analytics + A/B Testing ───────────────────────────────────────────

    const showMoreReviews = (event: MouseEvent<HTMLButtonElement>) => {
        const gridId = event.currentTarget.dataset.more;

        if (!gridId) {
            return;
        }

        document.getElementById(gridId)?.removeAttribute('data-collapsed');
        event.currentTarget.parentElement?.style.setProperty(
            'display',
            'none',
            'important',
        );
    };

    return (
        <>
            <>
                <title>Menjangan Snorkeling Trip &amp; Diving</title>
                {/* SEO: Description & indexing */}
                <meta name="description" content="Snorkeling and scuba diving trips at Menjangan Island, West Bali. Half-day trips including equipment, park permit, guide, and lunch. Book direct — best price guaranteed." />
                <link rel="canonical" href="https://menjanganislandtrip.com/c1-lp" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Menjangan Island Snorkeling Trip & Diving — Bali" />
                <meta property="og:description" content="Half-day snorkeling and diving trips at Menjangan Island, West Bali. Equipment, guide, park permit, and lunch included. Book direct — best price guaranteed." />
                <meta property="og:url" content="https://menjanganislandtrip.com/c1-lp" />
                <meta property="og:image" content="https://menjanganislandtrip.com/c1/hero-reef-diver.webp" />
                <meta property="og:image:width" content="1400" />
                <meta property="og:image:height" content="933" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="id_ID" />
                <meta property="og:site_name" content="Menjangan Snorkeling Trip & Diving" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Menjangan Island Snorkeling & Diving — West Bali" />
                <meta name="twitter:description" content="Half-day snorkeling and diving trips at Menjangan Island, West Bali. Equipment, guide, park permit, and lunch included." />
                <meta name="twitter:image" content="https://menjanganislandtrip.com/c1/hero-reef-diver.webp" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="en" href="https://menjanganislandtrip.com/c1-lp" />
                <link rel="alternate" hrefLang="id" href="https://menjanganislandtrip.com/c1-lp" />
                <link rel="alternate" hrefLang="x-default" href="https://menjanganislandtrip.com/c1-lp" />

                {/* LCP Hero preload */}
                <link
                    rel="preload"
                    as="image"
                    href="/c1/hero-reef-diver-800.avif"
                    type="image/avif"
                    imageSrcSet="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w"
                    imageSizes="100vw"
                />

                <style>{pageStyles}</style>
            </>
            <div id="page" data-lg={language}>
                <header
                    style={{
                        background: '#FFFFFF',
                        borderBottom: '1px solid var(--line)',
                        boxShadow: '0 1px 6px rgba(23, 35, 63, 0.07)',
                    }}
                >
                    <div
                        style={{
                            maxWidth: '1160px',
                            margin: '0 auto',
                            padding: '10px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <img
                            src="/c1/logo-menjangan-128.webp"
                            alt="Menjangan Snorkeling Trip and Diving"
                            width={52}
                            height={52}
                            style={{
                                height: '52px',
                                width: 'auto',
                                flex: 'none',
                                marginRight: 'auto',
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid var(--line)',
                                borderRadius: '6px',
                                overflow: 'hidden',
                                flex: 'none',
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                style={languageButtonStyle(language === 'en')}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage('id')}
                                style={languageButtonStyle(language === 'id')}
                            >
                                ID
                            </button>
                        </div>
                        <a
                            className="cta"
                            href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Book via WhatsApp"
                            style={{
                                padding: '11px 18px',
                                fontSize: '13px',
                                flex: 'none',
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                style={{
                                    width: '17px',
                                    height: '17px',
                                    flex: 'none',
                                }}
                            >
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                            </svg>
                            <span data-l="en">Book via WhatsApp</span>
                            <span data-l="id">Booking via WhatsApp</span>
                        </a>
                    </div>
                </header>

                <section
                    id="top"
                    style={{
                        position: 'relative',
                        minHeight: 'min(74vh, 620px)',
                        display: 'grid',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <picture
                        style={{ position: 'absolute', inset: '0' }}
                    >
                        <source
                            type="image/avif"
                            srcSet="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w"
                            sizes="100vw"
                        />
                        <source
                            type="image/webp"
                            srcSet="/c1/hero-reef-diver-480.webp 480w, /c1/hero-reef-diver-800.webp 800w, /c1/hero-reef-diver.webp 1400w"
                            sizes="100vw"
                        />
                        <img
                            id="hero-img"
                            src="/c1/hero-reef-diver-800.webp"
                            alt="Snorkeler gliding over coral and sea fans at Menjangan Island"
                            width={1400}
                            height={933}
                            fetchPriority="high"
                            loading="eager"
                            style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: '58% 42%',
                            }}
                        />
                    </picture>
                    <div
                        style={{
                            position: 'absolute',
                            inset: '0',
                            background:
                                'linear-gradient(180deg, rgba(15, 26, 48, 0.52) 0%, rgba(15, 26, 48, 0.18) 34%, rgba(15, 26, 48, 0.74) 74%, rgba(15, 26, 48, 0.92) 100%)',
                        }}
                    ></div>
                    <div
                        style={{
                            position: 'relative',
                            maxWidth: '1160px',
                            width: '100%',
                            margin: '0 auto',
                            padding: '60px 24px 40px',
                            color: '#FFFFFF',
                        }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                borderRadius: '999px',
                                padding: '5px 12px',
                                marginBottom: '14px',
                            }}
                        >
                            <span
                                style={{
                                    color: 'var(--star)',
                                    fontSize: '13px',
                                    letterSpacing: '1px',
                                }}
                            >
                                ★★★★★
                            </span>
                            <span
                                style={{
                                    fontWeight: '800',
                                    fontSize: '11px',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                <span data-l="en">
                                    1.150+ five-star reviews
                                </span>
                                <span data-l="id">1.150+ ulasan bintang 5</span>
                            </span>
                            <span
                                className="hero-review-avatars"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    className="hero-review-avatar"
                                    src="https://lh3.googleusercontent.com/a-/ALV-UjW-6b9dWJYlqucqyOG9MKBwePsZDQk6FMk2lCZxhY9Z1lN2FcE=w80-h80-c-rp-mo-br100"
                                    alt=""
                                    width={24}
                                    height={24}
                                    decoding="async"
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: '2px solid #ffffff',
                                        objectFit: 'cover',
                                        flex: 'none',
                                    }}
                                />
                                <img
                                    className="hero-review-avatar"
                                    src="https://lh3.googleusercontent.com/a-/ALV-UjUe8F2EkfzifVFcolV6LH52P7urkwIJt9u-9YQRxgiRzuqEgGSdQw=w80-h80-c-rp-mo-ba12-br100"
                                    alt=""
                                    width={24}
                                    height={24}
                                    decoding="async"
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: '2px solid #ffffff',
                                        objectFit: 'cover',
                                        flex: 'none',
                                        marginLeft: '-8px',
                                    }}
                                />
                                <img
                                    className="hero-review-avatar"
                                    src="https://lh3.googleusercontent.com/a-/ALV-UjWgkfdm69EosFB2aGTOvOG8fJAhDiDs-6kjQHwAfen3aB7WXMDY-g=w80-h80-c-rp-mo-br100"
                                    alt=""
                                    width={24}
                                    height={24}
                                    decoding="async"
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        border: '2px solid #ffffff',
                                        objectFit: 'cover',
                                        flex: 'none',
                                        marginLeft: '-8px',
                                    }}
                                />
                            </span>
                        </div>
                        <h1
                            style={{
                                fontSize: 'clamp(27px, 4vw, 50px)',
                                color: '#FFFFFF',
                                maxWidth: '22ch',
                                marginBottom: '12px',
                                textShadow: '0 2px 18px rgba(15, 26, 48, 0.55)',
                            }}
                        >
                            <span data-l="en">
                                Snorkeling &amp; Diving at Menjangan Island
                            </span>
                            <span data-l="id">
                                Snorkeling &amp; Diving di Pulau Menjangan
                            </span>
                        </h1>
                        <p
                            style={{
                                maxWidth: '50ch',
                                fontSize: '15px',
                                color: '#FFFFFF',
                                textShadow: '0 1px 12px rgba(15, 26, 48, 0.5)',
                            }}
                        >
                            <span data-l="en">
                                Explore the crystal-clear water, vibrant coral
                                reefs and tropical marine life with a trusted
                                local team who knows the island.
                            </span>
                            <span data-l="id">
                                Jelajahi air yang jernih, terumbu karang yang
                                hidup dan biota laut tropis bersama tim lokal
                                terpercaya yang mengenal pulau ini.
                            </span>
                        </p>
                        <div
                            style={{
                                display: 'grid',
                                justifyItems: 'start',
                                gap: '10px',
                                margin: '20px 0 16px',
                            }}
                        >
                            <a
                                className="cta"
                                href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Menjangan%20Island%20trip.%20Please%20send%20me%20the%20price%20and%20availability."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    style={{
                                        width: '21px',
                                        height: '21px',
                                        flex: 'none',
                                    }}
                                >
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                                </svg>
                                <span data-l="en">Book via WhatsApp</span>
                                <span data-l="id">
                                    Cek Tanggal via WhatsApp
                                </span>
                            </a>
                            <span
                                className="micro"
                                style={{ color: 'rgba(255, 255, 255, 0.92)' }}
                            >
                                <span className="st">★★★★★</span>
                                <span>
                                    <span data-l="en">
                                        5-star reviews · Insurance 100% ·
                                        Licensed operator
                                    </span>
                                    <span data-l="id">
                                        Ulasan bintang 5 · Asuransi 100% ·
                                        Operator berlisensi
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                {showBelowFold && (
                    <Suspense fallback={null}>
                        <C1BelowFold showMoreReviews={showMoreReviews} />
                    </Suspense>
                )}

                <a
                    href="https://wa.me/6281238578042?text=Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    style={{
                        position: 'fixed',
                        right: '18px',
                        bottom: '18px',
                        zIndex: '80',
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        background: 'var(--cta)',
                        color: '#FFFFFF',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: '0 8px 22px rgba(15, 26, 48, 0.28)',
                        textDecoration: 'none',
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        style={{ width: '30px', height: '30px' }}
                    >
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path>
                    </svg>
                </a>
            </div>
        </>
    );
}
