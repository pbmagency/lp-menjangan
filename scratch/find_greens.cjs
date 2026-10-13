const fs = require('fs');

const code = fs.readFileSync('resources/js/pages/c2-lp.tsx', 'utf8');
const lines = code.split('\n');
console.log('=== c2-lp.tsx ===');
lines.forEach((line, i) => {
  if (/087[dD]39|066[aA]31|70[cC][eE]74|25[dD]366/i.test(line)) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});

const css = fs.readFileSync('resources/css/landing.css', 'utf8');
const cssLines = css.split('\n');
console.log('\n=== landing.css ===');
cssLines.forEach((line, i) => {
  if (/087[dD]39|066[aA]31|70[cC][eE]74|25[dD]366/i.test(line)) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});
