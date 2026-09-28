const https = require('https');
https.get('https://menjangansnorkelingtripanddiving.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Server:', res.headers['server']);
    console.log('Includes id="app":', data.includes('id="app"'));
    console.log('Includes /build/assets/:', data.includes('/build/assets/'));
    console.log('Includes gtm.js in top 1500 chars:', data.slice(0, 1500).includes('gtm.js'));
    console.log('\n--- FIRST 600 CHARS ---');
    console.log(data.slice(0, 600));
  });
});
