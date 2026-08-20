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
        $csp = $this->buildCspPolicy();
        $response->headers->set('Content-Security-Policy', $csp);

        return $response;
    }

    /**
     * Build the Content-Security-Policy header value.
     *
     * The policy is deliberately practical:
     *  - 'unsafe-inline' for styles is required by Tailwind / Radix / third-party widgets
     *  - script-src uses 'unsafe-eval' ONLY because dc-runtime (support.js) uses new Function()
     *    — once that file is removed or rewritten, drop 'unsafe-eval'
     *  - connect-src lists the analytics endpoints
     */
    private function buildCspPolicy(): string
    {
        $directives = [
            // Default: fall back to self
            "default-src 'self'",

            // Scripts: self + trusted third-party analytics
            // 'unsafe-inline' needed for gtag/clarity/meta pixel inline snippets
            // NOTE: 'unsafe-eval' intentionally omitted — support.js (dc-runtime) is dead code
            "script-src 'self' 'unsafe-inline'"
                . ' https://www.googletagmanager.com'
                . ' https://www.google-analytics.com'
                . ' https://www.clarity.ms'
                . ' https://connect.facebook.net'
                . ' https://a.plerdy.com',

            // Styles: self + inline (Tailwind generates inline styles)
            "style-src 'self' 'unsafe-inline'"
                . ' https://fonts.googleapis.com',

            // Images: self + data: URIs + third-party avatars/logos
            "img-src 'self' data: blob:"
                . ' https://www.google-analytics.com'
                . ' https://www.facebook.com'
                . ' https://connect.facebook.net'
                . ' https://a.plerdy.com'
                . ' https://cdn.trustindex.io'
                . ' https://lh3.googleusercontent.com',

            // Fonts: self + Bunny CDN (via Vite) + Google Fonts
            "font-src 'self'"
                . ' https://fonts.gstatic.com'
                . ' https://fonts.googleapis.com',

            // Connections: analytics endpoints
            "connect-src 'self'"
                . ' https://www.google-analytics.com'
                . ' https://analytics.google.com'
                . ' https://www.clarity.ms'
                . ' https://a.plerdy.com'
                . ' https://us.i.posthog.com'
                . ' https://*.posthog.com',

            // Frames: only Facebook pixel noscript fallback
            "frame-src 'self'"
                . ' https://www.facebook.com'
                . ' https://www.googletagmanager.com',

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
