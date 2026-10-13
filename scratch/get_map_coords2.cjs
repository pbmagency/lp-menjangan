const { spawn } = require('child_process');
const http = require('http');

async function getCoords() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9225',
        '--no-sandbox',
        'https://maps.app.goo.gl/U93TYLBK9cprtJ9B8?g_st=ic'
    ]);

    await new Promise(r => setTimeout(r, 6000));

    try {
        const listRes = await new Promise(resolve => {
            http.get('http://127.0.0.1:9225/json', res => {
                let d = '';
                res.on('data', c => d += c);
                res.on('end', () => resolve(JSON.parse(d)));
            });
        });

        const page = listRes.find(p => p.url.includes('google.com/maps'));
        if (!page) {
            console.log('No maps tab');
            return;
        }

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise(r => ws.onopen = r);

        for (let i = 0; i < 5; i++) {
            await new Promise(r => setTimeout(r, 2000));
            ws.send(JSON.stringify({
                id: i + 1,
                method: 'Runtime.evaluate',
                params: { expression: 'window.location.href', returnByValue: true }
            }));
            const res = await new Promise(resolve => {
                const h = (msg) => {
                    const data = JSON.parse(msg.data);
                    if (data.id === i + 1) {
                        ws.removeEventListener('message', h);
                        resolve(data.result.result.value);
                    }
                };
                ws.addEventListener('message', h);
            });
            console.log(`Poll ${i+1} URL:`, res);
            if (res.includes('/@')) break;
        }
        ws.close();
    } finally {
        chrome.kill();
    }
}

getCoords();
