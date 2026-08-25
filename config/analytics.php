<?php

return [
    'capabilities' => [
        // This landing page converts directly in WhatsApp; it has no checkout.
        'initiate_checkout' => false,
        'lead' => true,
        'payment' => false,
        'revenue' => false,
    ],

    'primary_metric' => 'total_lead_rate',
    'minimum_winner_visits' => 30,
];
