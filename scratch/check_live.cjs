const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', (res) => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
        const start = html.indexOf('<style id="c2-critical-styles">');
        const end = html.indexOf('</style>', start);
        console.log(html.slice(start, end + 8));
    });
});
