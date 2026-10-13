const fs = require('fs');

const code = fs.readFileSync('resources/js/pages/c2-lp.tsx', 'utf8');
const lines = code.split('\n');

lines.forEach((line, i) => {
  if (line.includes('wa.me')) {
    console.log(`Line ${i + 1}: ${line.trim()}`);
  }
});
