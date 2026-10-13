const fs = require('fs');

// Check the CSS rules in resources/css/landing.css
const css = fs.readFileSync('resources/css/landing.css', 'utf8');

console.log('=== CSS VERIFICATION ===');
const hasHeroDescMargin = css.includes('margin: 0 0 14px 0 !important');
const hasHeroBadgeMargin = css.includes('margin-top: 14px !important');
const hasHeroCtaWrapper = css.includes('.hero-cta-wrapper');

console.log('Hero-desc margin 14px on mobile:', hasHeroDescMargin);
console.log('Hero-badge margin-top 14px on mobile:', hasHeroBadgeMargin);
console.log('Hero-cta-wrapper present:', hasHeroCtaWrapper);

// Check generated HTML in resources/generated/c2-content.html
const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
console.log('HTML has hero-cta-wrapper:', html.includes('hero-cta-wrapper'));
console.log('HTML has hero-desc:', html.includes('hero-desc'));
console.log('HTML has hero-badge:', html.includes('hero-badge'));
