<?php

use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\CacheLandingPage;
use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\CspNonce;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\SecurityHeaders;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);
        $middleware->validateCsrfTokens(except: ['/analytics/track']);

        $middleware->web(append: [
            SecurityHeaders::class,
            CspNonce::class,
            // Serves anonymous "/" requests from the server-side HTML cache.
            // SecurityHeaders now derives the CSP nonce from the response body,
            // so the cached markup's original nonce stays coherent with the header.
            CacheLandingPage::class,
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        $middleware->alias([
            'admin' => AdminMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
    })->create();