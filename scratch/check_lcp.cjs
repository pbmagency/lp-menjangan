const { spawn } = require('child_process');
const http = require('http');

async function checkLCP() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=375,812',
        '--no-sandbox',
        'https://menjangansnorkelingtripanddiving.com/wp/c2-lp/'
    ]);

    await new Promise(r => setTimeout(r, 4000));

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
            id: 1,
            method: 'Runtime.evaluate',
            params: {
                expression: `(function() {
                    var paints = performance.getEntriesByType('paint').map(function(e) {
                        return { name: e.name, startTime: Math.round(e.startTime) };
                    });
                    var nav = performance.getEntriesByType('navigation')[0];
                    return {
                        paints: paints,
                        responseStart: nav ? Math.round(nav.responseStart) : null,
                        domContentLoaded: nav ? Math.round(nav.domContentLoadedEventEnd) : null,
                        loadEvent: nav ? Math.round(nav.loadEventEnd) : null
                    };
                })()`,
                returnByValue: true
            }
        }));

        const result = await new Promise(resolve => {
            ws.onmessage = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id === 1) resolve(data.result.result.value);
            };
        });

        console.log('=== LCP ENTRIES ===', result);
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

checkLCP();
