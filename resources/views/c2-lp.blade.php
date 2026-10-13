<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="description" content="Explore Menjangan Island snorkeling and diving trips with licensed local guides. Small groups, equipment, park permit, lunch, and daily departures from Banyuwedang Harbour.">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#ffffff">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="canonical" href="{{ url('/c2-lp') }}">
    <link rel="icon" href="/logo-menjangan-sm.webp" type="image/webp">
    <link rel="preconnect" href="https://lh3.googleusercontent.com" crossorigin>
    <link rel="preload" href="/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" as="image" href="/c1/hero-reef-diver-800.avif" type="image/avif" imagesrcset="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w" imagesizes="100vw" fetchpriority="high">
    <title>Menjangan Island Snorkeling &amp; Diving Trips | Menjangan Snorkeling Trip &amp; Diving</title>
    @php($previousHotFile = \Illuminate\Support\Facades\Vite::hotFile())
    @php(\Illuminate\Support\Facades\Vite::useHotFile(public_path('c2-lp.hot')))
    @vite(['resources/js/c2-enhance.ts'])
    @php(\Illuminate\Support\Facades\Vite::useHotFile($previousHotFile))
</head>
<body>
    {!! file_get_contents(resource_path('generated/c2-content.html')) !!}
</body>
</html>
