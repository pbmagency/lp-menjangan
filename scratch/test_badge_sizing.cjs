const { spawn } = require('child_process');
const http = require('http');

async function testStyles() {
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=360,800',
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

        // Set device metrics override to exact 360x740 with mobile emulation
        ws.send(JSON.stringify({
            id: 10,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
                width: 360,
                height: 740,
                deviceScaleFactor: 2,
                mobile: true
            }
        }));
        await new Promise(r => setTimeout(r, 500));

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

        const testCode = (fontSize, padding, letterSpacing) => `(function() {
            var badges = [];
            document.querySelectorAll('div').forEach(function(div) {
                var text = div.textContent || '';
                if ((text.includes('01 SNORKELING') || text.includes('02 SCUBA DIVING') || text.includes('03 DISCOVERY SCUBA')) &&
                    div.children.length === 2 && div.children[0].tagName === 'SPAN') {
                    badges.push(div);
                }
            });

            badges.forEach(function(b) {
                b.style.whiteSpace = 'nowrap';
                b.style.display = 'inline-flex';
                b.style.flexWrap = 'nowrap';
                b.style.alignItems = 'center';
                b.style.padding = '${padding}';
                b.style.maxWidth = '100%';
                b.style.boxSizing = 'border-box';
                
                var title = b.children[0];
                var desc = b.children[1];
                
                title.style.fontSize = '${fontSize}';
                title.style.letterSpacing = '${letterSpacing}';
                title.style.whiteSpace = 'nowrap';
                
                desc.style.fontSize = '${fontSize}';
                desc.style.whiteSpace = 'nowrap';
                desc.style.marginLeft = '4px';
            });

            return {
                windowInnerWidth: window.innerWidth,
                results: badges.map(function(b) {
                    var rect = b.getBoundingClientRect();
                    return {
                        text: b.textContent.replace(/\\s+/g, ' ').trim(),
                        badgeWidth: Math.round(rect.width),
                        badgeHeight: Math.round(rect.height),
                        fitsIn360: rect.width <= 328
                    };
                })
            };
        })()`;

        console.log('--- 360px with font 9px, padding 3px 6px, letterSpacing 0.02em (EN) ---');
        console.log(JSON.stringify(await evalInPage(testCode('9px', '3px 6px', '0.02em')), null, 2));

        console.log('--- 360px with font 8.5px, padding 3px 6px, letterSpacing 0.02em (EN) ---');
        console.log(JSON.stringify(await evalInPage(testCode('8.5px', '3px 6px', '0.02em')), null, 2));

        // Switch to ID
        await evalInPage(`(function() {
            var idBtn = document.getElementById('btn-lang-id');
            if (idBtn) idBtn.click();
        })()`);

        console.log('--- 360px with font 8.5px, padding 3px 6px, letterSpacing 0.02em (ID) ---');
        console.log(JSON.stringify(await evalInPage(testCode('8.5px', '3px 6px', '0.02em')), null, 2));

        ws.close();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        chrome.kill();
    }
}

testStyles();
