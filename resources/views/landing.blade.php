<!DOCTYPE html>
<html lang="en">
<head>
<script nonce="{{ $cspNonce }}">
(function () {
  var note = 'Penting! Kode referensi di atas jangan dihapus';
  var current = new URLSearchParams(window.location.search).get('gclid');
  var valid = function (value) {
    return typeof value === 'string' && value.length > 0 && value.length <= 2048 && !/[\s\x00-\x1f]/.test(value);
  };
  var gclid = valid(current) ? current : null;

  try {
    if (gclid) localStorage.setItem('gclid', gclid);
    else {
      var stored = localStorage.getItem('gclid');
      if (valid(stored)) gclid = stored;
    }
  } catch (error) {
    // The URL value still works when browser storage is unavailable.
  }

  if (!gclid) return;

  function addReference(link) {
    var url;
    try { url = new URL(link.href, window.location.href); } catch (error) { return; }
    if (url.hostname !== 'wa.me' && url.hostname !== 'api.whatsapp.com' && url.hostname !== 'wa.link') return;

    var message = url.searchParams.get('text') || '';
    var reference = '[ID: ' + gclid + ']';
    if (message.indexOf(reference) !== -1) return;

    // Replace an older reference if GTM already edited this link.
    message = message.replace(/^\[ID:[^\]\r\n]*\]\s*/, '').replace(/^Penting! Kode referensi di atas jangan dihapus\s*/, '');
    url.searchParams.set('text', reference + '\n\n' + note + '\n\n' + message);
    link.href = url.toString();
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (link) addReference(link);
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href]').forEach(addReference);
  }, { once: true });
})();
</script>
<!-- Google Tag Manager -->
<script nonce="{{ $cspNonce }}">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;var n=d.querySelector('[nonce]');
n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PP3LHJ7F');</script>
<!-- End Google Tag Manager -->

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#273B6A">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<title>Menjangan Island Snorkeling & Diving Trips | Menjangan Snorkeling Trip &amp; Diving</title>
<meta name="description" content="Discover the best of Menjangan Island: Explore crystal-clear waters, vibrant coral reefs, and incredible marine life with our snorkeling and diving trips.">
<link rel="canonical" href="https://menjanganislandtrip.com/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Menjangan Island Snorkeling & Diving Trips">
<meta property="og:description" content="Discover the best of Menjangan Island: Explore crystal-clear waters, vibrant coral reefs, and incredible marine life with our snorkeling and diving trips.">
<meta property="og:image" content="https://menjanganislandtrip.com/hero-snorkeling-800.webp">
<meta property="og:url" content="https://menjanganislandtrip.com/">
<meta property="og:site_name" content="Menjangan Snorkeling Trip & Diving">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Menjangan Island Snorkeling & Diving Trips">
<meta name="twitter:description" content="Discover the best of Menjangan Island: Explore crystal-clear waters, vibrant coral reefs, and incredible marine life with our snorkeling and diving trips.">
<meta name="twitter:image" content="https://menjanganislandtrip.com/hero-snorkeling-800.webp">

<!-- JSON-LD Structured Data -->
<script type="application/ld+json" nonce="{{ $cspNonce }}">
{
  "@@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Menjangan Snorkeling Trip & Diving",
  "description": "Locally owned snorkeling and diving tour operator in Banyuwedang, West Bali. Licensed Diving Center with Jasa Raharja insurance.",
  "url": "https://menjanganislandtrip.com",
  "logo": "https://menjanganislandtrip.com/logo-menjangan.webp",
  "telephone": "+6281238578042",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Banyuwedang, Banjar Dinas Batu Ampar, Pejarakan",
    "addressLocality": "Gerokgak",
    "addressRegion": "Buleleng, Bali",
    "postalCode": "81155",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.1245,
    "longitude": 114.5845
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "958",
    "bestRating": "5"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "15:00"
  },
  "sameAs": [
    "https://www.instagram.com/menjanganislandtrip/"
  ]
}
</script>
<script type="application/ld+json" nonce="{{ $cspNonce }}">
{
  "@@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where are you based, and where does the boat leave from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our office is on Jl. Banyuwedang in Pejarakan, on the north-west coast of Bali. Boats to Menjangan Island leave from Banyuwedang Harbour, and the crossing takes around 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is hotel pick-up included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for anywhere along this stretch of coast including Pemuteran, Banyuwedang, Pejarakan and the resorts inside West Bali National Park, at no extra cost."
      }
    },
    {
      "@type": "Question",
      "name": "Is Menjangan Island suitable for families with children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The water around the island is calm and sheltered, and the reef starts in the shallows. Life jackets are provided for everyone and a guide stays in the water with the group."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We run trips year round. Conditions are most reliable in the dry season, roughly April to November, when the water is clearest and the sea is calmest."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book, and can I have a private trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Message us on WhatsApp with your dates, group size and which trip you want. Both shared and private trips are available."
      }
    }
  ]
}
</script>
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.webp">
<link rel="preconnect" href="https://lh3.googleusercontent.com" crossorigin>
<link rel="preconnect" href="https://dynamic-media-cdn.tripadvisor.com" crossorigin>
<link rel="preconnect" href="https://cdn.trustindex.io" crossorigin>
<style>
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300 800;
  font-display: swap;
  src: url({{ asset('fonts/montserrat-latin.woff2') }}) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<link rel="preload" href="{{ asset('fonts/montserrat-latin.woff2') }}" as="font" type="font/woff2" crossorigin>
<link rel="preload" as="image" href="{{ asset('new/hero.webp') }}" type="image/webp" fetchpriority="high">
<style>
/* Industry — design-system tokens and component classes. This file is the source of truth for the system's look; retune it here and see readme.md. */

:root {
  --color-bg: #f2f2f3;
  --color-surface: #e9e9ea;
  --color-text: #1d1f20;
  --color-accent: #5980a6;
  --color-accent-2: #728fab;
  --color-divider: color-mix(in srgb, #1d1f20 16%, transparent);

  /* Tonal ramps — generated in OKLCH on one shared lightness scale, so the
     same step of any role matches the others in visual value. */
  --color-neutral-100: #f5f5f8;
  --color-neutral-200: #e7e7ea;
  --color-neutral-300: #d4d4d7;
  --color-neutral-400: #b7b7ba;
  --color-neutral-500: #98989b;
  --color-neutral-600: #7a7a7d;
  --color-neutral-700: #5d5d60;
  --color-neutral-800: #424244;
  --color-neutral-900: #2b2b2d;

  --color-accent-100: #eef6ff;
  --color-accent-200: #d6ebff;
  --color-accent-300: #b5d9fd;
  --color-accent-400: #94bce3;
  --color-accent-500: #749dc4;
  --color-accent-600: #597ea3;
  --color-accent-700: #416180;
  --color-accent-800: #2c455d;
  --color-accent-900: #1d2d3d;

  --color-accent-2-100: #eef6ff;
  --color-accent-2-200: #d6ebff;
  --color-accent-2-300: #bdd8f2;
  --color-accent-2-400: #9ebbd8;
  --color-accent-2-500: #7e9cb8;
  --color-accent-2-600: #627d98;
  --color-accent-2-700: #486077;
  --color-accent-2-800: #314457;
  --color-accent-2-900: #1f2d3a;

  --font-heading: "Barlow Condensed", system-ui, sans-serif;
  --font-heading-weight: 600;
  --font-body: "Barlow", system-ui, sans-serif;

  --space-1: 3.4px;
  --space-2: 6.8px;
  --space-3: 10.2px;
  --space-4: 13.6px;
  --space-6: 20.4px;
  --space-8: 27.2px;

  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 7px;

  /* Elevation — derived from the ground: soft ink-tinted shadows on a
     light theme, a hairline edge + ambient darkness on a dark one. */
  --shadow-sm: 0 1px 2px color-mix(in srgb, #2b2b2d 14%, transparent);
  --shadow-md: 0 3px 10px color-mix(in srgb, #2b2b2d 16%, transparent);
  --shadow-lg: 0 12px 32px color-mix(in srgb, #2b2b2d 22%, transparent);
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}
h1, h2, h3, h4 { font-family: var(--font-heading); font-weight: var(--font-heading-weight); }

.blueprint {
  position: relative;
  border: 1px solid var(--color-divider);
  border-radius: 0;
}
/* The overlay image treatments (halftone, duotone) clip their overlay
   (overflow:hidden); a blueprint wrapper draws its registration marks
   outside the box, so when both classes share a wrapper the frame must
   win. */
.blueprint.halftone, .blueprint.plate, .blueprint.duotone { overflow: visible; }
.blueprint > .corner {
  position: absolute; width: 11px; height: 11px;
  color: color-mix(in srgb, var(--color-text) 55%, transparent);
}
.blueprint > .corner::before, .blueprint > .corner::after {
  content: ""; position: absolute; background: currentColor;
}
.blueprint > .corner::before { left: 5px; top: 0; width: 1px; height: 100%; }
.blueprint > .corner::after  { top: 5px; left: 0; width: 100%; height: 1px; }
.blueprint > .corner.tl { top: -6px; left: -6px; }
.blueprint > .corner.tr { top: -6px; right: -6px; }
.blueprint > .corner.bl { bottom: -6px; left: -6px; }
.blueprint > .corner.br { bottom: -6px; right: -6px; }

.duotone{position:relative;overflow:hidden}
.duotone::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:var(--color-accent);mix-blend-mode:color}

/* ══════════════════════════════════════════════════════════════════════════
   Components — built with the tokens above. Plain CSS
   on plain HTML: no JavaScript, no build step. Each class is documented in
   readme.md and demonstrated in foundations/ and components/.
   ══════════════════════════════════════════════════════════════════════ */

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-size: 15px; line-height: 1.55; font-weight: 400; }
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading); font-weight: var(--font-heading-weight);
  line-height: 1.12; letter-spacing: -0.015em; margin: 0 0 var(--space-2);
}
h1 { font-size: 42px; }
h2 { font-size: 32px; }
h3 { font-size: 25px; }
h4 { font-size: 20px; }
h5 { font-size: 16px; }
h6 { font-size: 13px; }
h6 { letter-spacing: 0.08em; text-transform: uppercase; }
p { margin: 0 0 var(--space-3); }
a { color: var(--color-accent); text-underline-offset: 3px; }
img { display: block; max-width: 100%; }
figure { margin: 0; }
figcaption {
  font-size: 11px; margin-top: var(--space-1);
  color: color-mix(in srgb, var(--color-text) 55%, transparent);
}
.text-muted { color: color-mix(in srgb, var(--color-text) 55%, transparent); }
:focus:not(:focus-visible) { outline: none; }
:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
::selection { background: color-mix(in srgb, var(--color-accent) 30%, transparent); }

/* — rules — */
.hr {
  height: 1px; border: 0; margin: var(--space-4) 0;
  background: var(--color-divider);
}

/* — buttons — */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  cursor: pointer; text-decoration: none;
  font-family: var(--font-heading); font-weight: var(--font-heading-weight);
  font-size: 14px; line-height: 1.2; color: var(--color-text); /* matches the .input's 14px —
     the pair sits side by side in sign-up rows */
  background: transparent; border: 1px solid transparent;
  padding: var(--space-2) calc(var(--space-3) * 1.2);
  border-radius: var(--radius-md);
}
.btn svg { display: block; }
.btn:disabled { opacity: 0.45; cursor: not-allowed; }
.btn-primary { background: var(--color-accent); color: var(--color-bg); }
.btn-primary:hover { background: var(--color-accent-600); }
.btn-primary:active { background: var(--color-accent-700); }
.btn-secondary { border-color: var(--color-divider); }
.btn-secondary:hover { background: color-mix(in srgb, var(--color-text) 7%, transparent); }
.btn-secondary:active { background: color-mix(in srgb, var(--color-text) 14%, transparent); }
.btn-ghost { color: var(--color-accent); padding-inline: var(--space-1); }
.btn-ghost:hover { background: color-mix(in srgb, var(--color-accent) 10%, transparent); }
.btn-ghost:active { background: color-mix(in srgb, var(--color-accent) 18%, transparent); }
.btn-icon { width: 36px; height: 36px; padding: 0; }
.btn-block { width: 100%; margin-top: var(--space-2); }

/* — forms — */
.field > label {
  display: block; font-size: 12px; margin-bottom: 5px;
  color: color-mix(in srgb, var(--color-text) 70%, transparent);
}
.input {
  width: 100%; min-height: 36px; padding: 6px 10px; font: inherit;
  font-size: 14px; color: var(--color-text); caret-color: var(--color-accent);
  background: var(--color-surface);
  border: 1px solid var(--color-divider); border-radius: var(--radius-md);
}
.input:hover { border-color: color-mix(in srgb, var(--color-text) 45%, transparent); }
.input:focus-visible { border-color: var(--color-accent); outline-offset: 0; }
textarea.input { min-height: 90px; resize: vertical; }
.radio { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px; }
.radio input, .seg-opt input {
  position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none;
}
.radio .dot {
  width: 16px; height: 16px; flex: none; border-radius: 50%;
  border: 1.5px solid var(--color-divider);
}
.radio:hover .dot { border-color: var(--color-accent); }
.radio input:checked + .dot {
  border-color: var(--color-accent); background: var(--color-accent);
  box-shadow: inset 0 0 0 4px var(--color-bg);
}
.radio input:focus-visible + .dot { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.seg {
  display: inline-flex; overflow: hidden;
  border: 1px solid var(--color-divider); border-radius: var(--radius-md);
}
.seg-opt {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 12px; font-size: 13px; cursor: pointer;
}
.seg-opt + .seg-opt { border-left: 1px solid var(--color-divider); }
.seg-opt:has(input:checked) { background: var(--color-accent); color: var(--color-bg); }
.seg-opt:not(:has(input:checked)):hover { background: color-mix(in srgb, var(--color-text) 7%, transparent); }
.seg-opt:has(input:focus-visible) { outline: 2px solid var(--color-accent); outline-offset: -2px; }

/* — cards — */
.card {
  display: flex; flex-direction: column; gap: var(--space-2);
  padding: var(--space-3); border-radius: var(--radius-md); background: var(--color-surface);
}
.card-kicker { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent); }
.card-title {
  font-family: var(--font-heading); font-weight: var(--font-heading-weight);
  font-size: 17px; line-height: 1.2;
}
.card-body { margin: 0; font-size: 13px; opacity: 0.8; flex: 1; }
.card-meta {
  display: flex; align-items: center; gap: 6px; font-size: 11px;
  color: color-mix(in srgb, var(--color-text) 50%, transparent);
}
.elev-sm { box-shadow: var(--shadow-sm); }
.elev-md { box-shadow: var(--shadow-md); }
.elev-lg { box-shadow: var(--shadow-lg); }

