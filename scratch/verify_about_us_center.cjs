const { spawn } = require('child_process');
const http = require('http');

async function verifyAboutUs() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=375,812',
        '--no-sandbox',
        'http://127.0.0.1:8000/c2-lp'
    ]);

    await new Promise(r => setTimeout(r, 2500));

    try {
        const listRes = await new Promise(resolve => {
            http.get('http://127.0.0.1:9222/json', res => {
                let d = '';
                res.on('data', c => d += c);
                res.on('end', () => resolve(JSON.parse(d)));
            });
        });

        const page = listRes.find(p => p.url.includes('c2-lp'));
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
        await new Promise(r => setTimeout(r, 400));

        const evalExpression = `(function() {
            var section = document.querySelector('#about-us-why');
            var ctaWrapper = section.querySelector('.about-us-cta-wrapper');
            var cta = ctaWrapper ? ctaWrapper.querySelector('.cta') : null;
            var micro = ctaWrapper ? ctaWrapper.querySelector('.micro') : null;
            
            var secRect = section.getBoundingClientRect();
            var wrapRect = ctaWrapper ? ctaWrapper.getBoundingClientRect() : null;
            var ctaRect = cta ? cta.getBoundingClientRect() : null;
            var microRect = micro ? micro.getBoundingClientRect() : null;
            
            var ctaCenterX = ctaRect ? ctaRect.left + ctaRect.width / 2 : 0;
            var wrapCenterX = wrapRect ? wrapRect.left + wrapRect.width / 2 : 0;
            var windowCenterX = window.innerWidth / 2;
            
            return {
                windowWidth: window.innerWidth,
                windowCenterX: windowCenterX,
                ctaRect: ctaRect ? { left: Math.round(ctaRect.left), width: Math.round(ctaRect.width), centerX: Math.round(ctaCenterX) } : null,
                wrapRect: wrapRect ? { left: Math.round(wrapRect.left), width: Math.round(wrapRect.width), centerX: Math.round(wrapCenterX) } : null,
                microRect: microRect ? { left: Math.round(microRect.left), width: Math.round(microRect.width) } : null,
                isCtaCenteredInWindow: Math.abs(ctaCenterX - windowCenterX) < 4,
                isCtaCenteredInWrapper: Math.abs(ctaCenterX - wrapCenterX) < 4
            };
        })()`;

        ws.send(JSON.stringify({
            id: 1,
            method: 'Runtime.evaluate',
            params: { expression: evalExpression, returnByValue: true }
        }));

        const result = await new Promise(resolve => {
            ws.onmessage = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id === 1) resolve(data.result.result.value);
            };
        });

        console.log('=== ABOUT US CTA CENTERING RESULT (375px mobile) ===');
        console.log(JSON.stringify(result, null, 2));
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

verifyAboutUs();
