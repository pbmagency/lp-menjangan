const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
        console.log('HTTP Status:', res.statusCode);
        const idx = d.indexOf('id="hero-img"');
        console.log('hero-img index:', idx);
        if (idx !== -1) {
            console.log(d.substring(idx - 30, idx + 400));
        }
    });
});
