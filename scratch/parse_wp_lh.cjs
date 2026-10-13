const fs = require('fs');

const path = process.argv[2] || 'scratch/lh-wp-desktop.json';
if (!fs.existsSync(path)) {
    console.log('File does not exist yet:', path);
    process.exit(1);
}

const raw = fs.readFileSync(path, 'utf8');
const json = JSON.parse(raw);
const cats = json.categories;

console.log('=== Lighthouse Results for:', json.requestedUrl, '===');
for (const k in cats) {
    console.log(`${cats[k].title}: ${Math.round(cats[k].score * 100)}`);
}

console.log('\nKey Metrics:');
const audits = json.audits;
[
    'first-contentful-paint',
    'largest-contentful-paint',
    'total-blocking-time',
    'cumulative-layout-shift',
    'speed-index'
].forEach(a => {
    if (audits[a]) {
        console.log(`${a}: ${audits[a].displayValue || audits[a].numericValue}`);
    }
});

console.log('\nOpportunities / Diagnostics:');
[
    'render-blocking-resources',
    'uses-responsive-images',
    'modern-image-formats',
    'unminified-css',
    'unminified-javascript',
    'unused-css-rules',
    'unused-javascript'
].forEach(a => {
    if (audits[a] && audits[a].score !== 1 && audits[a].score !== null) {
        console.log(`- ${a}: score=${audits[a].score}, savings=${audits[a].displayValue || ''}`);
    }
});
