const fs = require('fs');
const code = fs.readFileSync('resources/js/pages/c2-lp.tsx', 'utf8');
const lines = code.split('\n');
const ctas = [];
lines.forEach((line, i) => {
  if (line.includes('href="https://wa.me/') || line.includes('className="cta"') || line.includes('className="hero-cta-btn"') || line.includes('id="btn-') || line.includes('id="whatsapp-button"')) {
    ctas.push({ line: i + 1, text: line.trim() });
  }
});
console.log('Total CTAs/buttons found:', ctas.length);
ctas.forEach(c => console.log(c.line + ': ' + c.text));
