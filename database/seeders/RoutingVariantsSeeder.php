<?php

namespace Database\Seeders;

use App\Models\UserAnalytic;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RoutingVariantsSeeder extends Seeder
{
    public function run(): void
    {
        $variants = [
            [
                'route' => '/c1-lp',
                'visits' => 58,
                'engaged_pct' => 42,
                'direct_checkout_count' => 2,
                'whatsapp_count' => 4,
            ],
            [
                'route' => '/',
                'visits' => 45,
                'engaged_pct' => 30,
                'direct_checkout_count' => 1,
                'whatsapp_count' => 1,
            ],
        ];

        $now = Carbon::now();

        foreach ($variants as $v) {
            $route = $v['route'];
            $visits = $v['visits'];
            $directLeft = $v['direct_checkout_count'];
            $waLeft = $v['whatsapp_count'];

            for ($i = 0; $i < $visits; $i++) {
                $sessionId = Str::uuid()->toString();
                $date = $now->copy()->subDays(rand(0, 14))->subHours(rand(0, 23))->subMinutes(rand(0, 59));

                UserAnalytic::create([
                    'session_id' => $sessionId,
                    'event_type' => 'visit',
                    'event_data' => [
                        'landing_source' => $route,
                        'page' => $route,
                    ],
                    'referral_source' => (rand(0, 1) === 0 ? 'facebook' : 'direct'),
                    'utm_source' => 'meta_ads',
                    'utm_campaign' => 'menjangan_special',
                    'user_agent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)',
                    'created_at' => $date,
                ]);

                $isEngaged = ($i < ($visits * ($v['engaged_pct'] / 100)));
                if ($isEngaged) {
                    UserAnalytic::create([
                        'session_id' => $sessionId,
                        'event_type' => 'engagement',
                        'event_data' => [
                            'landing_source' => $route,
                            'page' => $route,
                            'duration' => rand(15, 90),
                        ],
                        'created_at' => $date->copy()->addSeconds(rand(10, 30)),
                    ]);

                    UserAnalytic::create([
                        'session_id' => $sessionId,
                        'event_type' => 'scroll',
                        'event_data' => [
                            'landing_source' => $route,
                            'page' => $route,
                            'depth' => rand(40, 85),
                        ],
                        'created_at' => $date->copy()->addSeconds(rand(12, 35)),
                    ]);
                }

                if ($directLeft > 0 && rand(1, 3) === 1) {
                    UserAnalytic::create([
                        'session_id' => $sessionId,
                        'event_type' => 'payment',
                        'event_data' => [
                            'landing_source' => $route,
                            'page' => $route,
                            'type' => 'checkout_redirect',
                            'amount' => 380000,
                        ],
                        'created_at' => $date->copy()->addSeconds(rand(50, 100)),
                    ]);
                    $directLeft--;
                } elseif ($waLeft > 0 && rand(1, 3) === 1) {
                    UserAnalytic::create([
                        'session_id' => $sessionId,
                        'event_type' => 'conversion',
                        'event_data' => [
                            'landing_source' => $route,
                            'page' => $route,
                            'type' => 'wa_inquiry',
                        ],
                        'created_at' => $date->copy()->addSeconds(rand(40, 80)),
                    ]);
                    $waLeft--;
                }
            }
        }
    }
}
