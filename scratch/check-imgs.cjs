const fs = require('fs');
const html = fs.readFileSync('resources/generated/c2-content.html', 'utf8');
const tags = html.match(/<img[^>]*>/g) || [];
console.log('Total img tags:', tags.length);
tags.forEach((tag, idx) => {
  const isLazy = tag.includes('loading="lazy"');
  const isEager = tag.includes('loading="eager"');
  const src = (tag.match(/src="([^"]+)"/) || [])[1];
  console.log(`[${idx}] lazy: ${isLazy}, eager: ${isEager}, src: ${src}`);
});
