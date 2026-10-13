const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
        const idx = d.indexOf('id="top"');
        console.log('Top index:', idx);
        if (idx !== -1) {
            console.log(d.substring(idx + 2500, idx + 4200));
        }
    });
});
