const fs = require('fs');

const raw = fs.readFileSync('scratch/lh-wp-desktop.json', 'utf8');
const json = JSON.parse(raw);
const audits = json.audits;

console.log('LCP details:', audits['largest-contentful-paint-element']?.details);
console.log('LCP metric details:', audits['largest-contentful-paint']?.details);

console.log('\nBest Practices failing audits:');
for (const k in audits) {
    if (json.categories['best-practices'].auditRefs.some(r => r.id === k) && audits[k].score !== 1 && audits[k].score !== null) {
        console.log(`- ${k}: ${audits[k].title} (score: ${audits[k].score})`);
        if (audits[k].explanation) console.log(`  Explanation: ${audits[k].explanation}`);
        if (audits[k].details?.items) console.log(`  Items:`, JSON.stringify(audits[k].details.items.slice(0, 3)));
    }
}

console.log('\nPerformance failing audits:');
for (const k in audits) {
    if (json.categories['performance'].auditRefs.some(r => r.id === k) && audits[k].score !== 1 && audits[k].score !== null) {
        console.log(`- ${k}: ${audits[k].title} (score: ${audits[k].score})`);
        if (audits[k].displayValue) console.log(`  displayValue: ${audits[k].displayValue}`);
    }
}
