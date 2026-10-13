const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', (res) => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
        // Also check header because header sits directly above or inside hero
        const headerIdx = html.indexOf('<header');
        const topIdx = html.indexOf('<section id="top"');
        const endIdx = html.indexOf('</section>', topIdx);
        const heroHtml = html.slice(headerIdx, endIdx + 10);

        console.log('--- HEADER & HERO ELEMENTS ---');
        const regex = /<([a-z0-9]+)([^>]*)>/gi;
        let m;
        while ((m = regex.exec(heroHtml)) !== null) {
            const tag = m[1];
            const attrs = m[2];
            const classMatch = attrs.match(/class="([^"]*)"/);
            const styleMatch = attrs.match(/style="([^"]*)"/);
            const idMatch = attrs.match(/id="([^"]*)"/);
            console.log(`<${tag}${idMatch ? ' id="' + idMatch[1] + '"' : ''}${classMatch ? ' class="' + classMatch[1] + '"' : ''}>`);
            if (styleMatch) console.log('   style:', styleMatch[1]);
        }
    });
});
