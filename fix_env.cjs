const fs = require('fs');
let content = fs.readFileSync('.env', 'utf8');

content = content.replace(/^APP_URL=.*$/m, 'APP_URL=http://127.0.0.1:8000');
content = content.replace(/^ASSET_URL=.*$/m, 'ASSET_URL=');

fs.writeFileSync('.env', content, 'utf8');
