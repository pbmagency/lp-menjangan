const fs = require('fs');

const path = 'resources/js/pages/c2-lp.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace phone numbers in wa.me links
const oldWaNumber = '6281238578042';
const newWaNumber = '6281238177183';
const waMatches = (content.match(new RegExp(oldWaNumber, 'g')) || []).length;
console.log(`Found ${waMatches} occurrences of ${oldWaNumber}`);
content = content.replaceAll(oldWaNumber, newWaNumber);

// 2. Replace display phone number
const oldDisplay = '+62 812-3857-8042';
const newDisplay = '+62 812-3817-7183';
content = content.replace(oldDisplay, newDisplay);
console.log(`Replaced display phone number ${oldDisplay} with ${newDisplay}`);

// 3. Replace maps embed iframe
const oldMapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.722668351543!2d114.5701623!3d-8.138403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd167098485295f%3A0xcc7667d0a2732e88!2sMenjangan%20Snorkeling%20Trip%20%26%20Diving!5e0!3m2!1sen!2sid!4v1700000000000';
const newMapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.6974100918116!2d114.57546097495098!3d-8.14192189188849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1698297112d6f%3A0x6e6445204a952279!2sMenjangan%20Snorkeling%20Center%20%26%20Dive%20Trip%20Bali%20%7C%20Menjangan%20Island%20Experience!5e0!3m2!1sen!2sid!4v1710000000000';

content = content.replace(oldMapSrc, newMapSrc);
content = content.replace(
    'title="Menjangan Snorkeling Trip &amp; Diving Location Map"',
    'title="Menjangan Snorkeling Center &amp; Dive Trip Bali Location Map"'
);
console.log('Replaced Google Maps iframe src and title.');

fs.writeFileSync(path, content, 'utf8');
console.log('c2-lp.tsx updated successfully!');
