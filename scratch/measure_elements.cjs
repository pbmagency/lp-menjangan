const { spawn } = require('child_process');
const http = require('http');

async function measure() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=360,640',
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

        const evalExpression = `(function() {
            var desc = document.querySelector('.hero-desc');
            var cta = document.querySelector('.hero-cta-btn');
            var badge = document.querySelector('.hero-badge');
            
            var dRect = desc.getBoundingClientRect();
            var cRect = cta.getBoundingClientRect();
            var bRect = badge.getBoundingClientRect();
            
            var space_body_to_cta = Math.round(cRect.top - dRect.bottom);
            var space_cta_to_trustbar = Math.round(bRect.top - cRect.bottom);
            
            return {
                viewportWidth: window.innerWidth,
                descBottom: dRect.bottom,
                ctaTop: cRect.top,
                ctaBottom: cRect.bottom,
                badgeTop: bRect.top,
                space_body_to_cta_px: space_body_to_cta,
                space_cta_to_trustbar_px: space_cta_to_trustbar,
                is_equal: space_body_to_cta === space_cta_to_trustbar
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

        console.log('=== VERIFICATION OF SPACING ON MOBILE ===');
        console.log(JSON.stringify(result, null, 2));
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

measure();
