const fs = require('fs');

function report(file) {
    if (!fs.existsSync(file)) {
        console.log('File does not exist yet:', file);
        return;
    }
    const lh = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`=== LIGHTHOUSE AUDIT: ${file} ===`);
    for (const [k, v] of Object.entries(lh.categories)) {
        console.log(`  ${k.toUpperCase().padEnd(20)}: ${Math.round(v.score * 100)}`);
    }
    const lcp = lh.audits['largest-contentful-paint'];
    const fcp = lh.audits['first-contentful-paint'];
    const tbt = lh.audits['total-blocking-time'];
    const cls = lh.audits['cumulative-layout-shift'];
    const si  = lh.audits['speed-index'];
    console.log('Core Web Vitals:');
    console.log(`  FCP : ${fcp ? fcp.displayValue : 'N/A'}`);
    console.log(`  LCP : ${lcp ? lcp.displayValue : 'N/A'}`);
    console.log(`  TBT : ${tbt ? tbt.displayValue : 'N/A'}`);
    console.log(`  CLS : ${cls ? cls.displayValue : 'N/A'}`);
    console.log(`  SI  : ${si  ? si.displayValue  : 'N/A'}`);

    const failedBP = [];
    if (lh.categories['best-practices']) {
        for (const ref of lh.categories['best-practices'].auditRefs) {
            const audit = lh.audits[ref.id];
            if (audit && audit.score !== null && audit.score < 1) {
                failedBP.push(`${ref.id} (${audit.score}): ${audit.title}`);
            }
        }
    }
    if (failedBP.length > 0) {
        console.log('Failed Best Practices:', failedBP);
    }
}

const target = process.argv[2] || 'scratch/lh-wp-final-desktop.json';
report(target);
