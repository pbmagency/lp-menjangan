<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <!-- Google Tag Manager -->
    <script nonce="{{ $cspNonce }}">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N2KG2WKZ');</script>
    <!-- End Google Tag Manager -->

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJG744VCZF"></script>
    <script nonce="{{ $cspNonce }}">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DJG744VCZF');
    </script>
    <!-- End Google tag (gtag.js) -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Preconnect to third-party domains for faster loading -->
    <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
    <link rel="preconnect" href="https://www.google-analytics.com" crossorigin>
    <link rel="preconnect" href="https://connect.facebook.net" crossorigin>
    <link rel="preconnect" href="https://www.clarity.ms" crossorigin>


    @if(request()->path() !== '/')
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
    @else
    <style>
        html, body { background-color: oklch(0.97 0.015 85) !important; }
    </style>
    @endif

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.webp">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="preload" href="/logo/Primary%20Logo.webp" as="image" fetchpriority="high">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    <x-inertia::head>
        <title>{{ config('app.name') }}</title>
    </x-inertia::head>
</head>

<body class="font-sans antialiased" @if(request()->path() === '/') style="background-color: oklch(0.97 0.015 85) !important;" @endif>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2KG2WKZ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <x-inertia::app />

    <!-- Microsoft Clarity -->
    <script type="text/javascript" nonce="{{ $cspNonce }}">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "y5mhtiav9f");
    </script>

    <!-- Meta Pixel -->
    <script nonce="{{ $cspNonce }}">
        window.addEventListener('load', function() {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '{{ config('services.meta.pixel_id', 'YOUR_PIXEL_ID') }}');
            window.__META_PAGE_VIEW_EVENT_ID = crypto.randomUUID
                ? crypto.randomUUID()
                : Date.now() + '-' + Math.random().toString(36).substring(2, 11);
            fbq('track', 'PageView', {}, { eventID: window.__META_PAGE_VIEW_EVENT_ID });
            fbq('track', 'ViewContent', {}, { eventID: window.__META_PAGE_VIEW_EVENT_ID });
        });
    </script>
    <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id={{ config('services.meta.pixel_id', 'YOUR_PIXEL_ID') }}&ev=PageView&noscript=1" /></noscript>


</body>

</html>
