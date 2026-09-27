const fs = require('fs');

const logPath = 'C:/Users/Arif/.gemini/antigravity/brain/f3cd1944-b69f-4460-b8d4-08bd2621b020/.system_generated/tasks/task-1283.log';
const raw = fs.readFileSync(logPath, 'utf8');

// Find json substring starting from first '{'
const start = raw.indexOf('{');
const end = raw.lastIndexOf('}');
if (start !== -1 && end !== -1) {
    try {
        const json = JSON.parse(raw.substring(start, end + 1));
        const cats = json.categories;
        console.log('Categories:');
        for (const k in cats) {
            console.log(k, ':', Math.round(cats[k].score * 100));
        }
        console.log('\nKey Audits:');
        const audits = json.audits;
        ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].forEach(a => {
            if (audits[a]) {
                console.log(a, ':', audits[a].displayValue || audits[a].numericValue);
            }
        });
    } catch (e) {
        console.error('Parse error:', e.message);
    }
} else {
    console.log('JSON not found in log');
}
