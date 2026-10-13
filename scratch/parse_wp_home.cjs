const fs = require('fs');
const html = fs.readFileSync('scratch/wp-home.html', 'utf8');
const stylesheets = html.match(/<link[^>]*rel=['"]stylesheet['"][^>]*>/gi) || [];
console.log('--- Stylesheets ---');
stylesheets.forEach(s => console.log(s));

const scripts = html.match(/<script[^>]*src=['"][^'"]+['"][^>]*>/gi) || [];
console.log('\n--- Scripts ---');
scripts.forEach(s => console.log(s));