/* — tags — */
.tag {
  display: inline-flex; align-items: center; font-size: 11px;
  letter-spacing: 0.02em; padding: 3px 10px;
  border-radius: calc(var(--radius-md) * 0.75);
}
.tag-accent { background: var(--color-accent-100); color: var(--color-accent-800); }
.tag-accent-2 { background: var(--color-accent-2-100); color: var(--color-accent-2-800); }
.tag-neutral { background: var(--color-neutral-100); color: var(--color-neutral-800); }
.tag-outline { border: 1px solid var(--color-accent); color: var(--color-accent); }

/* — navigation — */
.nav {
  display: flex; align-items: center; gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  border-bottom: none;
}
.nav-brand {
  font-family: var(--font-heading); font-weight: var(--font-heading-weight);
  font-size: 18px; margin-right: auto;
}
.nav a { color: inherit; text-decoration: none; font-size: 14px; }
.nav a:hover, .nav a[aria-current='page'] { color: var(--color-accent); }

/* — tables — */
.table { width: 100%; border-collapse: collapse; font-size: 14px; }
.table th {
  text-align: left; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
  color: color-mix(in srgb, var(--color-text) 60%, transparent);
  padding: var(--space-2); border-bottom: 1px solid var(--color-divider);
}
.table td {
  padding: var(--space-2);
  border-bottom: 1px solid color-mix(in srgb, var(--color-text) 8%, transparent);
}
.table tbody tr:hover { background: color-mix(in srgb, var(--color-text) 4%, transparent); }

/* — dialog — */
.dialog-backdrop {
  position: fixed; inset: 0; display: grid; place-items: center;
  padding: var(--space-4);
  background: color-mix(in srgb, var(--color-neutral-900) 50%, transparent);
}
.dialog {
  width: min(440px, 100%); display: flex; flex-direction: column; gap: var(--space-3);
  padding: var(--space-4); border-radius: var(--radius-lg);
  background: var(--color-surface); box-shadow: var(--shadow-lg);
}
.dialog-title {
  font-family: var(--font-heading); font-weight: var(--font-heading-weight);
  font-size: 20px;
}
.dialog-body { font-size: 14px; opacity: 0.85; }
.dialog-actions { display: flex; justify-content: flex-end; gap: var(--space-2); margin-top: var(--space-2); }

/* — blueprint frame: components are wireframe objects (see .blueprint
     and .corner above) — square, transparent, hairline-bordered — */
.card, .btn, .input, .tag, .seg, .dialog { border-radius: 0; }
.card, .dialog { background: transparent; border: 1px solid var(--color-divider); }
.btn { border: 1px solid var(--color-divider); }
.btn-primary { border-color: var(--color-accent); }
.btn-ghost { border-color: transparent; }


