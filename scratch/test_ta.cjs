const fs = require('fs');
const html = fs.readFileSync('scratch/c2-public-wp.html', 'utf8');
console.log('Has featured-tripadvisor:', html.includes('featured-tripadvisor'));
console.log('Has ta-cards-carousel:', html.includes('ta-cards-carousel'));
