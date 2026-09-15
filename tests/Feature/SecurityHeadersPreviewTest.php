<?php

namespace Tests\Feature;

use App\Http\Middleware\SecurityHeaders;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class SecurityHeadersPreviewTest extends TestCase
{
    public function test_gtm_preview_mode_resources_are_allowed_without_losing_the_script_nonce(): void
    {
        $request = Request::create('/');
        $response = (new SecurityHeaders)->handle($request, function (): Response {
            return new Response('<script nonce="test-nonce"></script>', 200, [
                'Content-Type' => 'text/html; charset=UTF-8',
            ]);
        });

        $directives = [];
        foreach (explode('; ', $response->headers->get('Content-Security-Policy', '')) as $directive) {
            [$name, $sources] = explode(' ', $directive, 2);
            $directives[$name] = explode(' ', $sources);
        }

        $this->assertContains("'nonce-test-nonce'", $directives['script-src-elem']);
        $this->assertContains('https://tagmanager.google.com', $directives['script-src-elem']);
        $this->assertContains('https://tagmanager.google.com', $directives['style-src']);
        $this->assertContains('https://www.googletagmanager.com', $directives['style-src']);
        $this->assertContains('https://ssl.gstatic.com', $directives['img-src']);
        $this->assertContains('https://www.gstatic.com', $directives['img-src']);
        $this->assertContains('data:', $directives['font-src']);
    }
}
