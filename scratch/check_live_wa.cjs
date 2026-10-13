async function check() {
  const res = await fetch('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
  const html = await res.text();
  const match = html.match(/id="whatsapp-button"[^>]*style="([^"]*)"/);
  console.log('Match on live WP:', match ? match[1] : 'not found');
  
  // also check other buttons on live WP
  const heroBtn = html.match(/id="btn-hero-wa-main"[^>]*class="([^"]*)"/);
  console.log('Hero btn class:', heroBtn ? heroBtn[1] : 'not found');
  
  const ctaMatches = [...html.matchAll(/class="cta"[^>]*style="([^"]*)"/g)].slice(0, 3);
  ctaMatches.forEach((m, idx) => console.log(`CTA ${idx+1} style:`, m[1]));
}
check();
