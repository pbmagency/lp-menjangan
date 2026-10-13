const fs = require('fs');
const lh = JSON.parse(fs.readFileSync('scratch/lh-wp-desktop4.json', 'utf8'));

console.log('Categories:');
for (const [k, v] of Object.entries(lh.categories)) {
    console.log(`  ${k}: ${Math.round(v.score * 100)}`);
}

const lcpAudit = lh.audits['largest-contentful-paint'];
console.log('LCP:', lcpAudit ? lcpAudit.displayValue : 'N/A');

const lcpElement = lh.audits['largest-contentful-paint-element'];
if (lcpElement && lcpElement.details) {
    console.log('LCP Element items:', JSON.stringify(lcpElement.details.items, null, 2));
}

console.log('Failed Best Practices audits:');
for (const [id, item] of Object.entries(lh.audits)) {
    if (lh.categories['best-practices'].auditRefs.some(r => r.id === id) && item.score !== null && item.score < 1) {
        console.log(`  ${id} (${item.score}): ${item.title}`);
        if (item.details) {
            console.log('    details:', JSON.stringify(item.details.items || item.details, null, 2).slice(0, 500));
        }
    }
}
