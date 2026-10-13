const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/wp/c2-lp/', res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('Has meta description:', body.includes('name="description"'));
    console.log('Has isBot in clarity:', body.includes('isBot'));
    console.log('Served from cache timestamp:', body.match(/Served from: [^\n]+/)?.[0]);
  });
});
