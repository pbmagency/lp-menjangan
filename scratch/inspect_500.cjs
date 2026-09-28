const https = require('https');
https.get('https://menjangansnorkelingtripanddiving.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Length:', data.length);
    console.log('--- BODY ---');
    console.log(data.slice(0, 4000));
  });
});
