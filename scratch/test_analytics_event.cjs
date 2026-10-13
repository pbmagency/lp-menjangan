const https = require('https');

function request(url, options = {}, postData = null) {
    return new Promise((resolve, reject) => {
        const u = new URL(url);
        const reqOptions = {
            hostname: u.hostname,
            port: u.port || 443,
            path: u.pathname + u.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        const req = https.request(reqOptions, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: data
                });
            });
        });

        req.on('error', reject);
        if (postData) {
            req.write(postData);
        }
        req.end();
    });
}

async function testAnalytics() {
    console.log('1. Fetching CSRF token from https://menjangansnorkelingtripanddiving.com/analytics/csrf...');
    const csrfRes = await request('https://menjangansnorkelingtripanddiving.com/analytics/csrf');
    console.log('CSRF status:', csrfRes.statusCode);
    const csrfJson = JSON.parse(csrfRes.body);
    const token = csrfJson.token;
    console.log('CSRF Token:', token);

    const cookies = csrfRes.headers['set-cookie'] ? csrfRes.headers['set-cookie'].map(c => c.split(';')[0]).join('; ') : '';

    console.log('2. Testing "visit" event for /wp/c2-lp/...');
    const visitPayload = JSON.stringify({
        event_type: 'visit',
        event_data: {
            page: '/wp/c2-lp/',
            landing_source: 'wordpress:/wp/c2-lp/',
            ab_variant: 'A',
            event_id: 'v-' + Date.now(),
            timestamp: new Date().toISOString()
        },
        referral_source: 'direct'
    });

    const visitRes = await request('https://menjangansnorkelingtripanddiving.com/analytics/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(visitPayload),
            'X-CSRF-TOKEN': token,
            'Cookie': cookies
        }
    }, visitPayload);

    console.log('Visit Track status:', visitRes.statusCode, 'Body:', visitRes.body);

    console.log('3. Testing "conversion" event (WhatsApp inquiry) for /wp/c2-lp/...');
    const convPayload = JSON.stringify({
        event_type: 'conversion',
        event_data: {
            type: 'wa_inquiry',
            page: '/wp/c2-lp/',
            landing_source: 'wordpress:/wp/c2-lp/',
            ab_variant: 'A',
            location: 'btn-hero-wa-main',
            destination: 'https://wa.me/6281238578042?text=test',
            event_id: 'conv-' + Date.now(),
            timestamp: new Date().toISOString()
        },
        referral_source: 'direct'
    });

    const convRes = await request('https://menjangansnorkelingtripanddiving.com/analytics/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(convPayload),
            'X-CSRF-TOKEN': token,
            'Cookie': cookies
        }
    }, convPayload);

    console.log('Conversion Track status:', convRes.statusCode, 'Body:', convRes.body);
}

testAnalytics().catch(console.error);
