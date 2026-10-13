const fs = require('fs');
const code = fs.readFileSync('resources/js/pages/c2-lp.tsx', 'utf8');
const lines = code.split('\n');

lines.forEach((l, i) => {
    if (l.includes('className="cta"') || l.includes('className="btn btn-primary"') || l.includes('hero-cta-btn')) {
        console.log(`Line ${i + 1}: ${l.trim()}`);
        for (let j = 1; j <= 30; j++) {
            if (lines[i + j] && lines[i + j].includes('data-l="en"')) {
                console.log(`   Text: ${lines[i + j + 1] ? lines[i + j + 1].trim() : ''}`);
                break;
            }
        }
    }
});
