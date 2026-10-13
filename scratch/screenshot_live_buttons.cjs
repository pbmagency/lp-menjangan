const puppeteer = require('puppeteer');

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Mobile screenshot
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', { waitUntil: 'networkidle2', timeout: 30000 });
  
  // Screenshot Hero with main CTA
  await page.screenshot({ path: 'scratch/live-c2-hero-green.jpg', quality: 90, type: 'jpeg' });
  console.log('Mobile hero screenshot saved: scratch/live-c2-hero-green.jpg');

  // Scroll down to check reviews CTA
  const reviewsCta = await page.$('#reviews .cta, .cta');
  if (reviewsCta) {
    await reviewsCta.scrollIntoView();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'scratch/live-c2-cta-green.jpg', quality: 90, type: 'jpeg' });
    console.log('Mobile CTA screenshot saved: scratch/live-c2-cta-green.jpg');
  }

  // Check computed background colors of buttons
  const buttonColors = await page.evaluate(() => {
    const heroBtn = document.querySelector('#btn-hero-wa-main');
    const waFloat = document.querySelector('#whatsapp-button');
    const headerBtn = document.querySelector('#btn-hero-wa');
    const ctas = Array.from(document.querySelectorAll('.cta')).slice(0, 3);
    
    return {
      heroBtn: heroBtn ? window.getComputedStyle(heroBtn).backgroundColor : 'none',
      waFloat: waFloat ? window.getComputedStyle(waFloat).backgroundColor : 'none',
      headerBtn: headerBtn ? window.getComputedStyle(headerBtn).backgroundColor : 'none',
      ctas: ctas.map(c => window.getComputedStyle(c).backgroundColor)
    };
  });
  console.log('Computed button background colors on live WP:');
  console.log(JSON.stringify(buttonColors, null, 2));

  await browser.close();
}

capture().catch(console.error);
