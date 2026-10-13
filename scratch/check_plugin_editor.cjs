const fs = require('fs');

const html = fs.readFileSync('scratch/plugin-editor.html', 'utf8');
const regex = /file=([^&"']+)/g;
const files = new Set();
let m;
while ((m = regex.exec(html)) !== null) {
  files.add(m[1]);
}
console.log('Files in plugin editor:', Array.from(files));

const formRegex = /<form[^>]+id="template"[^>]*action="([^"]*)"/i;
const formMatch = html.match(formRegex);
console.log('Form action:', formMatch ? formMatch[1] : null);

const nonceRegex = /name="_wpnonce"\s+value="([^"]+)"/;
const nonceMatch = html.match(nonceRegex);
console.log('Plugin editor nonce:', nonceMatch ? nonceMatch[1] : null);
