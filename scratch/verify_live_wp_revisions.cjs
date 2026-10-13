const { spawn } = require('child_process');
const http = require('http');
const https = require('https');

async function testLiveHtml() {
    return new Promise((resolve) => {
        https.get('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log('=== LIVE HTML CHECKS ===');
                console.log('Status Code:', res.statusCode);
                console.log('Has 1.4.6 CSS:', data.includes('landing.css?ver=1.4.6'));
                console.log('Has service-badge-pill:', data.includes('service-badge-pill'));
                console.log('Has about-us-cta-wrapper:', data.includes('about-us-cta-wrapper'));
                console.log('Has hero-cta-wrapper:', data.includes('hero-cta-wrapper'));
                resolve();
            });
        });
    });
}

async function verifyLiveElements() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=375,812',
        '--no-sandbox',
        'https://menjangansnorkelingtripanddiving.com/wp/c2-lp/'
    ]);

    await new Promise(r => setTimeout(r, 3500));

    try {
        const listRes = await new Promise(resolve => {
            http.get('http://127.0.0.1:9222/json', res => {
                let d = '';
                res.on('data', c => d += c);
                res.on('end', () => resolve(JSON.parse(d)));
            });
        });

        const page = listRes.find(p => p.url.includes('c2-lp'));
        if (!page) throw new Error('Page not found in Chrome list');

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise(r => ws.onopen = r);

        ws.send(JSON.stringify({
            id: 10,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
                width: 375,
                height: 812,
                deviceScaleFactor: 2,
                mobile: true
            }
        }));
        await new Promise(r => setTimeout(r, 500));

        async function evalInPage(expr) {
            return new Promise(resolve => {
                const id = Math.floor(Math.random() * 100000);
                const handler = (msg) => {
                    const data = JSON.parse(msg.data);
                    if (data.id === id) {
                        ws.removeEventListener('message', handler);
                        resolve(data.result ? data.result.result.value : null);
                    }
                };
                ws.addEventListener('message', handler);
                ws.send(JSON.stringify({
                    id: id,
                    method: 'Runtime.evaluate',
                    params: { expression: expr, returnByValue: true }
                }));
            });
        }

        const checks = await evalInPage(`(function() {
            // 1. Hero Spacing
            var heroDesc = document.querySelector('#top .hero-desc');
            var heroCta = document.querySelector('#top .hero-cta-btn');
            var heroBadge = document.querySelector('#top .hero-badge');
            
            var descRect = heroDesc ? heroDesc.getBoundingClientRect() : null;
            var ctaRect = heroCta ? heroCta.getBoundingClientRect() : null;
            var badgeRect = heroBadge ? heroBadge.getBoundingClientRect() : null;
            
            var space1 = (descRect && ctaRect) ? Math.round(ctaRect.top - descRect.bottom) : null;
            var space2 = (ctaRect && badgeRect) ? Math.round(badgeRect.top - ctaRect.bottom) : null;
            
            // 2. Badges single line
            var badges = Array.from(document.querySelectorAll('.service-badge-pill')).map(function(b) {
                var r = b.getBoundingClientRect();
                return {
                    text: b.textContent.replace(/\\s+/g, ' ').trim().substring(0, 30),
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    isSingleLine: r.height <= 26
                };
            });
            
            // 3. CTA Buttons single line
            var ctas = Array.from(document.querySelectorAll('.cta')).map(function(c) {
                var r = c.getBoundingClientRect();
                return {
                    text: c.textContent.replace(/\\s+/g, ' ').trim().substring(0, 30),
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                    isSingleLine: r.height <= 48
                };
            });
            
            // 4. About Us CTA centered
            var aboutCta = document.querySelector('.about-us-cta-wrapper .cta');
            var aboutCtaRect = aboutCta ? aboutCta.getBoundingClientRect() : null;
            var aboutCtaCenter = aboutCtaRect ? Math.round(aboutCtaRect.left + aboutCtaRect.width / 2) : null;
            var winCenter = Math.round(window.innerWidth / 2);
            
            return {
                heroSpacing: {
                    space_desc_to_cta: space1,
                    space_cta_to_badge: space2,
                    isEqual: space1 === space2
                },
                badges: badges,
                allBadgesSingleLine: badges.every(b => b.isSingleLine),
                ctasSampleCount: ctas.length,
                allCtasSingleLine: ctas.every(c => c.isSingleLine),
                aboutUs: {
                    ctaCenterX: aboutCtaCenter,
                    windowCenterX: winCenter,
                    isCentered: aboutCtaCenter !== null && Math.abs(aboutCtaCenter - winCenter) <= 2
                }
            };
        })()`);

        console.log('=== LIVE WORDPRESS MEASUREMENTS (375px mobile) ===');
        console.log(JSON.stringify(checks, null, 2));
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

async function run() {
    await testLiveHtml();
    await verifyLiveElements();
}

run();
