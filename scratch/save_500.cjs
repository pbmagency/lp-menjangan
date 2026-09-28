const https = require('https');
const fs = require('fs');
https.get('https://menjangansnorkelingtripanddiving.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/500_response.html', data);
    console.log('Saved 500 HTML to scratch/500_response.html (size: ' + data.length + ')');
    // Search for exception class
    const exc = data.match(/"exception_class":"([^"]+)"/) ||
                data.match(/"exception":"([^"]+)"/) ||
                data.match(/<span class="exception_name">([^<]+)<\/span>/);
    const msg = data.match(/"message":"([^"]+)"/) ||
                data.match(/<span class="exception_message">([^<]+)<\/span>/);
    console.log('Exception Class:', exc ? exc[1] : 'Unknown');
    console.log('Exception Message:', msg ? msg[1] : 'Unknown');
  });
});
