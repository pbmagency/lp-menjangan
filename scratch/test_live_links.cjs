async function test() {
  const r = await fetch('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/');
  const t = await r.text();
  const cssLinks = [...t.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)];
  cssLinks.forEach(l => console.log(l[0]));
}
test();
