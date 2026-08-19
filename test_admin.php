<?php
require __DIR__ . "/vendor/autoload.php";
$app = require_once __DIR__ . "/bootstrap/app.php";
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Illuminate\Http\Request::create("/admin", "GET");
$user = App\Models\User::first();
if ($user) {
    $user->role = "admin";
    $user->save();
    $request->setUserResolver(function () use ($user) { return $user; });
}
$response = $kernel->handle($request);
echo "Status: " . $response->getStatusCode() . PHP_EOL;
echo "Content length: " . strlen($response->getContent()) . PHP_EOL;

