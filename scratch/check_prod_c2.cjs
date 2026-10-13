const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/c2-lp', res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('Status:', res.statusCode, 'Length:', body.length);
    const cssRegex = /href="([^"]+\.css[^"]*)"/g;
    const jsRegex = /src="([^"]+\.js[^"]*)"/g;
    let m;
    while ((m = cssRegex.exec(body)) !== null) console.log('CSS:', m[1]);
    while ((m = jsRegex.exec(body)) !== null) console.log('JS:', m[1]);
  });
});
