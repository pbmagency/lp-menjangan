const https = require('https');
https.get('https://menjangansnorkelingtripanddiving.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Ignition puts the JSON payload in window.data or a script tag
    const match = data.match(/window\.data\s*=\s*(\{.+?\});\s*<\/script>/s) ||
                  data.match(/data-props="([^"]+)"/) ||
                  data.match(/"message":"([^"]+)"/) ||
                  data.match(/class="exception_title"[^>]*>([^<]+)/);
    
    if (match) {
      console.log('Match found:\n', match[1].slice(0, 1000));
    } else {
      // Look for text in headings
      const h = data.match(/<h2[^>]*>(.*?)<\/h2>/is) || data.match(/<h1[^>]*>(.*?)<\/h1>/is);
      console.log('Heading:\n', h ? h[1] : 'None');
    }
  });
});
