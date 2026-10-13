const { spawn } = require('child_process');
const http = require('http');

async function getCoords() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9224',
        '--no-sandbox',
        'https://maps.app.goo.gl/U93TYLBK9cprtJ9B8?g_st=ic'
    ]);

    await new Promise(r => setTimeout(r, 6000));

    try {
        const listRes = await new Promise(resolve => {
            http.get('http://127.0.0.1:9224/json', res => {
                let d = '';
                res.on('data', c => d += c);
                res.on('end', () => resolve(JSON.parse(d)));
            });
        });

        const page = listRes.find(p => p.url.includes('google.com/maps'));
        if (page) {
            console.log('Page URL in Chrome:', page.url);
        } else {
            console.log('Tabs:', listRes.map(t => t.url));
        }
    } finally {
        chrome.kill();
    }
}

getCoords();
