const fs = require('fs');

const wp = fs.readFileSync('scratch/wp-landing.css', 'utf8');
const c2 = fs.readFileSync('resources/css/landing.css', 'utf8');

// Find selectors in c2 that aren't in wp
const selectorRegex = /([^{}]+)\{/g;
let m;
const missing = [];
while ((m = selectorRegex.exec(c2)) !== null) {
  const sel = m[1].trim();
  if (!sel.startsWith('@') && !wp.includes(sel.split(',')[0].trim())) {
    missing.push(sel);
  }
}

console.log('Selectors in c2 not in wp:', missing.slice(0, 20));
console.log('Total selectors missing:', missing.length);
