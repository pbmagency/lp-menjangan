async function resolve() {
  const url = 'https://maps.app.goo.gl/U93TYLBK9cprtJ9B8?g_st=ic';
  const res1 = await fetch(url, { redirect: 'manual' });
  const loc1 = res1.headers.get('location');
  console.log('Redirect 1:', loc1);

  const res2 = await fetch(loc1, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  console.log('Final URL:', res2.url);
  const html = await res2.text();
  
  // Find coordinates or pb parameter
  const match = html.match(/!1m18!1m12![^"'\\]+/);
  console.log('PB match:', match ? match[0] : 'not found');

  const latLong = html.match(/\[null,null,(-?\d+\.\d+),(-?\d+\.\d+)\]/);
  console.log('Lat long:', latLong ? `${latLong[1]}, ${latLong[2]}` : 'not found');

  const metaOg = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/);
  console.log('OG image:', metaOg ? metaOg[1] : 'none');
}

resolve().catch(console.error);
