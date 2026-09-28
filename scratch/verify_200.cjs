const https = require('https');
https.get('https://menjangansnorkelingtripanddiving.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Has app div:', data.includes('id="app"'));
    console.log('Has landing-app.js:', data.includes('landing-app'));
    console.log('Has isBot deferred tracker:', data.includes('isBot'));
    console.log('\n--- LAST 500 CHARS ---');
    console.log(data.slice(-500));
  });
});
