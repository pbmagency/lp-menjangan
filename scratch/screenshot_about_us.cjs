const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function captureAboutUs() {
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
        async function evalInPage(expr) {
            return new Promise(resolve => {
                const id = Math.floor(Math.random() * 100000);
                const handler = (msg) => {
                    const data = JSON.parse(msg.data);
                    if (data.id === id) {
                        ws.removeEventListener('message', handler);
                        resolve(data.result ? data.result.result : null);
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

        // Scroll to about-us-cta-wrapper
        await evalInPage(`(function() {
            var el = document.querySelector('#about-us-why .cta');
            if (el) {
                el.scrollIntoView({ block: 'center', behavior: 'instant' });
            }
        })()`);
        await new Promise(r => setTimeout(r, 1000));

        ws.send(JSON.stringify({
            id: 30,
            method: 'Page.captureScreenshot',
            params: {
                format: 'jpeg',
                quality: 85
            }
        }));

        const result = await new Promise(resolve => {
            ws.onmessage = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id === 30) resolve(data.result.data);
            };
        });

        fs.writeFileSync('scratch/about-us-centered.jpg', Buffer.from(result, 'base64'));
        console.log('Screenshot saved to scratch/about-us-centered.jpg');
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

captureAboutUs();
