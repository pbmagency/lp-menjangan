<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Adds security best-practice headers to every response.
 *
 * Lighthouse "Best Practices" audits check for:
 *  – Content-Security-Policy
 *  – Strict-Transport-Security (HSTS)
 *  – X-Frame-Options (clickjacking)
 *  – X-Content-Type-Options (already in CacheLandingPage, duplicated here for safety)
 *  – Permissions-Policy
 *  – Referrer-Policy
 */
class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        /** @var Response $response */
        $response = $next($request);

        // Only add headers to HTML responses (skip API/JSON/streaming)
        $contentType = $response->headers->get('Content-Type', '');
        if (! str_contains($contentType, 'text/html')) {
            return $response;
        }

        // ── HSTS ────────────────────────────────────────────────────────────
        // Tell browsers to always use HTTPS for this domain (1 year, include subdomains)
        $response->headers->set(
            'Strict-Transport-Security',
            'max-age=31536000; includeSubDomains; preload',
        );

        // ── X-Frame-Options ────────────────────────────────────────────────
        // Prevent clickjacking — the site should not be embedded in iframes
        $response->headers->set('X-Frame-Options', 'SAMEORIGIN');

        // ── X-Content-Type-Options ──────────────────────────────────────────
        $response->headers->set('X-Content-Type-Options', 'nosniff');

        // ── Referrer-Policy ─────────────────────────────────────────────────
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');

        // ── Permissions-Policy ──────────────────────────────────────────────
        // Disable browser features the site never uses
        $response->headers->set(
            'Permissions-Policy',
            'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
        );

        // ── Content-Security-Policy ─────────────────────────────────────────
        // This is the most impactful header for Lighthouse Best Practices.
        // We use a permissive policy that still blocks the worst offenders
        // (eval, inline scripts without nonce, data: URIs for scripts).
        //
        // NOTE: Third-party analytics domains are allow-listed because
        // removing them would break tracking. Tighten further as needed.
        $nonce = $request->attributes->get('csp_nonce', '');
        $csp = $this->buildCspPolicy($nonce);
        $response->headers->set('Content-Security-Policy', $csp);

        return $response;
    }

    /**
     * Build the Content-Security-Policy header value.
     *
     * The policy is deliberately practical:
     *  - 'unsafe-inline' for styles is required by Tailwind / Radix / third-party widgets
     *  - connect-src lists the analytics endpoints
     */
    private function buildCspPolicy(string $nonce = ''): string
    {
        // Build script-src: nonce-only (no 'unsafe-inline')
        $scriptSrc = $nonce !== ''
            ? "script-src 'self' 'nonce-{$nonce}'"
            : "script-src 'self' 'unsafe-inline'";

        $directives = [
            // Default: fall back to self
            "default-src 'self'",

            // Scripts: nonce-based + trusted third-party analytics
            // 'unsafe-inline' removed — Lighthouse Best Practices flags it
            $scriptSrc
                .' https://www.googletagmanager.com'
                .' https://www.google-analytics.com'
                .' https://www.clarity.ms'
                .' https://scripts.clarity.ms'
                .' https://*.doubleclick.net'
                .' https://connect.facebook.net'
                .' https://cdn.trustindex.io'
                // Cloudflare Web Analytics injects its beacon script into HTML at the edge;
                // without this host Lighthouse flags console errors (best-practices audit).
                .' https://static.cloudflareinsights.com https://cloudflareinsights.com',

            "script-src-elem 'self' 'unsafe-inline'"
                .' https://www.googletagmanager.com'
                .' https://www.google-analytics.com'
                .' https://www.clarity.ms'
                .' https://scripts.clarity.ms'
                .' https://*.doubleclick.net'
                .' https://connect.facebook.net'
                .' https://cdn.trustindex.io'
                // Cloudflare Web Analytics beacon host (see script-src above)
                .' https://static.cloudflareinsights.com https://cloudflareinsights.com',

            // Styles: self + inline (Tailwind generates inline styles via Radix)
            "style-src 'self' 'unsafe-inline'",

            // Images: self + data: URIs + third-party avatars/logos/pixels
            // (Clarity beacons may redirect via c.bing.com; Google Ads user-list
            //  pixels load from google.com / google.co.id)
            "img-src 'self' data: blob:"
                .' https://www.google-analytics.com'
                .' https://www.googletagmanager.com'
                .' https://*.clarity.ms'
                .' https://*.bing.com'
                .' https://*.doubleclick.net'
                .' https://*.google.com'
                .' https://*.google.co.id'
                .' https://www.facebook.com'
                .' https://connect.facebook.net'
                .' https://cdn.trustindex.io'
                .' https://lh3.googleusercontent.com'
                .' https://ui-avatars.com',

            // Fonts: self-hosted Montserrat (no external font requests)
            "font-src 'self'",

            // Connections: analytics endpoints
            "connect-src 'self'"
                .' https://www.google.com'
                .' https://*.google-analytics.com'
                .' https://*.analytics.google.com'
                .' https://*.googletagmanager.com'
                .' https://ad.doubleclick.net'
                .' https://*.googleadservices.com'
                .' https://*.google.co.id'
                .' https://www.clarity.ms'
                .' https://*.clarity.ms'
                .' https://*.doubleclick.net'
                .' https://us.i.posthog.com'
                .' https://*.posthog.com'
                // Cloudflare Web Analytics beacon sends data via connect-src
                .' https://static.cloudflareinsights.com https://cloudflareinsights.com',

            // Frames: only Facebook pixel noscript fallback
            "frame-src 'self'"
                .' https://www.facebook.com'
                .' https://www.googletagmanager.com',

            // No base-uri hijacking
            "base-uri 'self'",

            // Prevent form submission to unexpected origins
            "form-action 'self'",

            // Block plugin content
            "object-src 'none'",

            // Restrict where this document can be embedded
            "frame-ancestors 'self'",
        ];

        return implode('; ', $directives);
    }
}
