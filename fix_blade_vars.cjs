const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\{\{ setEn \}\}/g, '@{{ setEn }}');
content = content.replace(/\{\{ setId \}\}/g, '@{{ setId }}');
content = content.replace(/\{\{ enStyle \}\}/g, '@{{ enStyle }}');
content = content.replace(/\{\{ idStyle \}\}/g, '@{{ idStyle }}');

fs.writeFileSync(file, content, 'utf8');
