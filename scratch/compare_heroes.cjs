const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

async function capture(url, outputFile) {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=375,812',
        '--no-sandbox',
        url
    ]);

    await new Promise(r => setTimeout(r, 3000));

    try {
        const listRes = await new Promise(resolve => {
            http.get('http://127.0.0.1:9222/json', res => {
                let d = '';
                res.on('data', c => d += c);
                res.on('end', () => resolve(JSON.parse(d)));
            });
        });

        const page = listRes[0];
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

        ws.send(JSON.stringify({
            id: 30,
            method: 'Page.captureScreenshot',
            params: { format: 'jpeg', quality: 85 }
        }));

        const result = await new Promise(resolve => {
            ws.onmessage = (msg) => {
                const data = JSON.parse(msg.data);
                if (data.id === 30) resolve(data.result.data);
            };
        });

        fs.writeFileSync(outputFile, Buffer.from(result, 'base64'));
        console.log(`Saved screenshot to ${outputFile}`);
        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

async function run() {
    await capture('https://menjangansnorkelingtripanddiving.com/wp/', 'scratch/hero-homepage.jpg');
    await new Promise(r => setTimeout(r, 1000));
    await capture('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', 'scratch/hero-c2-current.jpg');
}

run();
