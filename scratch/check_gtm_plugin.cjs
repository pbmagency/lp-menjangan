const fs = require('fs');
const html = fs.readFileSync('scratch/plugins.html', 'utf8');
const matches = html.split('"').filter(s => s.includes('duracelltomi') || s.includes('gtm4wp'));
console.log('GTM4WP plugin matches:', matches);
