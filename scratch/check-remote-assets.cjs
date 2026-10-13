const https = require('https');
const fs = require('fs');

const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const regex = /(src|srcset|href)="([^"]+)"/g;
const paths = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  const val = match[2];
  if (val.startsWith('/')) {
    paths.add(val.split(' ')[0]); // In case of srcset "url 800w"
  }
}

async function checkUrl(url) {
  return new Promise(resolve => {
    https.request(url, { method: 'HEAD' }, res => {
      resolve(res.statusCode);
    }).on('error', () => resolve('ERR')).end();
  });
}

async function main() {
  console.log(`Checking ${paths.size} paths...`);
  for (const p of paths) {
    const rootUrl = `https://menjangansnorkelingtripanddiving.com${p}`;
    const code = await checkUrl(rootUrl);
    console.log(`${code}: ${rootUrl}`);
  }
}

main();