</style>
<style>
:root {
  --font-heading: "Montserrat", system-ui, sans-serif;
  --font-heading-weight: 700;
  --font-body: "Montserrat", system-ui, sans-serif;
  --color-accent: #273B6A;
  --color-accent-100: #eef1f8;
  --color-accent-200: #d3dbee;
  --color-accent-300: #aebcdc;
  --color-accent-400: #8497c4;
  --color-accent-500: #55699f;
  --color-accent-600: #273B6A;
  --color-accent-700: #1f2f55;
  --color-accent-800: #17233f;
  --color-accent-900: #0f1a30;
  --color-bg: #FFFFFF;
  --color-surface: #FFFFFF;
  --color-neutral-100: #FFFFFF;
}
body { background: #FFFFFF; }
#reviews.c1-reviews {
  --brand: #273B6A;
  --line: #e2e6ee;
  --star: #FFC107;
  --body: #48536b;
  --color-neutral-100: #FFFFFF;
  --color-neutral-600: #17233f;
  color: #17233f;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: 16px;
  line-height: normal;
  border-top: 0 !important;
}
#reviews.c1-reviews figcaption { margin-top: 0; color: inherit; font-size: inherit; }
#reviews.c1-reviews figure { background: #F5F5F8 !important; }
#reviews.c1-reviews figcaption img { background: #d7dbe3 !important; }
#reviews.c1-reviews figure:hover [style*="object-fit: cover"] { transform: none; }
#reviews.c1-reviews h2 {
  font-family: "Montserrat", system-ui, sans-serif;
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -0.01em;
  text-transform: none;
}
#reviews .cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #70CE73;
  color: #FFFFFF;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.01em;
  padding: 15px 26px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(79, 174, 85, 0.28);
  transition: background 0.15s ease, transform 0.15s ease;
}
#reviews .cta:hover { background: #4fae55; color: #FFFFFF; transform: translateY(-1px); }
#reviews .cta:focus-visible { outline: 3px solid #273B6A; outline-offset: 3px; }
#reviews .micro { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; font-size: 12px; font-weight: 600; color: var(--body); }
#reviews .micro .st { color: var(--star); letter-spacing: 1px; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto !important; }
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}
#page > main > header { position: sticky !important; top: 0 !important; z-index: 70 !important; }
@media (max-width: 900px) {
  #reviews.c1-reviews { padding: 76px 24px !important; }
  #reviews.c1-reviews h2 { font-size: 24px !important; }
  #reviews .cta { width: 100% !important; }
  #reviews .micro { font-size: 11px !important; }
  #page > main > header { position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; width: 100% !important; height: 60px !important; z-index: 90 !important; }
  #page { padding-top: 60px !important; }
  #page > main > header > div { height: 100% !important; width: 100% !important; padding: 8px 14px !important; gap: 10px !important; }
  #page > main > header img { height: 38px !important; }
  #page > main > header .btn-primary { width: auto !important; flex: none !important; padding: 9px 11px !important; font-size: 11px !important; letter-spacing: 0 !important; white-space: nowrap !important; }
  #page > main > header a[href*="wa.me"] span { display: none !important; }
  #page > main > header a[href*="wa.me"]::after { content: "Book now"; font-family: var(--font-heading); font-weight: 700; }
  #page > main > header img { height: 40px !important; }
  #page > main > header .btn-primary svg { width: 15px !important; height: 15px !important; }
  #page > main > header button { padding: 7px 9px !important; font-size: 11px !important; }
}
@media (max-width: 380px) {
  #page > main > header img { height: 32px !important; }
  #page > main > header .btn-primary { padding: 9px 10px !important; font-size: 11px !important; }
}
@media (max-width: 760px) and (orientation: landscape) {
  #top { min-height: 0 !important; }
}
@media (max-width: 760px) {
  #reviews .rev-grid[data-collapsed="1"] > figure:nth-child(n + 4) { display: none !important; }
  #reviews .rev-more { display: flex !important; }
  #reviews .micro { font-size: 11px !important; }
  section [style*="min-height: min(46vh, 420px)"] { min-height: 240px !important; }
  section [style*="min-height: min(46vh, 420px)"] > div:last-child { padding: 64px 18px 24px !important; }
  figure[style*="height: min(38vh, 340px)"] { height: 200px !important; }
  section [style*="min-height: 620px"] { min-height: 300px !important; }
  section [style*="min-height: 520px"] { min-height: 280px !important; }
  section [style*="min-height: 460px"] { min-height: 280px !important; }
  img[style*="height: 260px"] { height: 190px !important; }
  a[style*="height: 320px"] { height: 240px !important; }
  #top { min-height: calc(100svh - 62px) !important; height: auto !important; max-height: none !important; }
  #top > div:last-child { padding: 78px 18px 34px !important; align-self: center !important; }
  #top h1 { font-size: clamp(24px, 7.4vw, 31px) !important; line-height: 1.06 !important; margin: 0 0 10px !important; max-width: 24ch !important; }
  #top p { font-size: 14px !important; line-height: 1.5 !important; max-width: 44ch !important; margin: 0 !important; }
  #top > div:last-child > div:first-child { margin-bottom: 12px !important; padding: 5px 12px !important; }
  #top [style*="display: grid; justify-items: start"] { margin: 14px 0 12px !important; gap: 8px !important; }
  #top .btn-primary { padding: 14px 16px !important; font-size: 15px !important; }
  #top [style*="border-top: 1px solid color-mix"] { padding-top: 10px !important; gap: 6px 14px !important; font-size: 9px !important; }
  h1 { line-height: 1.04 !important; }
  h2 { font-size: 26px !important; }
  #compare-table > div { grid-template-columns: 1fr 42px 42px !important; gap: 8px 6px !important; padding: 12px 0 !important; align-items: center !important; }
  #compare-table [data-compare-head] { gap: 6px !important; font-size: 9px !important; text-align: center; }
  #compare-table [data-compare-head] > div:first-child { text-align: left; }
  #compare-table > div > div:nth-child(2), #compare-table > div > div:nth-child(3) { justify-content: center !important; text-align: center !important; }
  #compare-table > div > div:nth-child(2) span:last-child, #compare-table > div > div:nth-child(3) span:last-child { display: none !important; }
  #compare-table > div > div:nth-child(1) { font-size: 13px !important; line-height: 1.35 !important; }
  #compare-table > div > div:nth-child(3) > span:first-child { color: #c0392b !important; }
  #compare-table [data-head-short] { display: inline !important; }
  #compare-table [data-head-long] { display: none !important; }
  #page { overflow-x: hidden; }
  section[style*="padding: 76px 24px"] { padding: 56px 18px !important; }
  section[style*="padding: 56px 24px"] { padding: 48px 18px !important; }
  section[style*="padding: 52px 24px"] { padding: 44px 18px !important; }

  #page section .btn-primary, #page div[style*="max-width: 1160px"]:not(header *) .btn-primary { width: 100%; justify-content: center; padding: 16px 18px !important; font-size: 16px !important; }

  header { position: sticky !important; top: 0 !important; z-index: 60 !important; }
  header > div { padding: 8px 14px !important; gap: 10px !important; }
  header img[alt*="Menjangan"] { height: 42px !important; }
  [style*="minmax(170px, 1fr)"] { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
  [style*="minmax(260px, 1fr)"], [style*="minmax(270px, 1fr)"], [style*="minmax(230px, 1fr)"] { grid-template-columns: 1fr !important; }
  a[aria-label="WhatsApp"] { width: 54px !important; height: 54px !important; right: 14px !important; bottom: 14px !important; }
  summary { font-size: 15px !important; }
  iframe[title*="Map"] { min-height: 220px !important; }
}
html { scroll-behavior: smooth; scroll-padding-top: 86px; }
section [style*="object-fit: cover"] { transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1); }
section a:hover [style*="object-fit: cover"], figure:hover [style*="object-fit: cover"] { transform: scale(1.045); }
.blueprint {
  border: 1px solid rgba(39, 59, 106, 0.10) !important;
  border-radius: 14px !important;
  background: #ffffff !important;
  box-shadow: 0 10px 30px rgba(15, 26, 48, 0.07) !important;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.blueprint > .corner { display: none !important; }
.blueprint::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
  background: linear-gradient(180deg, #FFC107, #70CE74);
}
.blueprint:hover { box-shadow: 0 18px 44px rgba(15, 26, 48, 0.13); transform: translateY(-3px); }
[style*="letter-spacing: 0.14em"][style*="uppercase"]::before { content: ""; display: inline-block; width: 26px; height: 3px; background: #FFC107; margin-right: 12px; vertical-align: 3px; }
h2 { letter-spacing: -0.025em; font-weight: 800; line-height: 1.06; }
h3 { font-size: 24px !important; text-transform: none !important; letter-spacing: -0.01em !important; font-weight: 700; }
h4 { font-size: 17px !important; text-transform: none !important; letter-spacing: 0 !important; font-weight: 700; }
section > div > div[style*="letter-spacing: 0.14em"] { font-size: 11px; }
.btn-primary { box-shadow: 0 8px 20px rgba(112, 206, 116, 0.35); }
.btn-primary:hover { box-shadow: 0 12px 26px rgba(112, 206, 116, 0.45); transform: translateY(-1px); }
.btn { display: inline-flex; align-items: center; text-decoration: none; transition: background 0.2s ease, box-shadow 0.25s ease, transform 0.2s ease; }
figure > div[style*="overflow: hidden"] { box-shadow: 0 16px 38px rgba(15, 26, 48, 0.12); }
@media (min-width: 900px) {
  section[style*="padding: 76px 24px"] { padding-top: 108px !important; padding-bottom: 108px !important; }
  #reviews.c1-reviews { padding-top: 76px !important; padding-bottom: 76px !important; }
}
.btn-primary { background: #70CE74; border-color: #70CE74; color: #ffffff; gap: 10px; font-weight: 700; border-radius: 6px; letter-spacing: 0.01em; }
.btn-primary:hover { background: #5ec063; border-color: #5ec063; }
.btn-primary:active { background: #4fae55; border-color: #4fae55; }
body { margin: 0; }
a:hover { color: var(--color-accent-700); }
[data-lg="id"] [data-l="en"], [data-lg="en"] [data-l="id"] { display: none !important; }
summary::-webkit-details-marker { display: none; }
summary { list-style: none; }
.corner-light > .corner { color: color-mix(in srgb, #f2f2f3 75%, transparent); }
.lang-btn { cursor:pointer; border:0; padding:8px 12px; font-size:13px; letter-spacing:0.06em; font-family:var(--font-heading); font-weight:600; }
.lang-btn.active { background:var(--color-accent); color:var(--color-bg); }
.lang-btn:not(.active) { background:transparent; color:var(--color-neutral-700, #555); }
/* Hero section specific styling */
.hero-wrapper {
  position: relative;
  min-height: min(82vh, 660px);
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(8, 20, 38, 0.94) 0%, rgba(8, 20, 38, 0.82) 42%, rgba(8, 20, 38, 0.35) 72%, rgba(8, 20, 38, 0.05) 100%);
}
.hero-content {
  position: relative;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 24px 64px;
}
.hero-title {
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: clamp(38px, 5.2vw, 68px);
  line-height: 0.95;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 16px 0;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
}
.hero-subtitle {
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: clamp(16px, 1.8vw, 20px);
  line-height: 1.35;
  color: #ffffff;
  margin: 0 0 16px 0;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
}
.hero-desc {
  max-width: 480px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 24px 0;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
}
.hero-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25D366;
  color: #ffffff !important;
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 22px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
  transition: transform 0.15s ease, background 0.15s ease;
}
.hero-cta-btn:hover {
  background: #20bd5a;
  transform: translateY(-1px);
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #a7f3d0;
  margin-top: 14px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  text-align: center;
  align-items: start;
}
.photo-slider-wrapper {
  background: #ffffff;
  padding: 8px 0 36px 0;
  overflow: hidden;
  position: relative;
}
.photo-slider-track {
  display: flex;
  width: max-content;
  gap: 12px;
  animation: photoMarquee 30s linear infinite;
  will-change: transform;
}
.photo-slider-track:hover {
  animation-play-state: paused;
}
.photo-slider-list {
  display: flex;
  gap: 12px;
}
.photo-slider-item {
  flex: 0 0 auto;
  width: 320px;
  height: 220px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(15, 26, 48, 0.08);
}
.photo-slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.photo-slider-item:hover img {
  transform: scale(1.04);
}
@keyframes photoMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 6px));
  }
}
@media (max-width: 768px) {
  .hero-wrapper {
    min-height: auto;
  }
  .hero-content {
    padding: 60px 20px 48px;
  }
  .hero-overlay {
    background: linear-gradient(180deg, rgba(8, 20, 38, 0.92) 0%, rgba(8, 20, 38, 0.85) 60%, rgba(8, 20, 38, 0.5) 100%) !important;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .photo-slider-item {
    width: 250px;
    height: 170px;
  }
}

/* Review Cards Carousel */
.rev-carousel-container {
  position: relative;
  width: 100%;
}
.rev-cards-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 12px 6px 18px;
}
.rev-cards-track::-webkit-scrollbar {
  display: none;
}
.rev-card-item {
  flex: 0 0 calc(25% - 12px);
  min-width: 260px;
  max-width: 320px;
  scroll-snap-align: start;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px 18px;
  box-shadow: 0 3px 12px rgba(15, 26, 48, 0.07);
  border: 1px solid rgba(15, 26, 48, 0.05);
  display: flex;
  flex-direction: column;
}
.rev-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.rev-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #ffffff;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-weight: 700;
  font-size: 16px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.rev-user-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
}
.rev-user-name {
  font-family: 'Montserrat', system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rev-user-date {
  font-size: 11.5px;
  color: #94a3b8;
}
.rev-google-icon {
  flex-shrink: 0;
}
.rev-stars-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}
.rev-stars {
  color: #f59e0b;
  font-size: 15px;
  letter-spacing: 2px;
}
.rev-text {
  font-size: 13px;
  line-height: 1.55;
  color: #334155;
  margin: 0 0 12px 0;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.rev-read-more {
  font-size: 12px;
  color: #94a3b8;
  text-decoration: none;
  align-self: flex-start;
  font-weight: 500;
}
.rev-read-more:hover {
  color: #3b82f6;
}
.rev-arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(15, 26, 48, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  color: #475569;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.15s, transform 0.15s;
}
.rev-arrow-btn:hover {
  background: #f8fafc;
  color: #0f172a;
  transform: translateY(-50%) scale(1.06);
}
.rev-arrow-prev {
  left: -16px;
}
.rev-arrow-next {
  right: -16px;
}
@media (max-width: 900px) {
  .rev-card-item {
    flex: 0 0 calc(50% - 10px);
    min-width: 240px;
  }
  .rev-arrow-prev { left: -8px; }
  .rev-arrow-next { right: -8px; }
}
.snorkeling-grid-section {
  padding: 64px 24px 72px;
  background: #ffffff;
  border-bottom: 1px solid var(--color-divider);
}
.snorkeling-split-layout {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 48px;
  align-items: start;
  max-width: 1180px;
  margin: 0 auto;
}
.snorkeling-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.snorkeling-gallery-item {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(15, 26, 48, 0.08);
}
.snorkeling-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.snorkeling-gallery-item:hover img {
  transform: scale(1.04);
}
.trip-check-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.55;
  color: #334155;
  margin-bottom: 12px;
}
.trip-check-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: #2563eb;
  margin-top: 3px;
}
.trip-tag-pill {
  display: inline-block;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  margin: 0 6px 8px 0;
}
@media (max-width: 900px) {
  .snorkeling-split-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
@media (max-width: 860px) {
  .about-us-grid {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
    text-align: center;
  }
  .about-pills {
    justify-content: center;
  }
}
@media (max-width: 500px) {
  .snorkeling-gallery-grid {
    gap: 6px;
  }
  .snorkeling-gallery-item {
    border-radius: 6px;
  }
}
.ta-cards-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding: 10px 4px 20px;
}
.ta-cards-track::-webkit-scrollbar {
  display: none;
}
.ta-card-item {
  flex: 0 0 calc(25% - 12px);
  min-width: 250px;
  max-width: 285px;
  scroll-snap-align: start;
  background: #ffffff;
  border-radius: 14px;
  padding: 22px 20px;
  box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05);
  border: 1px solid rgba(15, 26, 48, 0.06);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .ta-card-item {
    flex: 0 0 calc(33.333% - 11px);
    min-width: 240px;
  }
}
@media (max-width: 768px) {
  .ta-card-item {
    flex: 0 0 calc(50% - 8px);
    min-width: 230px;
  }
}
@media (max-width: 520px) {
  .ta-card-item {
    flex: 0 0 85%;
    min-width: 220px;
  }
}
.faq-accordion-item {
  background: #ffffff;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  overflow: hidden;
}
.faq-accordion-item[open] {
  border-color: #93c5fd;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.06);
}
.faq-accordion-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  font-family: 'Montserrat', system-ui, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #0f274a;
  cursor: pointer;
  list-style: none;
  user-select: none;
}
.faq-accordion-summary::-webkit-details-marker {
  display: none;
}
.faq-accordion-icon {
  font-family: system-ui, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #2563eb;
  line-height: 1;
  transition: transform 0.2s ease;
}
.faq-accordion-item[open] .faq-accordion-icon {
  transform: rotate(45deg);
}
.faq-accordion-body {
  padding: 0 22px 18px;
  font-size: 14px;
  line-height: 1.6;
  color: #475569;
}
</style>
<script nonce="{{ $cspNonce }}">
function setLang(l){var p=document.getElementById('page');if(p)p.setAttribute('data-lg',l);document.querySelectorAll('.lang-btn').forEach(function(b){b.getAttribute('data-lang')===l?b.classList.add('active'):b.classList.remove('active');});}
window.__langBtnBound = false;
function bindLangButtons() {
  if (window.__langBtnBound) return;
  window.__langBtnBound = true;
  var btnEn = document.getElementById('btn-lang-en');
  var btnId = document.getElementById('btn-lang-id');
  if (btnEn) btnEn.addEventListener('click', function() { setLang('en'); btnEn.setAttribute('aria-pressed','true'); if (btnId) btnId.setAttribute('aria-pressed','false'); });
  if (btnId) btnId.addEventListener('click', function() { setLang('id'); btnId.setAttribute('aria-pressed','true'); if (btnEn) btnEn.setAttribute('aria-pressed','false'); });
}
function bindReviewButtons() {
  document.querySelectorAll('#reviews [data-more]').forEach(function(btn) {
    if (btn.dataset.wired) return;
    btn.dataset.wired = '1';
    btn.addEventListener('click', function() {
      var grid = document.getElementById(btn.getAttribute('data-more'));
      if (!grid) return;
      grid.removeAttribute('data-collapsed');
      var box = btn.parentElement;
      if (box) box.style.setProperty('display', 'none', 'important');
    });
  });
}
function initReviewCarousel() {
  var track = document.getElementById('rev-cards-carousel');
  var prevBtn = document.getElementById('rev-prev-btn');
  var nextBtn = document.getElementById('rev-next-btn');
  if (!track || !prevBtn || !nextBtn) return;

  function updateArrows() {
    prevBtn.style.opacity = track.scrollLeft <= 10 ? '0.35' : '1';
    prevBtn.style.pointerEvents = track.scrollLeft <= 10 ? 'none' : 'auto';
    var maxScroll = track.scrollWidth - track.clientWidth - 10;
    nextBtn.style.opacity = track.scrollLeft >= maxScroll ? '0.35' : '1';
    nextBtn.style.pointerEvents = track.scrollLeft >= maxScroll ? 'none' : 'auto';
  }

  prevBtn.addEventListener('click', function() {
    var card = track.querySelector('.rev-card-item');
    var scrollWidth = card ? (card.offsetWidth + 16) * 2 : 300;
    track.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', function() {
    var card = track.querySelector('.rev-card-item');
    var scrollWidth = card ? (card.offsetWidth + 16) * 2 : 300;
    track.scrollBy({ left: scrollWidth, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();
}
function initTaReviewCarousel() {
  var track = document.getElementById('ta-cards-carousel');
  var prevBtn = document.getElementById('ta-prev-btn');
  var nextBtn = document.getElementById('ta-next-btn');
  if (!track || !prevBtn || !nextBtn) return;

  function updateArrows() {
    prevBtn.style.opacity = track.scrollLeft <= 10 ? '0.35' : '1';
    prevBtn.style.pointerEvents = track.scrollLeft <= 10 ? 'none' : 'auto';
    var maxScroll = track.scrollWidth - track.clientWidth - 10;
    nextBtn.style.opacity = track.scrollLeft >= maxScroll ? '0.35' : '1';
    nextBtn.style.pointerEvents = track.scrollLeft >= maxScroll ? 'none' : 'auto';
  }

  prevBtn.addEventListener('click', function() {
    var card = track.querySelector('.ta-card-item');
    var scrollWidth = card ? (card.offsetWidth + 16) * 2 : 300;
    track.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', function() {
    var card = track.querySelector('.ta-card-item');
    var scrollWidth = card ? (card.offsetWidth + 16) * 2 : 300;
    track.scrollBy({ left: scrollWidth, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();
}
function loadMarketingScripts() {
  if (window.__marketingLoaded) return;
  window.__marketingLoaded = true;
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,'clarity','script','y5mhtiav9f');
  window.clarity('consentv2', {
    ad_Storage: 'granted',
    analytics_Storage: 'granted'
  });
}
function initPageScripts() {
  bindLangButtons();
  bindReviewButtons();
  initReviewCarousel();
  initTaReviewCarousel();
  loadMarketingScripts();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageScripts);
} else {
  initPageScripts();
}
</script>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PP3LHJ7F"
height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="page" data-lg="en" style="background: var(--color-bg); color: var(--color-text); font-family: var(--font-body)">
  <main>

  <header style="position: sticky; top: 0; z-index: 70; background: #FFFFFF; border-bottom: 1px solid var(--color-divider); box-shadow: 0 1px 6px rgba(15, 26, 48, 0.07)">
    <div style="max-width: 1160px; margin: 0 auto; padding: 10px 24px; display: flex; align-items: center; gap: 14px; flex-wrap: nowrap">
      <a href="#top" style="margin-right: auto; display: flex; align-items: center; text-decoration: none">
        <img src="{{ asset('logo-menjangan.webp') }}" alt="Menjangan Snorkeling Trip &amp; Diving" width="128" height="128" style="height: 52px; width: auto; flex: none">
      </a>
      <div style="display: flex; align-items: center; border: 1px solid var(--color-divider)">
        <button id="btn-lang-en" type="button" class="lang-btn active" data-lang="en" aria-pressed="true" aria-label="Switch to English">EN</button>
        <button id="btn-lang-id" type="button" class="lang-btn" data-lang="id" aria-pressed="false" aria-label="Ganti ke Bahasa Indonesia">ID</button>
      </div>
      <a id="btn-hero-wa" class="btn btn-primary" href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island." target="_blank" rel="noopener noreferrer" style="font-size: 14px; padding: 9px 16px; white-space: nowrap">
          <svg viewBox="0 0 24 24" fill="#ffffff" style="width: 32px; height: 32px" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.15-.15.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.34 5.08 4.56.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"></path><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21z"></path></svg>
        <span data-l="en">Booking via WhatsApp</span><span data-l="id">Booking via WhatsApp</span>
      </a>
    </div>
  </header>
  <section id="top" class="hero-wrapper">
    <img fetchpriority="high" src="{{ asset('new/hero.webp') }}" alt="Menjangan Island Tour aerial view" class="hero-bg-img" width="1400" height="933">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">
        <span data-l="en">MENJANGAN<br>ISLAND TOUR</span>
        <span data-l="id">MENJANGAN<br>ISLAND TOUR</span>
      </h1>
      <h2 class="hero-subtitle">
        <span data-l="en">Snorkeling &amp; Diving in West Bali National Park</span>
        <span data-l="id">Snorkeling &amp; Diving di Taman Nasional Bali Barat</span>
      </h2>
      <p class="hero-desc">
        <span data-l="en">Daily departures from Banyuwedang Harbour. Small groups, local guides in the water with you, and everything included.</span>
        <span data-l="id">Keberangkatan setiap hari dari Pelabuhan Banyuwedang. Grup kecil, pemandu lokal mendampingi di air, dan semua kebutuhan sudah termasuk.</span>
      </p>
      <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 4px;">
        <a id="btn-hero-wa-main" class="hero-cta-btn" href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island." target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="#ffffff" width="19" height="19" aria-hidden="true" style="flex-shrink: 0;">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"/>
          </svg>
          <span data-l="en">Book via WhatsApp Now</span>
          <span data-l="id">Booking via WhatsApp Sekarang</span>
        </a>
        <div class="hero-badge">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style="flex-shrink: 0; color: #86efac;">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.38 17.55 9.17 12.3 17 10.3V8zm0-6C10.92 2 6 6.92 6 13c0 1.25.21 2.45.58 3.57C8.16 12.4 12.06 9.68 17 9.1V2zm0 1c3.87 0 7 3.13 7 7s-3.13 7-7 7c-.7 0-1.37-.1-2-.3 1.34-3.1 3.57-5.58 6.53-6.9-.27-.08-.55-.13-.83-.16-4.57.57-8.15 3.33-9.59 7.36-.07.2-.13.4-.19.6-.6-.73-1.04-1.58-1.31-2.5C9.28 9.53 12.82 3 17 3z"/>
          </svg>
          <span data-l="en">Licensed local operator, based in Pemuteran</span>
          <span data-l="id">Operator lokal berlisensi resmi, berbasis di Pemuteran</span>
        </div>
      </div>
    </div>
  </section>

  <section id="hero-stats" style="background: #ffffff; border-bottom: 1px solid var(--color-divider); padding: 46px 24px 42px;">
    <div class="stats-grid" style="max-width: 1160px; margin: 0 auto;">
      <!-- Google Card -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <div style="height: 30px; display: flex; align-items: center; justify-content: center;">
          <svg viewBox="0 0 272 92" width="94" height="32" aria-label="Google">
            <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.45zm-8.99 21.01c0-7.81-5.21-13.44-11.84-13.44-6.72 0-12.35 5.63-12.35 13.44 0 7.72 5.63 13.35 12.35 13.35 6.63 0 11.84-5.63 11.84-13.35z"/>
            <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
            <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-13.61-8.15l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
            <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.8.36 34.83.36 15.86 16.32.31 35.3.31c10.42 0 17.73 4.03 23.36 9.41l-6.64 6.64c-3.95-3.7-9.24-6.55-16.72-6.55-13.44 0-24.11 10.84-24.11 24.28 0 13.44 10.67 24.28 24.11 24.28 8.65 0 13.53-3.44 16.63-6.55 1.76-1.76 2.94-4.28 3.36-7.73H35.29v-.68z"/>
          </svg>
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: clamp(38px, 4.2vw, 50px); font-weight: 800; line-height: 1; color: #17233f; margin-top: 4px;">
          1,000+
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 600; color: #475569;">
          <span data-l="en">Google Reviews</span><span data-l="id">Google Reviews</span>
        </div>
        <div style="color: #f59e0b; font-size: 15px; letter-spacing: 2px; line-height: 1;">
          ★★★★★
        </div>
      </div>

      <!-- Tripadvisor Card -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <div style="height: 30px; display: flex; align-items: center; justify-content: center; gap: 7px;">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style="flex-shrink: 0;">
            <circle cx="12" cy="12" r="11" fill="#00AA6C"/>
            <circle cx="8.2" cy="12" r="3" fill="#ffffff"/>
            <circle cx="15.8" cy="12" r="3" fill="#ffffff"/>
            <circle cx="8.2" cy="12" r="1.5" fill="#000000"/>
            <circle cx="15.8" cy="12" r="1.5" fill="#000000"/>
            <path d="M12 9.2c-.8 0-1.5.6-1.5 1.4 0 .4.2.8.5 1 .3-.2.6-.4 1-.4s.7.2 1 .4c.3-.2.5-.6.5-1 0-.8-.7-1.4-1.5-1.4z" fill="#ffffff"/>
            <polygon points="12,12.3 11,14 13,14" fill="#000000"/>
          </svg>
          <span style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-weight: 800; font-size: 18px; color: #111827; letter-spacing: -0.02em;">Tripadvisor</span>
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: clamp(38px, 4.2vw, 50px); font-weight: 800; line-height: 1; color: #17233f; margin-top: 4px;">
          200+
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 600; color: #475569;">
          <span data-l="en">Tripadvisor Reviews</span><span data-l="id">Tripadvisor Reviews</span>
        </div>
        <div style="color: #f59e0b; font-size: 15px; letter-spacing: 2px; line-height: 1;">
          ★★★★★
        </div>
      </div>

      <!-- 10+ Experience Card -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <div style="height: 30px; display: flex; align-items: center; justify-content: center;">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <polyline points="9 12 11 14 15 10"></polyline>
          </svg>
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: clamp(38px, 4.2vw, 50px); font-weight: 800; line-height: 1; color: #17233f; margin-top: 4px;">
          10+
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 600; color: #475569;">
          <span data-l="en">Years of Local Experience</span><span data-l="id">Years of Local Experience</span>
        </div>
        <div style="font-family: 'Montserrat', system-ui, -apple-system, sans-serif; font-size: 12px; font-weight: 500; color: #3b82f6;">
          <span data-l="en">Licensed operator, Pemuteran</span><span data-l="id">Licensed operator, Pemuteran</span>
        </div>
      </div>
    </div>
  </section>

  <section id="hero-slider" class="photo-slider-wrapper">
    <div class="photo-slider-track">
      <div class="photo-slider-list">
        <div class="photo-slider-item"><img src="{{ asset('new/DJI_0069-compress.webp') }}" alt="Menjangan Island aerial view" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/Menjangan-Island-1.webp') }}" alt="Wild deer in crystal water at Menjangan Island" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/menjanganislandtrip-Slider-mobile-3.webp') }}" alt="Menjangan temple cliff and traditional boat" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/menjanganislandtrip-Slider-mobile-4.webp') }}" alt="Tour boats and deers on Menjangan beach" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/menjanganislandtrip-Slider-mobile-5.webp') }}" alt="Menjangan Island scenery and mountains" loading="lazy" decoding="async"></div>
      </div>
      <!-- Duplicate for infinite seamless scroll loop -->
      <div class="photo-slider-list" aria-hidden="true">
        <div class="photo-slider-item"><img src="{{ asset('new/DJI_0069-compress.webp') }}" alt="Menjangan Island aerial view" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/Menjangan-Island-1.webp') }}" alt="Wild deer in crystal water at Menjangan Island" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/menjanganislandtrip-Slider-mobile-3.webp') }}" alt="Menjangan temple cliff and traditional boat" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/menjanganislandtrip-Slider-mobile-4.webp') }}" alt="Tour boats and deers on Menjangan beach" loading="lazy" decoding="async"></div>
        <div class="photo-slider-item"><img src="{{ asset('new/menjanganislandtrip-Slider-mobile-5.webp') }}" alt="Menjangan Island scenery and mountains" loading="lazy" decoding="async"></div>
      </div>
    </div>
  </section>

  <!-- Real Guests, Real Reviews Section (8 Cards Carousel) -->
  <section id="guest-reviews-carousel" style="background: #f0f7fc; padding: 56px 20px 48px; border-bottom: 1px solid var(--color-divider); position: relative;">
    <div style="max-width: 1200px; margin: 0 auto;">
      
      <!-- Section Header -->
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(24px, 3.2vw, 36px); color: #0f274a; margin: 0 0 8px;">
          <span data-l="en">Real Guests, Real Reviews</span>
          <span data-l="id">Tamu Asli, Ulasan Nyata</span>
        </h2>
        <p style="font-size: 15px; color: #3b82f6; margin: 0 0 24px; font-weight: 500;">
          <span data-l="en">More than a thousand guests have reviewed their trip with us on Google. Here is what they said.</span>
          <span data-l="id">Lebih dari seribu tamu telah mengulas perjalanan mereka bersama kami di Google. Inilah pendapat mereka.</span>
        </p>

        <!-- Rating summary badge -->
        <div style="display: inline-flex; flex-direction: column; align-items: center; gap: 3px;">
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; letter-spacing: 0.08em; color: #111827; text-transform: uppercase;">
            EXCELLENT
          </div>
          <div style="color: #f59e0b; font-size: 22px; letter-spacing: 3px; line-height: 1;">
            ★★★★★
          </div>
          <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
            <span data-l="en">Based on 958 reviews</span>
            <span data-l="id">Berdasarkan 958 ulasan</span>
          </div>
          <div style="margin-top: 4px;">
            <svg viewBox="0 0 272 92" width="80" height="28" aria-label="Google">
              <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
              <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
              <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.45zm-8.99 21.01c0-7.81-5.21-13.44-11.84-13.44-6.72 0-12.35 5.63-12.35 13.44 0 7.72 5.63 13.35 12.35 13.35 6.63 0 11.84-5.63 11.84-13.35z"/>
              <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
              <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-13.61-8.15l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
              <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.8.36 34.83.36 15.86 16.32.31 35.3.31c10.42 0 17.73 4.03 23.36 9.41l-6.64 6.64c-3.95-3.7-9.24-6.55-16.72-6.55-13.44 0-24.11 10.84-24.11 24.28 0 13.44 10.67 24.28 24.11 24.28 8.65 0 13.53-3.44 16.63-6.55 1.76-1.76 2.94-4.28 3.36-7.73H35.29v-.68z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Carousel Track with Navigation Buttons -->
      <div class="rev-carousel-container">
        <button id="rev-prev-btn" class="rev-arrow-btn rev-arrow-prev" aria-label="Previous reviews">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div id="rev-cards-carousel" class="rev-cards-track">
          <!-- Card 1: Belle Weerts -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #5ba3e0;"></div>
              <div class="rev-user-info">
                <span class="rev-user-name">Belle Weerts</span>
                <span class="rev-user-date">1 month ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">We had a very nice snorkling experience! The guide was good and it was a beautiful experience. We saw seaturtles and many of th...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 2: hhh_j -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #e05375;">h</div>
              <div class="rev-user-info">
                <span class="rev-user-name">hhh_j</span>
                <span class="rev-user-date">1 month ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">It was a truly perfect trip! They helped us find so many beautiful corals, fish, and turtles. And the underwater scenery was absolutel...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 3: Jack Hennesey Cleary -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #6d28d9;">J</div>
              <div class="rev-user-info">
                <span class="rev-user-name">Jack Hennesey Cleary</span>
                <span class="rev-user-date">1 month ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">I did two dives here last week and after diving all around Bali for the last several days I can now say that this was my favourite. I'm sorry I...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 4: Areta Herwendra -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #0d9488;">A</div>
              <div class="rev-user-info">
                <span class="rev-user-name">Areta Herwendra</span>
                <span class="rev-user-date">1 month ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">Pelayanannya bagus bangettttt, makasih bli Suma udh sabar sama kitaa semua</p>
            <a href="#reviews" class="rev-read-more" style="visibility: hidden;">Read more</a>
          </div>

          <!-- Card 5: Nanang Hidayat -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #0f766e;">N</div>
              <div class="rev-user-info">
                <span class="rev-user-name">Nanang Hidayat</span>
                <span class="rev-user-date">1 month ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">Super sekali pelayanan trip nya sangat memuaskan teruntuk private trip bersama teman-teman. Sangat rekomen untuk yang mau...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 6: Bianca -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #064e3b;">B</div>
              <div class="rev-user-info">
                <span class="rev-user-name">Bianca</span>
                <span class="rev-user-date">2 months ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">We hebben een hele leuke safari trip gedaan! Erg genoten en leuke open auto en van alles gezien met de gids en chauffeur! Veel zwarte...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 7: Sab Voyage -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <div class="rev-avatar" style="background: #ea580c;">S</div>
              <div class="rev-user-info">
                <span class="rev-user-name">Sab Voyage</span>
                <span class="rev-user-date">2 months ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">Spectaculaire !!!<br><br>Je remercie énormément notre guide Putu et notre capitaine pour cette...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 8: Dorota Bi -->
          <div class="rev-card-item">
            <div class="rev-card-header">
              <img src="{{ asset('testimoni1/dorota-bi.webp') }}" alt="Dorota Bi" class="rev-avatar" style="object-fit: cover;">
              <div class="rev-user-info">
                <span class="rev-user-name">Dorota Bi</span>
                <span class="rev-user-date">2 months ago</span>
              </div>
              <div class="rev-google-icon">
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>
              </div>
            </div>
            <div class="rev-stars-row">
              <span class="rev-stars">★★★★★</span>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p class="rev-text">An excellent team. Great organization, professional, and punctual, which is very important to me. Thank you for a great day of...</p>
            <a href="#reviews" class="rev-read-more">Read more</a>
          </div>

        </div>

        <button id="rev-next-btn" class="rev-arrow-btn rev-arrow-next" aria-label="Next reviews">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Trustindex badge on bottom right -->
      <div style="display: flex; justify-content: flex-end; padding: 0 4px;">
        <div style="display: inline-flex; align-items: center; gap: 5px; background: #dcfce7; color: #166534; font-size: 11.5px; font-weight: 600; padding: 4px 10px; border-radius: 999px;">
          <span>Verified by Trustindex</span>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </div>
      </div>

    </div>
  </section>

  <!-- Three Ways Into The Water / Snorkeling Trip Section -->
  <section id="snorkeling-intro" class="snorkeling-grid-section">
    <div style="max-width: 1180px; margin: 0 auto;">
      
      <!-- Section Header -->
      <div style="text-align: center; margin-bottom: 48px;">
        <div style="font-family: 'Montserrat', system-ui, sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #2563eb; margin-bottom: 10px;">
          <span data-l="en">THREE WAYS INTO THE WATER</span>
          <span data-l="id">TIGA CARA MENIKMATI MENJANGAN</span>
        </div>
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(28px, 3.4vw, 42px); color: #0f274a; margin: 0 0 14px;">
          <span data-l="en">Menjangan Snorkeling Trip &amp; Diving</span>
          <span data-l="id">Menjangan Snorkeling Trip &amp; Diving</span>
        </h2>
        <p style="max-width: 720px; margin: 0 auto; font-size: 15px; line-height: 1.6; color: #475569;">
          <span data-l="en">Explore crystal-clear waters, vibrant coral reefs, and incredible tropical marine life with our experienced local guides. As a legally licensed local operator, we are committed to providing safe, professional, and unforgettable ocean adventures.</span>
          <span data-l="id">Jelajahi perairan sebening kristal, terumbu karang yang hidup, dan biota laut tropis bersama pemandu lokal berpengalaman kami. Sebagai operator berlisensi resmi, kami berkomitmen memberikan petualangan laut yang aman, profesional, dan tak terlupakan.</span>
        </p>
      </div>

      <!-- 2-Column Split: 3x3 Photo Gallery & Trip Info -->
      <div class="snorkeling-split-layout">
        
        <!-- Left: 3x3 Photo Gallery -->
        <div class="snorkeling-gallery-grid">
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-01.webp') }}" alt="Snorkeling at coral garden Menjangan" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-02.webp') }}" alt="Snorkeler swimming with tropical fish" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-03.webp') }}" alt="Child snorkeling Menjangan Island" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-04.webp') }}" alt="Wild deer on the beach Menjangan" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-05.webp') }}" alt="Sea turtle swimming in crystal clear water" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-06.webp') }}" alt="Clownfish anemone reef" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-07.webp') }}" alt="Snorkeling above vibrant reef" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-08.webp') }}" alt="Aerial view of turquoise lagoon" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/snorkeling-09.webp') }}" alt="White sand beach Menjangan" loading="lazy" decoding="async">
          </div>
        </div>

        <!-- Right: Snorkeling Trip Details -->
        <div style="display: flex; flex-direction: column;">
          
          <!-- Category Badge -->
          <div style="display: inline-flex; align-items: center; background: #0f274a; color: #ffffff; padding: 6px 14px; border-radius: 6px; align-self: flex-start; margin-bottom: 16px;">
            <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase;">01 SNORKELING</span>
            <span style="opacity: 0.75; font-size: 11.5px; margin-left: 6px;">· <span data-l="en">All levels - non-swimmers welcome</span><span data-l="id">Semua level - ramah pemula</span></span>
          </div>

          <!-- Trip Title -->
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(22px, 2.3vw, 29px); color: #0f274a; line-height: 1.25; margin: 0 0 14px;">
            <span data-l="en">Snorkeling Menjangan Island: Half-Day Trip, Everything Included</span>
            <span data-l="id">Snorkeling Pulau Menjangan: Trip Setengah Hari, Semua Termasuk</span>
          </h3>

          <!-- Sub-description -->
          <p style="font-size: 14.5px; line-height: 1.6; color: #475569; margin: 0 0 24px;">
            <span data-l="en">Crystal-clear turquoise water, vibrant coral reefs, and the wild deer of Menjangan's white-sand beaches.</span>
            <span data-l="id">Air biru kehijauan yang sebening kristal, terumbu karang hidup yang memukau, dan rusa liar di pantai pasir putih Menjangan.</span>
          </p>

          <!-- THE TRIP Section -->
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 14px;">
            <span data-l="en">THE TRIP</span>
            <span data-l="id">DETAIL TRIP</span>
          </div>

          <div style="margin-bottom: 24px;">
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Explore two beautiful snorkeling spots inside West Bali National Park</span><span data-l="id">Jelajahi dua titik snorkeling terindah di Taman Nasional Bali Barat</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Picnic lunch on the white-sand beach, with Menjangan's famous wild deer nearby</span><span data-l="id">Makan siang piknik di pantai pasir putih, bersama rusa liar khas Menjangan di sekitar</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Shared boat departs 9:00 AM daily, or take a private boat at a time that suits you</span><span data-l="id">Perahu bersama berangkat jam 09.00 WITA setiap hari, atau pilih perahu privat sesuai waktu Anda</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Your guide is in the water with you, showing you the reef and keeping you comfortable</span><span data-l="id">Pemandu Anda mendampingi di air, menunjukkan keindahan terumbu karang dan memastikan keamanan Anda</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">First time snorkeling, or travelling with children? No swimming experience needed</span><span data-l="id">Baru pertama kali snorkeling, atau bersama anak-anak? Tidak perlu pengalaman berenang</span></span>
            </div>
          </div>

          <!-- INCLUDED Section -->
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 12px;">
            <span data-l="en">INCLUDED</span>
            <span data-l="id">SUDAH TERMASUK</span>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="trip-tag-pill"><span data-l="en">Boat and crew</span><span data-l="id">Perahu &amp; kru</span></span>
            <span class="trip-tag-pill"><span data-l="en">Park permit</span><span data-l="id">Tiket taman nasional</span></span>
            <span class="trip-tag-pill"><span data-l="en">Full gear</span><span data-l="id">Alat lengkap</span></span>
            <span class="trip-tag-pill"><span data-l="en">Guide in the water</span><span data-l="id">Pemandu di air</span></span>
            <span class="trip-tag-pill"><span data-l="en">Lunch and water</span><span data-l="id">Makan siang &amp; air</span></span>
            <span class="trip-tag-pill"><span data-l="en">Insurance</span><span data-l="id">Asuransi</span></span>
            <span class="trip-tag-pill"><span data-l="en">Free local pick-up</span><span data-l="id">Antar jemput lokal gratis</span></span>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- Scuba Diving Section (02 SCUBA DIVING) -->
  <section id="scuba-diving-section" class="snorkeling-grid-section" style="border-top: none;">
    <div style="max-width: 1180px; margin: 0 auto;">
      
      <!-- 2-Column Split: Scuba Info on Left, 3x3 Photo Gallery on Right -->
      <div class="snorkeling-split-layout">
        
        <!-- Left: Scuba Trip Details -->
        <div style="display: flex; flex-direction: column;">
          
          <!-- Category Badge -->
          <div style="display: inline-flex; align-items: center; background: #0f274a; color: #ffffff; padding: 6px 14px; border-radius: 6px; align-self: flex-start; margin-bottom: 16px;">
            <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase;">02 SCUBA DIVING</span>
            <span style="opacity: 0.75; font-size: 11.5px; margin-left: 6px;">· <span data-l="en">Certified divers · Open Water and above</span><span data-l="id">Penyelam bersertifikat · Open Water ke atas</span></span>
          </div>

          <!-- Trip Title -->
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(22px, 2.3vw, 29px); color: #0f274a; line-height: 1.25; margin: 0 0 14px;">
            <span data-l="en">Scuba Diving Menjangan Island: Visit 2 Beautiful Dive Spots</span>
            <span data-l="id">Scuba Diving Pulau Menjangan: Kunjungi 2 Spot Selam Terbaik</span>
          </h3>

          <!-- Sub-description -->
          <p style="font-size: 14.5px; line-height: 1.6; color: #475569; margin: 0 0 24px;">
            <span data-l="en">Spectacular coral walls and colourful reef life, at one of Bali’s most beautiful dive destinations.</span>
            <span data-l="id">Dinding karang spektakuler dan kehidupan terumbu karang yang memukau, di salah satu destinasi selam terindah di Bali.</span>
          </p>

          <!-- THE TRIP Section -->
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 14px;">
            <span data-l="en">THE TRIP</span>
            <span data-l="id">DETAIL TRIP</span>
          </div>

          <div style="margin-bottom: 20px;">
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Two dives around Menjangan Island, at sites chosen on the morning for the best conditions</span><span data-l="id">Dua kali penyelaman di sekitar Pulau Menjangan, di spot terbaik yang dipilih pagi hari sesuai kondisi</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">For certified divers from Open Water (Level 1) and above</span><span data-l="id">Untuk penyelam bersertifikat dari level Open Water (Level 1) ke atas</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Wall, boat and drift dives at 3 to 25 metres, with gentle currents</span><span data-l="id">Penyelaman dinding (wall dive), perahu, dan drift dive pada kedalaman 3 hingga 25 meter dengan arus tenang</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">In good conditions the visibility reaches up to 30 metres</span><span data-l="id">Pada kondisi prima, jarak pandang dalam air mencapai hingga 30 meter</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">A comfortable surface interval on the beach between the two dives</span><span data-l="id">Jeda permukaan (surface interval) yang nyaman di pantai di antara dua sesi penyelaman</span></span>
            </div>
          </div>

          <!-- Eleven dive sites box -->
          <div style="background: #f0f7ff; border-left: 3.5px solid #2563eb; padding: 12px 16px; border-radius: 6px; margin-bottom: 24px; font-size: 13px; line-height: 1.6; color: #334155;">
            <strong style="color: #0f274a;"><span data-l="en">Eleven dive sites:</span><span data-l="id">Sebelas spot selam:</span></strong> Pos I · Mangrove Point · Underwater Cave · Pos II · Bat Cave · Temple Wall · Coral Garden · Sandy Slope · Dream Wall · Anchor Wreck · Eel Garden
          </div>

          <!-- INCLUDED Section -->
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 12px;">
            <span data-l="en">INCLUDED</span>
            <span data-l="id">SUDAH TERMASUK</span>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="trip-tag-pill"><span data-l="en">Gear and tanks</span><span data-l="id">Alat &amp; tabung</span></span>
            <span class="trip-tag-pill"><span data-l="en">Boat and crew</span><span data-l="id">Perahu &amp; kru</span></span>
            <span class="trip-tag-pill"><span data-l="en">Park permit</span><span data-l="id">Tiket taman nasional</span></span>
            <span class="trip-tag-pill"><span data-l="en">Certified dive guide</span><span data-l="id">Pemandu selam bersertifikat</span></span>
            <span class="trip-tag-pill"><span data-l="en">Lunch and water</span><span data-l="id">Makan siang &amp; air</span></span>
            <span class="trip-tag-pill"><span data-l="en">Diving insurance</span><span data-l="id">Asuransi selam</span></span>
            <span class="trip-tag-pill"><span data-l="en">Free local pick-up</span><span data-l="id">Antar jemput lokal gratis</span></span>
          </div>

        </div>

        <!-- Right: 3x3 Photo Gallery -->
        <div class="snorkeling-gallery-grid">
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-01.webp') }}" alt="Scuba diver photographing coral reef Menjangan" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-02.webp') }}" alt="Diver swimming with sea turtle" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-03.webp') }}" alt="Vibrant reef and anthias fish" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-04.webp') }}" alt="Diver exploring reef wall" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-05.webp') }}" alt="Divers near big sea fan" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-06.webp') }}" alt="Diver beside gorgonian coral" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-07.webp') }}" alt="Diver above colorful corals" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-08.webp') }}" alt="Diver admiring huge sea fan" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/scuba-09.webp') }}" alt="Sunbeams penetrating underwater cave dive site" loading="lazy" decoding="async">
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Discovery Scuba Diving Section (03 DISCOVERY SCUBA DIVING) -->
  <section id="discovery-scuba-section" class="snorkeling-grid-section" style="border-top: none;">
    <div style="max-width: 1180px; margin: 0 auto;">
      
      <!-- 2-Column Split: 7-Photo Gallery on Left, Discovery Info on Right -->
      <div class="snorkeling-split-layout">
        
        <!-- Left: 7-Photo Gallery Grid (Row 1: 3, Row 2: 3, Row 3: 1 centered) -->
        <div class="snorkeling-gallery-grid">
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/discovery-01.webp') }}" alt="Beginner scuba diving Menjangan Island" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/discovery-02.webp') }}" alt="Diver swimming over coral garden" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/discovery-03.webp') }}" alt="Try scuba diver next to sea fan" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/discovery-04.webp') }}" alt="Sea turtle swimming alongside diver" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/discovery-05.webp') }}" alt="Try scuba diver giving peace sign underwater" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item">
            <img src="{{ asset('new/discovery-06.webp') }}" alt="First time diver with instructor nearby" loading="lazy" decoding="async">
          </div>
          <div class="snorkeling-gallery-item" style="grid-column: 2;">
            <img src="{{ asset('new/discovery-07.webp') }}" alt="Discovery scuba diver in shallow clear water" loading="lazy" decoding="async">
          </div>
        </div>

        <!-- Right: Discovery Scuba Trip Details -->
        <div style="display: flex; flex-direction: column;">
          
          <!-- Category Badge -->
          <div style="display: inline-flex; align-items: center; background: #0f274a; color: #ffffff; padding: 6px 14px; border-radius: 6px; align-self: flex-start; margin-bottom: 16px;">
            <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase;">03 DISCOVERY SCUBA DIVING</span>
            <span style="opacity: 0.75; font-size: 11.5px; margin-left: 6px;">· <span data-l="en">Total beginners · no certification</span><span data-l="id">Pemula total · tanpa sertifikasi</span></span>
          </div>

          <!-- Trip Title -->
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(22px, 2.3vw, 29px); color: #0f274a; line-height: 1.25; margin: 0 0 14px;">
            <span data-l="en">Never Dived Before? Discovery Scuba Diving at Menjangan, No Certification Needed</span>
            <span data-l="id">Belum Pernah Menyelam? Discovery Scuba Diving di Menjangan, Tanpa Perlu Sertifikasi</span>
          </h3>

          <!-- Sub-description -->
          <p style="font-size: 14.5px; line-height: 1.6; color: #475569; margin: 0 0 24px;">
            <span data-l="en">Also known as Try Scuba. Nervous about your first breath underwater? This trip is built for that.</span>
            <span data-l="id">Juga dikenal sebagai Try Scuba. Ragu atau gugup untuk bernapas pertama kali di bawah air? Trip ini dirancang khusus untuk Anda.</span>
          </p>

          <!-- THE TRIP Section -->
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 14px;">
            <span data-l="en">THE TRIP</span>
            <span data-l="id">DETAIL TRIP</span>
          </div>

          <div style="margin-bottom: 24px;">
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">No certification, diving experience or swimming ability needed</span><span data-l="id">Tidak perlu sertifikasi, pengalaman menyelam, ataupun kemampuan berenang</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">Two shallow dives at 3 to 5 metres, with your instructor beside you throughout</span><span data-l="id">Dua kali penyelaman dangkal di kedalaman 3 hingga 5 meter, didampingi penuh oleh instruktur Anda</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">About 4 hours, including the briefing and lunch</span><span data-l="id">Durasi sekitar 4 jam, sudah termasuk sesi briefing dan makan siang</span></span>
            </div>
            <div class="trip-check-item">
              <svg viewBox="0 0 24 24" class="trip-check-icon" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span><span data-l="en">The experience itself, not a certification course</span><span data-l="id">Fokus menikmati pengalaman menyelam sesungguhnya, bukan kursus sertifikasi</span></span>
            </div>
          </div>

          <!-- INCLUDED Section -->
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb; margin-bottom: 12px;">
            <span data-l="en">INCLUDED</span>
            <span data-l="id">SUDAH TERMASUK</span>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span class="trip-tag-pill"><span data-l="en">Instructor with you</span><span data-l="id">Instruktur mendampingi</span></span>
            <span class="trip-tag-pill"><span data-l="en">Full gear in your size</span><span data-l="id">Alat lengkap sesuai ukuran</span></span>
            <span class="trip-tag-pill"><span data-l="en">Boat and crew</span><span data-l="id">Perahu &amp; kru</span></span>
            <span class="trip-tag-pill"><span data-l="en">Park permit</span><span data-l="id">Tiket taman nasional</span></span>
            <span class="trip-tag-pill"><span data-l="en">Lunch and water</span><span data-l="id">Makan siang &amp; air</span></span>
            <span class="trip-tag-pill"><span data-l="en">Insurance</span><span data-l="id">Asuransi</span></span>
            <span class="trip-tag-pill"><span data-l="en">Free local pick-up</span><span data-l="id">Antar jemput lokal gratis</span></span>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- About Us Section (A Local Operation on the West Bali Coast) -->
  <section id="about-us" style="background: #f0f7fc; padding: 68px 24px 72px; border-bottom: 1px solid var(--color-divider);">
    <div class="about-us-grid" style="max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.25fr; gap: 52px; align-items: center;">
      
      <!-- Left: Diver Image -->
      <div style="display: flex; justify-content: center; align-items: center;">
        <img src="{{ asset('new/diving-menjangan-island1.webp') }}" alt="Local diver swimming along Menjangan reef" loading="lazy" decoding="async" style="width: 100%; max-width: 460px; height: auto; display: block;">
      </div>

      <!-- Right: About Us Content & Badge Pills -->
      <div style="display: flex; flex-direction: column;">
        <div style="font-family: 'Montserrat', system-ui, sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #2563eb; margin-bottom: 10px;">
          <span data-l="en">ABOUT US</span>
          <span data-l="id">TENTANG KAMI</span>
        </div>

        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(26px, 3.2vw, 38px); color: #0f274a; line-height: 1.2; margin: 0 0 20px;">
          <span data-l="en">A Local Operation on the West Bali Coast</span>
          <span data-l="id">Operator Lokal di Pesisir Bali Barat</span>
        </h2>

        <p style="font-size: 15px; line-height: 1.65; color: #334155; margin: 0 0 16px;">
          <span data-l="en">We are based in Pejarakan, on the coast road between Pemuteran and Banyuwedang Harbour, and we work with guides who grew up along this stretch of water. They learned these reefs before they ever guided on them, and they know which wall the turtles favour and how the tide runs at each site.</span>
          <span data-l="id">Kami berbasis di Pejarakan, di jalan pesisir antara Pemuteran dan Pelabuhan Banyuwedang, serta bekerja bersama pemandu lokal yang tumbuh besar di pesisir ini. Mereka telah mengenal terumbu karang ini jauh sebelum menjadi pemandu, dan sangat memahami dinding karang favorit penyu serta pola arus di setiap spot.</span>
        </p>

        <p style="font-size: 15px; line-height: 1.65; color: #334155; margin: 0 0 28px;">
          <span data-l="en">Booking with us keeps the work on this coast. We keep groups small, maintain our own gear, and support the reef restoration efforts the area is known for.</span>
          <span data-l="id">Memesan bersama kami turut memberdayakan perekonomian pesisir lokal. Kami menjaga kapasitas grup tetap kecil, merawat peralatan sendiri, dan mendukung upaya pelestarian terumbu karang di kawasan ini.</span>
        </p>

        <!-- Feature Pill Badges -->
        <div class="about-pills" style="display: flex; flex-wrap: wrap; gap: 10px;">
          
          <div style="display: inline-flex; align-items: center; gap: 7px; background: #ffffff; border: 1px solid rgba(15, 26, 48, 0.08); border-radius: 999px; padding: 7px 16px; font-size: 13px; font-weight: 600; color: #1e293b; box-shadow: 0 1px 4px rgba(15, 26, 48, 0.04);">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            <span><span data-l="en">Licensed operator</span><span data-l="id">Operator berlisensi</span></span>
          </div>

          <div style="display: inline-flex; align-items: center; gap: 7px; background: #ffffff; border: 1px solid rgba(15, 26, 48, 0.08); border-radius: 999px; padding: 7px 16px; font-size: 13px; font-weight: 600; color: #1e293b; box-shadow: 0 1px 4px rgba(15, 26, 48, 0.04);">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span><span data-l="en">10+ years on this coast</span><span data-l="id">10+ tahun pengalaman di pesisir ini</span></span>
          </div>

          <div style="display: inline-flex; align-items: center; gap: 7px; background: #ffffff; border: 1px solid rgba(15, 26, 48, 0.08); border-radius: 999px; padding: 7px 16px; font-size: 13px; font-weight: 600; color: #1e293b; box-shadow: 0 1px 4px rgba(15, 26, 48, 0.04);">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span><span data-l="en">Max 10 per boat</span><span data-l="id">Maksimal 10 per perahu</span></span>
          </div>

          <div style="display: inline-flex; align-items: center; gap: 7px; background: #ffffff; border: 1px solid rgba(15, 26, 48, 0.08); border-radius: 999px; padding: 7px 16px; font-size: 13px; font-weight: 600; color: #1e293b; box-shadow: 0 1px 4px rgba(15, 26, 48, 0.04);">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
            <span><span data-l="en">Reef conservation</span><span data-l="id">Konservasi terumbu karang</span></span>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- How to Book & Why Book With Us Section -->
  <section id="how-to-book-why-us" style="background: #eef6fc; padding: 68px 24px 76px; border-bottom: 1px solid var(--color-divider);">
    <div style="max-width: 1160px; margin: 0 auto;">
      
      <!-- Part 1: How to Book Your Menjangan Island Tour -->
      <div style="text-align: center; margin-bottom: 36px;">
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(26px, 3.2vw, 36px); color: #0f274a; margin: 0 0 8px;">
          <span data-l="en">How to Book Your Menjangan Island Tour</span>
          <span data-l="id">Cara Memesan Tur Pulau Menjangan</span>
        </h2>
        <p style="font-size: 15px; color: #475569; margin: 0;">
          <span data-l="en">Three steps, and we handle the rest.</span>
          <span data-l="id">Tiga langkah mudah, sisanya kami yang urus.</span>
        </p>
      </div>

      <!-- 3 Steps Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 64px;">
        
        <!-- Step 1 -->
        <div style="background: #ffffff; border-radius: 14px; padding: 36px 24px 30px; box-shadow: 0 4px 18px rgba(15, 26, 48, 0.05); position: relative; text-align: center; display: flex; flex-direction: column; align-items: center;">
          <span style="position: absolute; top: 18px; left: 24px; font-family: 'Montserrat', system-ui, sans-serif; font-size: 34px; font-weight: 800; color: #e2e8f0; line-height: 1;">1</span>
          <div style="width: 52px; height: 52px; border-radius: 50%; background: #0f274a; display: grid; place-items: center; color: #ffffff; margin-bottom: 18px;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 18px; color: #0f274a; margin: 0 0 10px;">
            <span data-l="en">Message Us</span>
            <span data-l="id">Hubungi Kami</span>
          </h3>
          <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
            <span data-l="en">Send us your dates, group size and which trip you have in mind. WhatsApp is fastest, and we usually reply within the hour.</span>
            <span data-l="id">Kirimkan tanggal, jumlah peserta, dan paket trip yang diinginkan. WhatsApp paling cepat, dan kami membalas dalam hitungan menit.</span>
          </p>
        </div>

        <!-- Step 2 -->
        <div style="background: #ffffff; border-radius: 14px; padding: 36px 24px 30px; box-shadow: 0 4px 18px rgba(15, 26, 48, 0.05); position: relative; text-align: center; display: flex; flex-direction: column; align-items: center;">
          <span style="position: absolute; top: 18px; left: 24px; font-family: 'Montserrat', system-ui, sans-serif; font-size: 34px; font-weight: 800; color: #e2e8f0; line-height: 1;">2</span>
          <div style="width: 52px; height: 52px; border-radius: 50%; background: #0f274a; display: grid; place-items: center; color: #ffffff; margin-bottom: 18px;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 18px; color: #0f274a; margin: 0 0 10px;">
            <span data-l="en">We Confirm the Details</span>
            <span data-l="id">Kami Konfirmasi Detailnya</span>
          </h3>
          <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
            <span data-l="en">We check availability, adjust the itinerary if you want something different, and send you the full plan with timings and price.</span>
            <span data-l="id">Kami cek ketersediaan, sesuaikan jadwal sesuai keinginan Anda, dan kirimkan rencana lengkap beserta rincian waktu dan harga.</span>
          </p>
        </div>

        <!-- Step 3 -->
        <div style="background: #ffffff; border-radius: 14px; padding: 36px 24px 30px; box-shadow: 0 4px 18px rgba(15, 26, 48, 0.05); position: relative; text-align: center; display: flex; flex-direction: column; align-items: center;">
          <span style="position: absolute; top: 18px; left: 24px; font-family: 'Montserrat', system-ui, sans-serif; font-size: 34px; font-weight: 800; color: #e2e8f0; line-height: 1;">3</span>
          <div style="width: 52px; height: 52px; border-radius: 50%; background: #0f274a; display: grid; place-items: center; color: #ffffff; margin-bottom: 18px;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M2 17h20M2 7h20"></path></svg>
          </div>
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 18px; color: #0f274a; margin: 0 0 10px;">
            <span data-l="en">Show Up and Get In</span>
            <span data-l="id">Datang dan Nikmati Trip</span>
          </h3>
          <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
            <span data-l="en">Transfer, boat, gear, park permit, guide and lunch are all arranged. You just need to turn up ready to get in the water.</span>
            <span data-l="id">Antar jemput, perahu, alat, tiket taman nasional, pemandu, dan makan siang sudah siap. Anda tinggal datang siap menyelam.</span>
          </p>
        </div>

      </div>

      <!-- Part 2: Why Book With Us -->
      <div style="text-align: center; margin-bottom: 36px;">
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(26px, 3.2vw, 36px); color: #0f274a; margin: 0 0 8px;">
          <span data-l="en">Why Book With Us</span>
          <span data-l="id">Mengapa Memilih Kami</span>
        </h2>
        <p style="font-size: 15px; color: #475569; margin: 0;">
          <span data-l="en">What you get on every trip, without asking for it.</span>
          <span data-l="id">Kelebihan dan jaminan kenyamanan di setiap perjalanan Anda.</span>
        </p>
      </div>

      <!-- 6 Feature Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
        
        <!-- Feature 1: Not a Middleman -->
        <div style="background: #ffffff; border-radius: 12px; padding: 22px 20px; box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05); display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 38px; height: 38px; border-radius: 8px; background: #e0f2fe; display: grid; place-items: center; color: #2563eb; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div>
            <h4 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; margin: 0 0 6px;">
              <span data-l="en">Not a Middleman</span>
              <span data-l="id">Langsung Operator, Bukan Perantara</span>
            </h4>
            <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
              <span data-l="en">We are based on this coast and run the trips ourselves. No agency markup, no handing you over to someone else at the harbour.</span>
              <span data-l="id">Kami berbasis langsung di pesisir ini dan menjalankan trip sendiri. Tanpa biaya perantara, tanpa dioper ke pihak lain di dermaga.</span>
            </p>
          </div>
        </div>

        <!-- Feature 2: Safety First, Always -->
        <div style="background: #ffffff; border-radius: 12px; padding: 22px 20px; box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05); display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 38px; height: 38px; border-radius: 8px; background: #e0f2fe; display: grid; place-items: center; color: #2563eb; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
          </div>
          <div>
            <h4 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; margin: 0 0 6px;">
              <span data-l="en">Safety First, Always</span>
              <span data-l="id">Keselamatan Selalu Utama</span>
            </h4>
            <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
              <span data-l="en">Life jackets for everyone, a briefing before you enter, and a guide in the water with the group the whole time. Non-swimmers welcome.</span>
              <span data-l="id">Pelampung untuk semua, briefing sebelum masuk air, dan pemandu mendampingi di air sepanjang waktu. Ramah pemula.</span>
            </p>
          </div>
        </div>

        <!-- Feature 3: Small Groups -->
        <div style="background: #ffffff; border-radius: 12px; padding: 22px 20px; box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05); display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 38px; height: 38px; border-radius: 8px; background: #e0f2fe; display: grid; place-items: center; color: #2563eb; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div>
            <h4 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; margin: 0 0 6px;">
              <span data-l="en">Small Groups</span>
              <span data-l="id">Grup Kecil &amp; Eksklusif</span>
            </h4>
            <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
              <span data-l="en">Maximum ten people per boat, and two divers per guide on dive trips. You get attention in the water, not a queue.</span>
              <span data-l="id">Maksimal 10 orang per perahu, dan 2 penyelam per pemandu untuk trip diving. Perhatian penuh di air tanpa antre.</span>
            </p>
          </div>
        </div>

        <!-- Feature 4: One Price, Everything In -->
        <div style="background: #ffffff; border-radius: 12px; padding: 22px 20px; box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05); display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 38px; height: 38px; border-radius: 8px; background: #e0f2fe; display: grid; place-items: center; color: #2563eb; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
          </div>
          <div>
            <h4 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; margin: 0 0 6px;">
              <span data-l="en">One Price, Everything In</span>
              <span data-l="id">Satu Harga, Semua Termasuk</span>
            </h4>
            <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
              <span data-l="en">Boat, national park entrance, gear, guide, lunch and insurance are all in the quoted price. Nothing gets added at the jetty.</span>
              <span data-l="id">Perahu, tiket taman nasional, alat, pemandu, makan siang, dan asuransi sudah termasuk. Bebas biaya tambahan.</span>
            </p>
          </div>
        </div>

        <!-- Feature 5: The Right Sites, Not the Nearest -->
        <div style="background: #ffffff; border-radius: 12px; padding: 22px 20px; box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05); display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 38px; height: 38px; border-radius: 8px; background: #e0f2fe; display: grid; place-items: center; color: #2563eb; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M2 17h20M2 7h20"></path></svg>
          </div>
          <div>
            <h4 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; margin: 0 0 6px;">
              <span data-l="en">The Right Sites, Not the Nearest</span>
              <span data-l="id">Spot Terbaik, Bukan yang Terdekat</span>
            </h4>
            <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
              <span data-l="en">Eleven dive sites around the island and conditions that change daily. We pick where to take you on the morning, not from a fixed list.</span>
              <span data-l="id">11 titik selam di sekitar pulau dengan kondisi dinamis. Kami memilih spot terbaik di pagi hari sesuai kondisi laut.</span>
            </p>
          </div>
        </div>

        <!-- Feature 6: Private or Share, Year Round -->
        <div style="background: #ffffff; border-radius: 12px; padding: 22px 20px; box-shadow: 0 3px 14px rgba(15, 26, 48, 0.05); display: flex; align-items: flex-start; gap: 14px;">
          <div style="width: 38px; height: 38px; border-radius: 8px; background: #e0f2fe; display: grid; place-items: center; color: #2563eb; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div>
            <h4 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; margin: 0 0 6px;">
              <span data-l="en">Private or Share, Year Round</span>
              <span data-l="id">Trip Privat atau Bersama, Sepanjang Tahun</span>
            </h4>
            <p style="font-size: 13.5px; line-height: 1.55; color: #475569; margin: 0;">
              <span data-l="en">Share boats leave at 9am daily. Private trips run any time between 7am and 3pm, including last-minute bookings.</span>
              <span data-l="id">Trip bersama berangkat jam 09.00 WITA setiap hari. Trip privat fleksibel berangkat kapan saja antara 07.00–15.00 WITA.</span>
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- As featured on and trusted by Section -->
  <section id="featured-trusted-by" style="background: #f8fafc; padding: 56px 24px 48px; border-bottom: 1px solid var(--color-divider); text-align: center;">
    <div style="max-width: 1160px; margin: 0 auto;">
      <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(22px, 2.5vw, 30px); color: #0f274a; margin: 0 0 10px;">
        <span data-l="en">As featured on and trusted by</span>
        <span data-l="id">Telah Diliput dan Dipercaya Oleh</span>
      </h2>
      <p style="font-size: 14.5px; color: #475569; margin: 0 0 36px;">
        <span data-l="en">Thousands of travellers have found Menjangan Island through us. Here is where they found us first.</span>
        <span data-l="id">Ribuan wisatawan telah menemukan Pulau Menjangan bersama kami. Di sinilah mereka pertama kali menemukan kami.</span>
      </p>

      <!-- Logos Row -->
      <div style="display: flex; align-items: center; justify-content: center; gap: clamp(24px, 4vw, 56px); flex-wrap: wrap;">
        
        <!-- TripAdvisor -->
        <div style="display: flex; align-items: center; gap: 8px; filter: grayscale(100%); opacity: 0.7; transition: all 0.2s ease;">
          <div style="width: 28px; height: 28px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
          </div>
          <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 19px; color: #0f274a; letter-spacing: -0.02em;">Tripadvisor</span>
        </div>

        <!-- BALI Untold -->
        <div style="display: flex; align-items: center; filter: grayscale(100%); opacity: 0.7; transition: all 0.2s ease;">
          <img src="{{ asset('uploads/wp/Bali-Untold-Logo-Final-1-300x90-1.webp') }}" alt="Bali Untold" style="height: 32px; width: auto; object-fit: contain;">
        </div>

        <!-- TRAppe. -->
        <div style="display: flex; align-items: center; filter: grayscale(100%); opacity: 0.7; transition: all 0.2s ease;">
          <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 900; font-size: 23px; color: #0f274a; letter-spacing: -0.04em;">TRAppe<span style="color: #2563eb;">.</span></span>
        </div>

        <!-- GET YOUR GUIDE -->
        <div style="display: flex; align-items: center; filter: grayscale(100%); opacity: 0.7; transition: all 0.2s ease;">
          <img src="{{ asset('uploads/wp/GetYourGuide_Logo.svg_.webp') }}" alt="GetYourGuide" style="height: 38px; width: auto; object-fit: contain;">
        </div>

        <!-- Yandex Maps -->
        <div style="display: flex; align-items: center; filter: grayscale(100%); opacity: 0.7; transition: all 0.2s ease;">
          <img src="{{ asset('uploads/wp/yandexmaps-removebg-previewnorm.webp') }}" alt="Yandex Maps" style="height: 32px; width: auto; object-fit: contain;">
        </div>

      </div>
    </div>
  </section>

  <!-- More from Tripadvisor Section -->
  <section id="more-tripadvisor-reviews" style="background: #eef6fc; padding: 64px 24px 72px; border-bottom: 1px solid var(--color-divider);">
    <div style="max-width: 1160px; margin: 0 auto;">
      
      <!-- Section Header -->
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(24px, 3vw, 36px); color: #0f274a; margin: 0 0 8px;">
          <span data-l="en">More from Tripadvisor</span>
          <span data-l="id">Lebih Banyak dari Tripadvisor</span>
        </h2>
        <p style="font-size: 14.5px; color: #475569; margin: 0 0 24px;">
          <span data-l="en">Another 200+ reviews from travellers who have been out on the water with us.</span>
          <span data-l="id">200+ ulasan lainnya dari wisatawan yang telah berpetualang di laut bersama kami.</span>
        </p>

        <!-- TripAdvisor Trust Badge -->
        <div style="display: inline-flex; flex-direction: column; align-items: center;">
          <div style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 15px; color: #0f274a; letter-spacing: 0.04em; margin-bottom: 6px;">
            EXCELLENT
          </div>
          <!-- 5 Green Tripadvisor Circles -->
          <div style="display: flex; gap: 5px; justify-content: center; margin-bottom: 6px;">
            <span style="width: 15px; height: 15px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
            <span style="width: 15px; height: 15px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
            <span style="width: 15px; height: 15px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
            <span style="width: 15px; height: 15px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
            <span style="width: 15px; height: 15px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
          </div>
          <div style="font-size: 12.5px; color: #64748b; margin-bottom: 8px;">
            <span data-l="en">Based on 193 reviews</span>
            <span data-l="id">Berdasarkan 193 ulasan</span>
          </div>
          <!-- Tripadvisor brand -->
          <div style="display: inline-flex; align-items: center; gap: 6px; color: #0f274a; font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 14.5px;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>
            <span>Tripadvisor</span>
          </div>
        </div>
      </div>

      <!-- 10-Card Carousel Track Container -->
      <div style="position: relative; max-width: 1160px; margin: 0 auto;">
        
        <!-- Left Nav Arrow Button -->
        <button id="ta-prev-btn" type="button" aria-label="Previous Tripadvisor review" class="rev-arrow-btn rev-arrow-prev">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <!-- Right Nav Arrow Button -->
        <button id="ta-next-btn" type="button" aria-label="Next Tripadvisor review" class="rev-arrow-btn rev-arrow-next">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <!-- Horizontal Scrollable Cards -->
        <div id="ta-cards-carousel" class="ta-cards-track">
          
          <!-- Card 1: Isabelle S -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/issabela s.webp') }}" alt="Isabelle S avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Isabelle S</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Superbe sortie snorkeling !</strong> Deux spots magnifiques remplis de poissons colorés.Le guide Putu était vraiment au top, t...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 2: ahn -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/ahn.webp') }}" alt="ahn avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">ahn</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Make your perfect day!</strong> It was a truly perfect trip! They helped us find so many beautiful corals, fish, and turtles, and the...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 3: Baukje d -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/belle-w.webp') }}" alt="Baukje d avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Baukje d</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Highly recommended</strong> Highly recommend this organisation, great snorkelling trip with respect to nature. Using...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 4: Torste -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/dani fee.webp') }}" alt="Torste avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Torste</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Ein absolutes Highlight !</strong> Ein unvergessliches Schnorchelerlebnis rund um Menjangan Island – absolute...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 5: nicole p -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/fanny-s.webp') }}" alt="nicole p avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">nicole p</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Journée enchantée</strong> Mon conjoint, mon frère et ma fille de 5 ans avons passé une superbe journée 🤩 Snorkeling Mejangan...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 6: Thomas L -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/jarin wa.webp') }}" alt="Thomas L avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Thomas L</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Memories from Bali</strong> Really good expérience Really good picture too for the memories
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 7: Sylvie F -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/severine.webp') }}" alt="Sylvie F avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Sylvie F</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Magnifique sortie en famille</strong> Snorkeling Menjangan Island Nous avons passé un merveilleux moment en famille de snorkeling à...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 8: Achille S -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/elin giorgina.webp') }}" alt="Achille S avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Achille S</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              Les guides sont très bienveillants, ils prennent le temps de biens expliquer les consignes et sont toujours à l'écoute...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 9: Cecilia A -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/maria grando.webp') }}" alt="Cecilia A avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Cecilia A</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Excellent snorkeling at Menjangan Island</strong> Amazing experience at Menjangan Island! The underwater world was...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

          <!-- Card 10: Linda W -->
          <div class="ta-card-item">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="{{ asset('testimoni1/dorota-bi.webp') }}" alt="Linda W avatar" loading="lazy" decoding="async" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
                <span style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 13.5px; color: #0f274a;">Linda W</span>
              </div>
              <div style="width: 22px; height: 22px; border-radius: 50%; background: #00aa6c; display: grid; place-items: center; color: #ffffff; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5 0 .65.13 1.26.36 1.83l-2.92 1.95c-.28.18-.44.5-.44.83v.39c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-.39c0-.34-.16-.65-.44-.83l-2.92-1.95c.23-.57.36-1.18.36-1.83 0-2.76-2.24-5-5-5zm-3.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <div style="display: flex; gap: 3px;">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #00aa6c; display: inline-block;"></span>
              </div>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6" style="flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <p style="font-size: 13.5px; line-height: 1.55; color: #334155; margin: 0 0 12px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
              <strong style="color: #0f274a;">Outstanding Value</strong> Pick up and return journey went smoothly. Staff were punctual, efficient, professional and very...
            </p>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer" class="rev-read-more">Read more</a>
          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- Frequently Asked Questions Section -->
  <section id="faq" style="background: #f0f7fc; padding: 68px 24px 76px; border-bottom: 1px solid var(--color-divider);">
    <div style="max-width: 860px; margin: 0 auto;">
      
      <!-- Section Header -->
      <div style="text-align: center; margin-bottom: 36px;">
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(26px, 3.2vw, 36px); color: #0f274a; margin: 0 0 10px;">
          <span data-l="en">Frequently Asked Questions</span>
          <span data-l="id">Pertanyaan yang Sering Diajukan</span>
        </h2>
        <p style="font-size: 14.5px; color: #475569; margin: 0;">
          <span data-l="en">The things people ask us most before booking. Anything else, just message us.</span>
          <span data-l="id">Hal-hal yang paling sering ditanyakan sebelum memesan. Ada pertanyaan lain? Hubungi kami langsung.</span>
        </p>
      </div>

      <!-- FAQ Accordions (8 Items) -->
      <div>
        
        <!-- Item 1 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">Do I need to be able to swim?</span><span data-l="id">Apakah saya harus bisa berenang?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">No, you don't need to be able to swim. For snorkeling trips, we provide properly fitted life jackets and our guides stay in the water with you at all times holding a safety float ring. For first-time divers (Discovery Scuba Diving), your certified instructor stays right beside you the whole time controlling your buoyancy and movement.</span>
            <span data-l="id">Tidak, Anda tidak harus bisa berenang. Untuk trip snorkeling, kami menyediakan pelampung pas badan dan pemandu kami selalu mendampingi Anda di air dengan ban pelampung keselamatan. Untuk pemula yang ingin mencoba diving (Discovery Scuba Diving), instruktur bersertifikat akan mendampingi langsung dan mengatur peralatan serta pergerakan Anda.</span>
          </div>
        </details>

        <!-- Item 2 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">Do I need a diving certificate?</span><span data-l="id">Apakah saya memerlukan sertifikat menyelam?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">You only need a certificate (Open Water Diver or higher) for the certified Scuba Diving package. For Snorkeling and Discovery Scuba Diving (Try Scuba), no certification or prior experience is required at all.</span>
            <span data-l="id">Anda hanya membutuhkan sertifikat selam (Open Water Diver ke atas) untuk paket Certified Scuba Diving. Untuk Snorkeling dan Discovery Scuba Diving (Try Scuba), sama sekali tidak memerlukan sertifikasi ataupun pengalaman sebelumnya.</span>
          </div>
        </details>

        <!-- Item 3 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">Where are you based, and where does the boat leave from?</span><span data-l="id">Di mana lokasi Anda, dan dari mana perahu berangkat?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">We are based in Pejarakan / Banyuwedang on the West Bali coast road. All our boat trips depart directly from Banyuwedang Harbour, which is the closest harbor to Menjangan Island (about a 25–30 minute boat ride).</span>
            <span data-l="id">Kami berbasis di Pejarakan / Banyuwedang di jalur pesisir Bali Barat. Semua perahu kami berangkat langsung dari Pelabuhan Banyuwedang, pelabuhan terdekat menuju Pulau Menjangan (sekitar 25–30 menit perjalanan perahu).</span>
          </div>
        </details>

        <!-- Item 4 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">Is hotel pick-up included?</span><span data-l="id">Apakah antar-jemput hotel sudah termasuk?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">Yes, free return hotel pick-up is included for all accommodations in the Pemuteran and Banyuwedang areas. If you are staying further away (such as Lovina, Munduk, or South Bali), we can easily arrange private car transfers for a small additional fee.</span>
            <span data-l="id">Ya, antar-jemput hotel pulang-pergi gratis sudah termasuk untuk seluruh penginapan di area Pemuteran dan Banyuwedang. Jika Anda menginap lebih jauh (seperti Lovina, Munduk, atau Bali Selatan), kami dapat mengatur transfer mobil privat dengan biaya tambahan terjangkau.</span>
          </div>
        </details>

        <!-- Item 5 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">Is Menjangan Island suitable for families with children?</span><span data-l="id">Apakah Pulau Menjangan cocok untuk keluarga dengan anak-anak?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">Absolutely. The waters around Menjangan Island are calm with gentle currents and exceptionally clear visibility, making it one of the best and safest snorkeling spots in Bali for kids and families. Children also love meeting the wild deer on the island's white sandy beaches!</span>
            <span data-l="id">Sangat cocok. Perairan di sekitar Pulau Menjangan sangat tenang dengan arus lembut dan visibilitas yang sangat jernih, menjadikannya salah satu spot snorkeling teraman dan terbaik di Bali untuk anak-anak dan keluarga. Anak-anak juga sangat senang bertemu rusa liar di pantai pasir putih pulau!</span>
          </div>
        </details>

        <!-- Item 6 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">When is the best time to visit?</span><span data-l="id">Kapan waktu terbaik untuk berkunjung?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">Menjangan Island can be visited year-round thanks to its sheltered location. The dry season from April to November generally offers the calmest seas and best underwater visibility (often 20–30+ metres), but good trips run throughout the entire year. Shared boats depart daily at 9:00 AM.</span>
            <span data-l="id">Pulau Menjangan dapat dikunjungi sepanjang tahun karena lokasinya yang terlindung. Musim kemarau dari April hingga November umumnya menawarkan laut paling tenang dan visibilitas bawah laut terbaik (hingga 20–30+ meter), namun trip tetap berjalan lancar sepanjang tahun. Perahu bersama berangkat setiap hari pukul 09.00 WITA.</span>
          </div>
        </details>

        <!-- Item 7 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">Are your guides experienced?</span><span data-l="id">Apakah pemandu Anda berpengalaman?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">Yes. All our guides and divemasters are local professionals who grew up along this coast with 10+ years of experience on Menjangan's reefs. They are officially certified, trained in first aid and safety, and know every reef wall and sea life habit around the island.</span>
            <span data-l="id">Ya. Seluruh pemandu dan divemaster kami adalah tenaga profesional lokal yang tumbuh besar di pesisir ini dengan 10+ tahun pengalaman di terumbu karang Menjangan. Mereka berlisensi resmi, terlatih dalam keselamatan & P3K, serta sangat memahami setiap titik selam dan biota laut di sekitar pulau.</span>
          </div>
        </details>

        <!-- Item 8 -->
        <details class="faq-accordion-item">
          <summary class="faq-accordion-summary">
            <span><span data-l="en">How do I book, and can I have a private trip?</span><span data-l="id">Bagaimana cara memesan, dan bisakah pesan trip privat?</span></span>
            <span class="faq-accordion-icon">+</span>
          </summary>
          <div class="faq-accordion-body">
            <span data-l="en">Booking is simple—just send us a message via WhatsApp with your preferred date, number of people, and package. We confirm your booking quickly without hidden fees. Both daily shared boats (9:00 AM) and flexible private boat charters (departing anytime from 7:00 AM to 3:00 PM) are available.</span>
            <span data-l="id">Pemesanan sangat mudah—cukup kirim pesan melalui WhatsApp berisi tanggal, jumlah peserta, dan pilihan paket. Kami akan mengonfirmasi dengan cepat tanpa biaya tersembunyi. Tersedia opsi perahu bersama (berangkat 09.00 WITA) maupun perahu privat fleksibel (berangkat kapan saja antara 07.00–15.00 WITA).</span>
          </div>
        </details>

      </div>

    </div>
  </section>

  <!-- Ready to see it for yourself? Section -->
  <section id="final-cta" style="position: relative; overflow: hidden; min-height: 480px; display: flex; align-items: center;">
    <img src="{{ asset('new/menjanganislandtrip.webp') }}" alt="Menjangan Island coral and scuba diver" loading="lazy" decoding="async" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;">
    <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(10, 25, 48, 0.2) 0%, rgba(10, 25, 48, 0.7) 45%, rgba(10, 25, 48, 0.92) 100%);"></div>
    <div style="position: relative; z-index: 2; max-width: 1160px; width: 100%; margin: 0 auto; padding: 80px 24px; display: flex; justify-content: flex-end;">
      <div style="max-width: 520px; color: #ffffff;">
        <h2 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: clamp(30px, 3.8vw, 46px); line-height: 1.15; color: #ffffff; margin: 0 0 16px;">
          <span data-l="en">Ready to see it for yourself?</span>
          <span data-l="id">Siap Menyaksikan Keindahannya Sendiri?</span>
        </h2>
        <p style="font-size: 15px; line-height: 1.6; color: rgba(255, 255, 255, 0.9); margin: 0 0 28px;">
          <span data-l="en">Tell us your dates and we will do the rest. Boat, gear, park permit, guide and lunch are all arranged before you arrive.</span>
          <span data-l="id">Kirimkan tanggal Anda dan kami akan siapkan sisanya. Perahu, alat, tiket taman, pemandu, dan makan siang sudah siap sebelum Anda tiba.</span>
        </p>
        <div>
          <a id="btn-final-cta-wa" href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island." target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 10px; background: #25d366; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-family: 'Montserrat', system-ui, sans-serif; font-weight: 700; font-size: 15px; text-decoration: none; box-shadow: 0 4px 18px rgba(37, 211, 102, 0.35); transition: transform 0.15s, background 0.15s;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"/></svg>
            <span data-l="en">Book via WhatsApp</span>
            <span data-l="id">Booking via WhatsApp</span>
          </a>
        </div>
        <div style="margin-top: 20px; font-size: 13.5px; color: rgba(255, 255, 255, 0.8);">
          <span data-l="en">Free pickup along the coast · Small groups · No booking fee</span>
          <span data-l="id">Antar jemput gratis di sepanjang pesisir · Grup kecil · Tanpa biaya pemesanan</span>
        </div>
      </div>
    </div>
  </section>

  </main>

  <!-- Modern Dark Navy Footer -->
  <footer style="background: #103860; color: #ffffff; padding: 68px 24px 36px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
    <div style="max-width: 1160px; margin: 0 auto;">
      
      <!-- Top Grid: Info & Google Maps -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 48px; align-items: start; margin-bottom: 56px;">
        
        <!-- Left: Logo & Details -->
        <div>
          <a href="#top" style="display: inline-block; text-decoration: none; margin-bottom: 18px;">
            <img src="{{ asset('new/New-Logo-Menjangan-Snorkeling-Trip-Diving-putih.webp') }}" alt="Menjangan Snorkeling Trip & Diving" style="height: 68px; width: auto; display: block;">
          </a>
          
          <h3 style="font-family: 'Montserrat', system-ui, sans-serif; font-weight: 800; font-size: 14.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #ffffff; margin: 0 0 12px;">
            MENJANGAN SNORKELING TRIP &amp; DIVING
          </h3>
          
          <p style="font-size: 13.5px; line-height: 1.6; color: #cbd5e1; margin: 0 0 24px; max-width: 480px;">
            <span data-l="en">A licensed local operator on the north-west coast of Bali, running snorkeling and scuba diving trips at Menjangan Island.</span>
            <span data-l="id">Operator lokal berlisensi resmi di pesisir barat laut Bali, melayani trip snorkeling dan scuba diving di Pulau Menjangan.</span>
          </p>

          <!-- Contact items -->
          <div style="display: flex; flex-direction: column; gap: 12px; font-size: 13.5px; color: #cbd5e1;">
            
            <div style="display: flex; align-items: flex-start; gap: 10px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
              <span>Jl. Banyuwedang, Banjar Dinas Batu Ampar, Pejarakan, Gerokgak, Buleleng, Bali 81155</span>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="https://wa.me/6281238578042" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1; text-decoration: none;">+62 812-3857-8042</a>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <a href="https://www.instagram.com/menjanganislandtrip/" target="_blank" rel="noopener noreferrer" style="color: #cbd5e1; text-decoration: none;">@menjanganislandtrip</a>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 10px;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>
                <span data-l="en">Departures from Banyuwedang Harbour · shared boat 9:00 daily · private trips 7:00–15:00</span>
                <span data-l="id">Keberangkatan dari Pelabuhan Banyuwedang · perahu bersama 09.00 setiap hari · trip privat 07.00–15.00</span>
              </span>
            </div>

          </div>
        </div>

        <!-- Right: Google Maps Embed Card -->
        <div style="background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 6px 24px rgba(0, 0, 0, 0.28); height: 290px; position: relative;">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.722668351543!2d114.5701623!3d-8.138403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd167098485295f%3A0xcc7667d0a2732e88!2sMenjangan%20Snorkeling%20Trip%20%26%20Diving!5e0!3m2!1sen!2sid!4v1700000000000" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            title="Menjangan Snorkeling Trip & Diving Location Map">
          </iframe>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div style="border-top: 1px solid rgba(255, 255, 255, 0.12); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; font-size: 12.5px; color: #94a3b8;">
        <div>
          &copy; 2026 Menjangan Snorkeling Trip &amp; Diving. All rights reserved.
        </div>
        <div>
          <span data-l="en">Licensed operator · Insured · Max 10 guests per boat</span>
          <span data-l="id">Operator berlisensi · Berasuransi · Maks 10 tamu per perahu</span>
        </div>
      </div>

    </div>
  </footer>

  <a id="whatsapp-button" href="https://wa.me/6281238578042?text=(uc)%20Hello%2C%20I%20would%20like%20to%20book%20a%20trip%20to%20Menjangan%20Island." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style="position: fixed; right: 20px; bottom: 20px; z-index: 60; width: 60px; height: 60px; border-radius: 50%; background: #70CE74; display: grid; place-items: center; box-shadow: 0 6px 20px rgba(15, 26, 48, 0.3); text-decoration: none">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width: 40px; height: 40px; flex: none; fill: var(--color-bg)"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.92 6.45 17.5 2 12.04 2zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.17 8.21zm4.79-5.85c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.18-.3.19-.57.06-.26-.13-.99-.37-1.88-1.16-.7-.62-1.17-1.39-1.3-1.65-.13-.26-.02-.4.11-.53.13-.13.26-.3.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.03-.46-.06-.13-.59-1.41-.8-1.93-.21-.5-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.16s.93 2.51 1.06 2.69c.13.17 1.83 2.92 4.44 3.99.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.18-.5-.31z"></path></svg>
  </a>
