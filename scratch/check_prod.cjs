const https = require('https');
https.get('https://menjangansnorkelingtripanddiving.com/?v=' + Date.now(), (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Includes id="app":', data.includes('id="app"'));
    console.log('Includes /build/assets/:', data.includes('/build/assets/'));
    console.log('First 400 chars:\n', data.slice(0, 400));
  });
});
