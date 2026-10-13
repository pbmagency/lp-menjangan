const { spawn } = require('child_process');
const http = require('http');

async function verifyId() {
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

        const evalExpression = `(function() {
            var idBtn = document.getElementById('btn-lang-id');
            if (idBtn) idBtn.click();

            var ctaList = Array.from(document.querySelectorAll('.cta'));
            return ctaList.map(function(cta) {
                var span = cta.querySelector('span[data-l="id"]');
                var rect = cta.getBoundingClientRect();
                var spanRect = span ? span.getBoundingClientRect() : null;
                var clientRects = span ? span.getClientRects() : [];
                return {
                    text: (span ? span.textContent : '').trim(),
                    buttonWidth: Math.round(rect.width),
                    buttonHeight: Math.round(rect.height),
                    spanHeight: spanRect ? Math.round(spanRect.height) : null,
                    numLines: clientRects.length,
                    isSingleLine: clientRects.length <= 1,
                    fontSize: window.getComputedStyle(cta).fontSize,
                    whiteSpace: window.getComputedStyle(cta).whiteSpace
                };
            });
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

        console.log('=== CTA BUTTONS SINGLE-LINE INDONESIAN (375px viewport) ===');
        console.log(JSON.stringify(result, null, 2));
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

verifyId();
