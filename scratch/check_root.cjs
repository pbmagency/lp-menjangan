const https = require('https');

https.get('https://menjangansnorkelingtripanddiving.com/', res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('Root Status:', res.statusCode, 'Length:', body.length);
    console.log('Snippet:', body.slice(0, 500));
  });
});
