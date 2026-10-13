const fs = require('fs');
const html = fs.readFileSync('scratch/wp-home.html', 'utf8');
const matches = html.split('"').filter(s => s.includes('flush') && s.includes('w3tc'));
console.log('Flush links:', matches);
