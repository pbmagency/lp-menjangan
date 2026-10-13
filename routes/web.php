<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\LabsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// ── Public landing page ───────────────────────────────────────────────────────
Route::inertia('/', 'landing')->name('home');



// ── Analytics tracking endpoint (public, uses session CSRF) ──────────────────
Route::get('/analytics/csrf', function () {
    return response()->json(['token' => csrf_token()])
        ->header('Cache-Control', 'no-store, private');
})->name('analytics.csrf');
Route::post('/analytics/track', [AnalyticsController::class, 'track'])->name('analytics.track');

// ── Authenticated routes ──────────────────────────────────────────────────────
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});


// ── Admin routes ──────────────────────────────────────────────────────────────
Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AnalyticsController::class, 'index'])->name('analytics');
    Route::get('/export', [AnalyticsController::class, 'export'])->name('analytics.export');

    Route::get('/labs', [LabsController::class, 'index'])->name('labs');
    Route::post('/labs/clear-cache', [LabsController::class, 'clearCache'])->name('labs.clear-cache');
});

require __DIR__ . '/settings.php';

Route::inertia('/c1-lp', 'c1-lp')->name('c1-lp');
Route::get('c2-lp', function (Request $request) {
    $html = view('c2-lp')->render();
    $response = response($html)->header('Vary', 'Accept-Encoding');

    if (str_contains($request->header('Accept-Encoding', ''), 'gzip')) {
        $response->setContent(gzencode($html, 6));
        $response->headers->set('Content-Encoding', 'gzip');
    }

    return $response;
})->name('c2-lp');

// Public API Feed for Centralized Ops Board
Route::get('/api/analytics/feed', [\App\Http\Controllers\Api\AnalyticsFeedController::class, 'feed'])->name('api.analytics.feed');
