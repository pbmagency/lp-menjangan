const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/Snorkeling-Menjangan-Island-4-350x350\.webp/g, 'Snorkeling-Menjangan-Island-4.webp');
content = content.replace(/GOPR7894-scaled-1\.webp/g, 'GOPR9465-scaled-1.webp');
// And also check for any other 350x350 that might be missing?
// I'll just do these two for now since those are the 404s reported.

fs.writeFileSync(file, content, 'utf8');
