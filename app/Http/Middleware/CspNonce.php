<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Vite;
use Symfony\Component\HttpFoundation\Response;

/**
 * Generates a cryptographically random nonce per request.
 *
 * The nonce is:
 *  1. Stored on the request so views can access it via $cspNonce
 *  2. Added to the CSP header so browsers allow matching inline scripts
 *
 * Usage in Blade:
 *   <script nonce="{{ $cspNonce }}">...</script>
 *
 * Usage with Vite (CSP-friendly):
 *
 *   @php
 *       $useCspNonce = true;
 *
 *   @endphp
 *
 *   @vite(['resources/css/app.css', 'resources/js/app.tsx'], nonce: $cspNonce)
 */
class CspNonce
{
    public function handle(Request $request, Closure $next): Response
    {
        // Generate a base64-encoded random nonce
        $nonce = base64_encode(random_bytes(16));

        // Make it available in all Blade views
        view()->share('cspNonce', $nonce);

        // Also store on request for middleware access
        $request->attributes->add(['csp_nonce' => $nonce]);

        /** @var Response $response */
        $response = $next($request);

        // Append nonce to existing CSP script-src directive
        // SecurityHeaders middleware must run first to set the base CSP
        $existingCsp = $response->headers->get('Content-Security-Policy', '');
        if ($existingCsp !== '' && ! str_contains($existingCsp, 'nonce-')) {
            // Add nonce to script-src (without 'unsafe-inline')
            // The SecurityHeaders middleware already sets 'self' as the base;
            // we replace just that with 'self' + nonce.
            $newCsp = preg_replace(
                "/script-src\s+'self'/",
                "script-src 'self' 'nonce-{$nonce}'",
                $existingCsp,
                1,
            );
            $response->headers->set('Content-Security-Policy', $newCsp);
        }

        return $response;
    }
}
