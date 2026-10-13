const fs = require('fs');

const path = 'resources/js/pages/c2-lp.tsx';
let content = fs.readFileSync(path, 'utf8');

const newTargetUrl = 'https://wa.me/6281238578042?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20trip%20to%20Menjangan%20Island.%20Could%20you%20please%20check%20availability%20and%20details%20for%20me%3F';

// Replace all existing wa.me links that have ?text=...
const waRegex = /https:\/\/wa\.me\/6281238578042\?text=[^"]+/g;
const matches = content.match(waRegex) || [];
console.log(`Found ${matches.length} WhatsApp links with ?text= to replace.`);

content = content.replace(waRegex, newTargetUrl);

// Also replace the footer wa.me link without ?text if desired
// Line 7191: href="https://wa.me/6281238578042"
const footerRegex = /href="https:\/\/wa\.me\/6281238578042"/g;
const footerMatches = content.match(footerRegex) || [];
console.log(`Found ${footerMatches.length} footer plain links.`);
content = content.replace(footerRegex, `href="${newTargetUrl}"`);

fs.writeFileSync(path, content, 'utf8');
console.log('c2-lp.tsx updated with new WhatsApp message successfully!');
