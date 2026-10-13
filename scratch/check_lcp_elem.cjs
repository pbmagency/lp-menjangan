const fs = require('fs');

const d = JSON.parse(fs.readFileSync('scratch/lh-wp-desktop4.json', 'utf8'));
const audits = d.audits;

console.log('LCP Element:', audits['largest-contentful-paint-element']?.details?.items);
console.log('LCP audits:', audits['largest-contentful-paint']?.numericValue);
