const fs = require('fs');

const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const matches = html.match(/https:\/\/wa\.me\/6281238578042\?text=[^"]+/g) || [];
console.log('Total WhatsApp links in pre-rendered c2-content.html:', matches.length);
console.log('Sample link:');
console.log(matches[0]);
console.log('Contains new text:', matches[0].includes('Could%20you%20please%20check%20availability'));
