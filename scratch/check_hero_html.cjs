const fs = require('fs');
const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const pIdx = html.indexOf('hero-desc');
console.log(html.slice(pIdx - 30, pIdx + 700));
