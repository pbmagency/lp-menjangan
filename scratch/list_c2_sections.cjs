const fs = require('fs');
const c2 = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const sections = c2.match(/<section[^>]*id="([^"]+)"[^>]*>/g) || [];
console.log('Sections in c2:');
sections.forEach(s => {
  const id = s.match(/id="([^"]+)"/)[1];
  console.log(' -', id);
});
