const fs = require('fs');
const file = 'app/Http/Middleware/SecurityHeaders.php';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"script-src-elem 'self' 'unsafe-inline'"/, "\"script-src-elem 'self' 'unsafe-inline'\"\n                .' https://unpkg.com'");
content = content.replace(/ \.' https:\/\/static\.cloudflareinsights\.com https:\/\/cloudflareinsights\.com',/, 
    " .' https://static.cloudflareinsights.com https://cloudflareinsights.com'\n                .' https://unpkg.com',");
content = content.replace(/"style-src 'self' 'unsafe-inline'",/, "\"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com\",");
content = content.replace(/"font-src 'self'",/, "\"font-src 'self' https://fonts.gstatic.com\",");
// For img-src, just add menjanganislandtrip.com just in case
content = content.replace(/"img-src 'self' data: blob:"/, "\"img-src 'self' data: blob:\"\n                .' https://menjanganislandtrip.com'");

fs.writeFileSync(file, content, 'utf8');
