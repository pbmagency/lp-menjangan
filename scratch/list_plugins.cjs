const fs = require('fs');
const html = fs.readFileSync('scratch/plugins.html', 'utf8');
const regex = /<tr[^>]+class="[^"]*active[^"]*"[^>]*data-slug="([^"]+)"/g;
let m;
const active = [];
while ((m = regex.exec(html)) !== null) {
    active.push(m[1]);
}
console.log('Active plugins:', active);
