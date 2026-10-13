const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function captureLive() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9223',
        '--window-size=390,844',
        '--no-sandbox',
        'https://menjangansnorkelingtripanddiving.com/wp/c2-lp/'
    ]);

    await new Promise(r => setTimeout(r, 4000));

    try {
        const listRes = await new Promise(resolve => {
            http.get('http://127.0.0.1:9223/json', res => {
                let d = '';
                res.on('data', c => d += c);
                res.on('end', () => resolve(JSON.parse(d)));
            });
        });

        const page = listRes.find(p => p.url.includes('c2-lp'));
        if (!page) {
            console.log('Page not found in Chrome tabs');
            return;
        }

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise(r => ws.onopen = r);

        ws.send(JSON.stringify({
            id: 10,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
                width: 390,
                height: 844,
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

        const colors = await evalInPage(`(function() {
            var heroBtn = document.querySelector('#btn-hero-wa-main');
            var waFloat = document.querySelector('#whatsapp-button');
            var headerBtn = document.querySelector('#btn-hero-wa');
            var ctas = Array.from(document.querySelectorAll('.cta')).slice(0, 4);

            return {
                heroBtn: heroBtn ? window.getComputedStyle(heroBtn).backgroundColor : 'none',
                waFloat: waFloat ? window.getComputedStyle(waFloat).backgroundColor : 'none',
                headerBtn: headerBtn ? window.getComputedStyle(headerBtn).backgroundColor : 'none',
                ctas: ctas.map(c => window.getComputedStyle(c).backgroundColor)
            };
        })()`);

        console.log('=== COMPUTED BUTTON COLORS ON LIVE WP ===');
        console.log(JSON.stringify(colors, null, 2));

        // Screenshot hero
        ws.send(JSON.stringify({
            id: 30,
            method: 'Page.captureScreenshot',
            params: { format: 'jpeg', quality: 90 }
        }));

        const resultHero = await new Promise(resolve => {
            const h = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id === 30) {
                    ws.removeEventListener('message', h);
                    resolve(data.result.data);
                }
            };
            ws.addEventListener('message', h);
        });

        fs.writeFileSync('scratch/live-c2-hero-green.jpg', Buffer.from(resultHero, 'base64'));
        console.log('Hero screenshot saved to scratch/live-c2-hero-green.jpg');

        // Scroll to review CTA and capture
        await evalInPage(`(function() {
            var el = document.querySelector('#reviews .cta, .cta');
            if (el) el.scrollIntoView({ block: 'center', behavior: 'instant' });
        })()`);
        await new Promise(r => setTimeout(r, 600));

        ws.send(JSON.stringify({
            id: 31,
            method: 'Page.captureScreenshot',
            params: { format: 'jpeg', quality: 90 }
        }));

        const resultCta = await new Promise(resolve => {
            const h = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id === 31) {
                    ws.removeEventListener('message', h);
                    resolve(data.result.data);
                }
            };
            ws.addEventListener('message', h);
        });

        fs.writeFileSync('scratch/live-c2-cta-green.jpg', Buffer.from(resultCta, 'base64'));
        console.log('CTA screenshot saved to scratch/live-c2-cta-green.jpg');

        ws.close();
    } catch (e) {
        console.error('Error:', e);
    } finally {
        chrome.kill();
    }
}

captureLive();
