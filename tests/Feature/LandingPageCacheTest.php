<?php

namespace Tests\Feature;

use App\Http\Middleware\CacheLandingPage;
use Illuminate\Support\Facades\Cache;
use ReflectionMethod;
use Tests\TestCase;

class LandingPageCacheTest extends TestCase
{
    public function test_cached_landing_page_is_served_with_a_coherent_csp_nonce(): void
    {
        Cache::flush();

        $this->get('/')
            ->assertOk()
            ->assertSee('<title>Menjangan Island Snorkeling & Diving Trips</title>', false);

        $manifestVersion = (new ReflectionMethod(CacheLandingPage::class, 'manifestVersion'))
            ->invoke(null);
        $cachedHtml = Cache::get('landing_page_html_v2:'.$manifestVersion);

        $this->assertIsString($cachedHtml);

        $cachedNonce = $this->extractNonce($cachedHtml);
        $this->assertNotEmpty($cachedNonce);

        $second = $this->get('/')->assertOk();

        // The cached markup is served as-is (plus the CSRF placeholder swap),
        // so the response body must still carry the nonce from the cache…
        $this->assertSame($cachedNonce, $this->extractNonce($second->getContent()));

        // …and the CSP header must use that same nonce, otherwise the browser
        // blocks every inline script on the cached page. This is the mismatch
        // that previously forced CacheLandingPage to be disabled.
        $csp = $second->headers->get('Content-Security-Policy', '');
        $this->assertStringContainsString("'nonce-{$cachedNonce}'", $csp);

        // The CSRF placeholder must never leak into the response.
        $this->assertStringNotContainsString('__LANDING_CSRF_TOKEN__', $second->getContent());
    }

    private function extractNonce(string $html): string
    {
        preg_match('/nonce="([^"]+)"/', $html, $matches);

        return $matches[1] ?? '';
    }
}