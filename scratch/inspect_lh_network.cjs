const fs = require('fs');

const raw = fs.readFileSync('scratch/lh-wp-desktop.json', 'utf8');
const json = JSON.parse(raw);
const audits = json.audits;

const netItems = audits['network-requests']?.details?.items || [];
console.log('Network requests count:', netItems.length);
netItems.forEach(item => {
    if (item.resourceType === 'Image' || item.url.includes('hero') || item.url.includes('.avif') || item.url.includes('.webp')) {
        console.log(`Image: ${item.url.slice(-40)} | size: ${Math.round(item.transferSize/1024)}KB | time: ${Math.round(item.endTime - item.startTime)}ms | status: ${item.statusCode}`);
    }
});

console.log('\nRender blocking resources:');
const rbItems = audits['render-blocking-resources']?.details?.items || [];
rbItems.forEach(i => console.log(i.url, i.totalBytes));

console.log('\nLCP audit details:');
console.log(JSON.stringify(audits['largest-contentful-paint']));
