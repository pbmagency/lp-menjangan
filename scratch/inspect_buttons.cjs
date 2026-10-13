const fs = require('fs');

const code = fs.readFileSync('resources/js/pages/c2-lp.tsx', 'utf8');
const lines = code.split('\n');

const lineNumbers = [155, 389, 1491, 2094, 2614, 3138, 3590, 3787, 6514, 6979, 7367];

lineNumbers.forEach(ln => {
  console.log(`\n=================== AROUND LINE ${ln} ===================`);
  const start = Math.max(0, ln - 15);
  const end = Math.min(lines.length, ln + 15);
  for (let i = start; i < end; i++) {
    const marker = i + 1 === ln ? '>>>' : '   ';
    console.log(`${marker} ${i + 1}: ${lines[i]}`);
  }
});
