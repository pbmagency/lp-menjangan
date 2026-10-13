const { spawn } = require('child_process');
const http = require('http');

async function verifyBadges(viewportWidth, lang) {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        `--window-size=${viewportWidth},812`,
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
                width: viewportWidth,
                height: 800,
                deviceScaleFactor: 2,
                mobile: true
            }
        }));
        await new Promise(r => setTimeout(r, 400));

        async function evalInPage(expr) {
            ws.send(JSON.stringify({
                id: Math.floor(Math.random() * 100000),
                method: 'Runtime.evaluate',
                params: { expression: expr, returnByValue: true }
            }));
            return new Promise(resolve => {
                const handler = (msg) => {
                    const data = JSON.parse(msg.data);
                    if (data.result) {
                        ws.removeEventListener('message', handler);
                        resolve(data.result.result.value);
                    }
                };
                ws.addEventListener('message', handler);
            });
        }

        if (lang === 'id') {
            await evalInPage(`(function() {
                var btn = document.getElementById('btn-lang-id');
                if (btn) btn.click();
            })()`);
            await new Promise(r => setTimeout(r, 200));
        }

        const evalExpression = `(function() {
            var badges = Array.from(document.querySelectorAll('.service-badge-pill'));
            return badges.map(function(badge) {
                var rect = badge.getBoundingClientRect();
                var title = badge.querySelector('.service-badge-pill-title');
                var desc = badge.querySelector('.service-badge-pill-desc');
                var titleRects = title ? title.getClientRects() : [];
                var descRects = desc ? desc.getClientRects() : [];
                
                var parent = badge.parentElement;
                var parentRect = parent ? parent.getBoundingClientRect() : null;
                
                return {
                    text: badge.textContent.replace(/\\s+/g, ' ').trim(),
                    badgeWidth: Math.round(rect.width),
                    badgeHeight: Math.round(rect.height),
                    parentWidth: parentRect ? Math.round(parentRect.width) : null,
                    titleLines: titleRects.length,
                    descLines: descRects.length,
                    isSingleLine: rect.height <= 28 && titleRects.length <= 1 && descRects.length <= 1,
                    fontSize: window.getComputedStyle(badge.querySelector('.service-badge-pill-title') || badge).fontSize,
                    whiteSpace: window.getComputedStyle(badge).whiteSpace
                };
            });
        })()`;

        const result = await evalInPage(evalExpression);
        console.log(`=== BADGES: Viewport ${viewportWidth}px | Lang: ${lang.toUpperCase()} ===`);
        console.log(JSON.stringify(result, null, 2));
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

async function runAll() {
    await verifyBadges(375, 'en');
    await new Promise(r => setTimeout(r, 1000));
    await verifyBadges(375, 'id');
    await new Promise(r => setTimeout(r, 1000));
    await verifyBadges(360, 'en');
    await new Promise(r => setTimeout(r, 1000));
    await verifyBadges(360, 'id');
}

runAll();
