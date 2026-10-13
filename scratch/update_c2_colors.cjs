const fs = require('fs');

const path = 'resources/js/pages/c2-lp.tsx';
let content = fs.readFileSync(path, 'utf8');

const countBefore = (content.match(/#087D39/g) || []).length;
console.log('Occurrences of #087D39 before:', countBefore);

content = content.replaceAll('#087D39', '#70CE74');
content = content.replaceAll('0 4px 14px rgba(37, 211, 102, 0.4)', '0 4px 14px rgba(112, 206, 116, 0.4)');

const countAfter = (content.match(/#087D39/g) || []).length;
console.log('Occurrences of #087D39 after:', countAfter);

const countNew = (content.match(/#70CE74/g) || []).length;
console.log('Occurrences of #70CE74 after:', countNew);

fs.writeFileSync(path, content, 'utf8');
console.log('c2-lp.tsx updated successfully!');
