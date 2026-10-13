const fs = require('fs');

const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const regex = /(src|srcset|href)="([^"]+)"/g;
const paths = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  const val = match[2];
  if (val.startsWith('/') || val.includes('.webp') || val.includes('.avif') || val.includes('.jpg') || val.includes('.png')) {
    paths.add(val);
  }
}

console.log('Total paths found:', paths.size);
console.log('Sample paths:\n', Array.from(paths).slice(0, 30).join('\n'));
