async function warm() {
  for (let i = 0; i < 3; i++) {
    const t0 = Date.now();
    const res = await fetch('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
    const text = await res.text();
    const t1 = Date.now();
    console.log(`Request ${i+1}: ${res.status} (${t1 - t0}ms, ${text.length} bytes, has #70CE74: ${text.includes('#70CE74')})`);
  }
}
warm();
