<?php

namespace Tests\Feature;

use App\Http\Middleware\CspNonce;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class CspNonceTest extends TestCase
{
    public function test_it_appends_a_valid_quoted_nonce_to_an_existing_csp(): void
    {
        $request = Request::create('/');
        $middleware = new CspNonce;

        $response = $middleware->handle($request, function (): Response {
            $response = new Response('<script></script>');
            $response->headers->set(
                'Content-Security-Policy',
                "default-src 'self'; script-src 'self' https://example.com",
            );

            return $response;
        });

        $nonce = $request->attributes->get('csp_nonce');
        $csp = $response->headers->get('Content-Security-Policy', '');

        $this->assertNotEmpty($nonce);
        $this->assertStringContainsString("script-src 'self' 'nonce-{$nonce}' https://example.com", $csp);
    }
}
