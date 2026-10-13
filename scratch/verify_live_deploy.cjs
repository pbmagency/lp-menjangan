async function verifyLive() {
  for (let i = 0; i < 3; i++) {
    const t0 = Date.now();
    const res = await fetch('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    const text = await res.text();
    const t1 = Date.now();
    console.log(`Req ${i+1}: ${res.status} (${t1-t0}ms) | Has new WA: ${text.includes('6281238177183')} | Has old WA: ${text.includes('6281238578042')} | Has new map: ${text.includes('Menjangan%20Snorkeling%20Center%20%26%20Dive%20Trip%20Bali')}`);
  }
}
verifyLive();