</div>

<script nonce="{{ $cspNonce }}">
/* Load non-critical third-party code only after the page is interactive. */
function whenIdle(callback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 2500 });
  } else {
    window.setTimeout(callback, 1);
  }
}

/* -- Analytics -- */
(function() {
  'use strict';

  var page = window.location.pathname;
  var params = new URLSearchParams(window.location.search);
  var landingKey = 'landing_source';
  var referralKey = 'referral_source';
  var milestones = [25, 50, 75, 90];

  function storageGet(key) {
    try { return sessionStorage.getItem(key); } catch (error) { return null; }
  }

  function storageSet(key, value) {
    try { sessionStorage.setItem(key, value); } catch (error) {}
  }

  function eventId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return prefix + '-' + window.crypto.randomUUID();
    }
    return prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 11);
  }

  function cookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  if (!storageGet(landingKey)) storageSet(landingKey, page);

  if (!storageGet(referralKey)) {
    var referral = params.get('ref') || 'direct';
    if (document.referrer) {
      try {
        if (new URL(document.referrer).hostname !== window.location.hostname) referral = document.referrer;
      } catch (error) {}
    }
    storageSet(referralKey, referral);
  }

  function track(type, data, useBeacon) {
    var payload = JSON.stringify({
      event_type: type,
      event_data: Object.assign({
        landing_source: storageGet(landingKey) || page,
        page: page,
        timestamp: new Date().toISOString()
      }, data || {}),
      referral_source: storageGet(referralKey) || 'direct',
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term')
    });

    if (useBeacon && navigator.sendBeacon) {
      return navigator.sendBeacon('/analytics/track', new Blob([payload], { type: 'application/json' }));
    }

    fetch('/analytics/track', {
      method: 'POST',
      credentials: 'same-origin',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: payload
    }).catch(function() {});
    return true;
  }

  function trackVisit() {
    var key = 'analytics_visit_tracked:' + (storageGet(landingKey) || page);
    if (storageGet(key)) return;

    var id = eventId('page-view');
    if (track('visit', {
      event_id: id,
      is_initial: true,
      _fbp: cookie('_fbp'),
      _fbc: cookie('_fbc')
    }, true)) storageSet(key, '1');
  }

  function trackScroll() {
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    var depth = Math.round((window.scrollY / maxScroll) * 100);

    milestones.forEach(function(milestone) {
      var key = 'analytics_scroll:' + page + ':' + milestone;
      if (depth >= milestone && !storageGet(key)) {
        storageSet(key, '1');
        track('scroll', { depth: milestone });
      }
    });
  }

  function trackDwell() {
    var activeMs = 0;
    var initialSent = false;
    var sincePing = 0;

    window.setInterval(function() {
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
  }

  function trackSections() {
    if (!('IntersectionObserver' in window)) return;
    var timers = new Map();
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var section = entry.target;
        var key = 'section_seen_v2_' + page + ':' + section.id;

        if (!entry.isIntersecting) {
          if (timers.has(section.id)) window.clearTimeout(timers.get(section.id));
          timers.delete(section.id);
          return;
        }

        if (storageGet(key) || timers.has(section.id)) return;
        timers.set(section.id, window.setTimeout(function() {
          timers.delete(section.id);
          if (storageGet(key)) return;
          storageSet(key, '1');
          track('section_view', { section: section.id });
          observer.unobserve(section);
        }, 500));
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('section[id]').forEach(function(section) { observer.observe(section); });
  }

  function whatsappDetails(link) {
    var href = link.href;
    var decoded = decodeURIComponent(href.replace(/\+/g, ' ')).toLowerCase();
    var section = link.closest('section[id]');
    var location = link.getAttribute('aria-label') === 'WhatsApp'
      ? 'floating_whatsapp'
      : (section ? section.id : (link.closest('header') ? 'header' : 'footer'));
    var packageName = null;

    if (decoded.indexOf('try scuba') !== -1) packageName = 'Try Scuba Diving';
    else if (decoded.indexOf('snorkeling') !== -1) packageName = 'Snorkeling';
    else if (decoded.indexOf('scuba diving') !== -1) packageName = 'Scuba Diving';

    return { href: href, location: location, packageName: packageName };
  }

  document.addEventListener('click', function(event) {
    var link = event.target.closest('a');
    if (!link) return;

    var text = (link.textContent || link.getAttribute('aria-label') || 'CTA').replace(/\s+/g, ' ').trim().slice(0, 255);
    if (link.href.indexOf('wa.me/') !== -1) {
      var details = whatsappDetails(link);
      var conversionId = eventId('wa');
      var conversionType = details.packageName ? 'wa_registration' : 'wa_inquiry';
      var common = {
        location: details.location,
        text: text,
        destination: details.href,
        package: details.packageName,
        _fbp: cookie('_fbp'),
        _fbc: cookie('_fbc')
      };

      track('cta_click', Object.assign({ event_id: eventId('cta') }, common), true);
      track('conversion', Object.assign({ event_id: conversionId, type: conversionType, meta_event: 'Search' }, common), true);
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Search', { content_category: conversionType, content_name: details.packageName || 'WhatsApp inquiry' }, { eventID: conversionId });
      }
      return;
    }

    if (link.classList.contains('btn')) {
      track('cta_click', {
        location: (link.closest('section[id]') || {}).id || 'navigation',
        text: text,
        destination: link.href
      }, true);
    }
  });

  window.addEventListener('load', function() {
    whenIdle(trackVisit);
    trackScroll();
    trackDwell();
    trackSections();
  }, { once: true });

  var scrollTicking = false;
  window.addEventListener('scroll', function() {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(function() {
      trackScroll();
      scrollTicking = false;
    });
  }, { passive: true });
})();
</script>
</body>
</html>
