const fs = require('fs');
const sec = JSON.parse(fs.readFileSync('scratch/sections.json', 'utf8'));
const c2 = fs.readFileSync('resources/generated/c2-content.html', 'utf8');

console.log('--- c2-lp vs sections.json ---');
sec.forEach(s => {
  let found = false;
  if (s.key === 'site-header' && c2.includes('<header')) found = true;
  else if (s.key === 'site-footer' && c2.includes('<footer')) found = true;
  else if (c2.includes(`id="${s.key}"`)) found = true;
  console.log(s.key, ':', found ? 'MATCH' : 'MISSING');
});
