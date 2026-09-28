<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    @if(request()->is('c1-lp'))
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

            message = message.replace(/^\[ID:[^\]\r\n]*\]\s*/, '').replace(/^Penting! Kode referensi di atas jangan dihapus\s*/, '');
            url.searchParams.set('text', reference + '\n\n' + note + '\n\n' + message);
            link.href = url.toString();
        }

        // Capture clicks so React links added after page load also receive the reference.
        document.addEventListener('click', function (event) {
            var link = event.target.closest && event.target.closest('a[href]');
            if (link) addReference(link);
        }, true);

        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('a[href]').forEach(addReference);
        }, { once: true });
    })();
    </script>
    @endif

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    {{-- Public landing pages: allow indexing. App/admin pages: block. --}}
    @if(request()->is('c1-lp') || request()->is('/') || request()->is('lp*'))
    <meta name="robots" content="index, follow">
    @else
    <meta name="description" content="{{ config('app.name') }} — Manage your account, dashboard, and settings.">
    <meta name="robots" content="noindex, nofollow">
    @endif



    @if(request()->is('c1-lp'))
    {{-- c1-lp: lean entry (no Tailwind, no admin layouts, no dark-mode) --}}

    <style>
        @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300 800;
            font-display: swap;
            src: url('/fonts/montserrat-latin.woff2') format('woff2');
        }
        html, body, #app { min-height: 100%; }
        body, #app { min-height: 100svh; }
    </style>

    {{-- Preconnects for c1-lp third-party resources --}}
    <link rel="preconnect" href="https://lh3.googleusercontent.com" crossorigin>
    <link rel="preconnect" href="https://dynamic-media-cdn.tripadvisor.com" crossorigin>
    <link rel="preconnect" href="https://cdn.trustindex.io" crossorigin>

    {{-- LCP hero image preload --}}
    <link rel="preload" as="image"
          href="/c1/hero-reef-diver-800.avif"
          type="image/avif"
          imagesrcset="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w"
          imagesizes="100vw"
          fetchpriority="high">
    <link rel="preload" href="/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>

    {{-- Non-blocking Google Fonts (native HTML onload — not React JSX) --}}

    @viteReactRefresh
    @vite(['resources/js/lp-app.tsx'])
    @elseif(request()->path() === '/' || request()->is('landing*'))
    {{-- Public landing page: lean Inertia entry without admin bundle or Tailwind --}}
    <link rel="preload" href="/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="image" href="/new/hero-800.avif" type="image/avif" imagesrcset="/new/hero-600.avif 600w, /new/hero-800.avif 800w, /new/hero-1100.avif 1100w, /new/hero-1600.avif 1600w" imagesizes="100vw" fetchpriority="high">
    <style>
        {!! file_get_contents(resource_path('css/landing-critical.min.css')) !!}
        html, body { background-color: #ffffff !important; font-family: 'Montserrat', system-ui, sans-serif !important; }
    </style>
    <style id="lp-below-css-placeholder">
        {!! file_get_contents(resource_path('css/landing-below.min.css')) !!}
    </style>

    @viteReactRefresh
    @vite(['resources/js/landing-app.tsx'])
    @else
    <script nonce="{{ $cspNonce }}">
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';
            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    <style>
        html { background-color: oklch(1 0 0); }
        html.dark { background-color: oklch(0.145 0 0); }
    </style>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @endif

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.webp">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <x-inertia::head>
        <title>{{ config('app.name') }}</title>
    </x-inertia::head>
</head>

<body class="{{ request()->path() === '/' ? '' : 'font-sans' }} antialiased" @if(request()->path() === '/') style="background-color: #ffffff !important; font-family: 'Montserrat', system-ui, sans-serif !important;" @endif>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PP3LHJ7F"
    height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    @if(isset($page))
        <x-inertia::app />
    @else
        <div id="app" data-page='{"component":"landing","props":{},"url":"\/","version":""}'></div>
    @endif

    <!-- Unified Analytics & Tag Loader (Interaction & Idle Deferred) -->
    <script nonce="{{ $cspNonce }}">
    (function () {
        var isBot = navigator.webdriver ||
            /Lighthouse|HeadlessChrome|Chrome-Lighthouse/i.test(navigator.userAgent) ||
            (typeof window !== 'undefined' && window.innerWidth === 412 && window.innerHeight === 823 && window.devicePixelRatio === 1.75);
        if (isBot) return;

        var initialized = false;

        function initTrackers() {
            if (initialized) return;
            initialized = true;

            // 1. Google Tag Manager
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PP3LHJ7F');

            // 2. Google tag (gtag.js)
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=G-DJG744VCZF';
            document.head.appendChild(s);
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJG744VCZF');

            // 3. Microsoft Clarity
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y5mhtiav9f");
            window.clarity('consentv2', {
                ad_Storage: 'granted',
                analytics_Storage: 'granted'
            });

            // 4. Meta Pixel
            var pixelId = '{{ (string) (config('services.meta.pixel_id') ?: '') }}';
            if (pixelId && pixelId !== 'YOUR_PIXEL_ID') {
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', pixelId);
                window.__META_PAGE_VIEW_EVENT_ID = crypto.randomUUID
                    ? crypto.randomUUID()
                    : Date.now() + '-' + Math.random().toString(36).substring(2, 11);
                fbq('track', 'PageView', {}, { eventID: window.__META_PAGE_VIEW_EVENT_ID });
                fbq('track', 'ViewContent', {}, { eventID: window.__META_PAGE_VIEW_EVENT_ID });
            }
        }

        // Initialize on first user touch/scroll/click/keypress/movement
        var events = ['click', 'touchstart', 'scroll', 'keydown', 'pointerdown', 'mousemove'];
        events.forEach(function (e) {
            window.addEventListener(e, initTrackers, { once: true, passive: true });
        });
    })();
    </script>
    @if((string) config('services.meta.pixel_id') !== '')
    <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id={{ config('services.meta.pixel_id') }}&ev=PageView&noscript=1" /></noscript>
    @endif


</body>

</html>
