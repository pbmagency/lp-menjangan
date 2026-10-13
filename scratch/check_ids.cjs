const fs = require('fs');
const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const idRegex = /id="([^"]+)"/g;
const ids = new Set();
let m;
while ((m = idRegex.exec(html)) !== null) {
  ids.add(m[1]);
}
console.log('IDs in c2-content.html:', Array.from(ids));
