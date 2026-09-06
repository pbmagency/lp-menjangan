const fs = require('fs');
let content = fs.readFileSync('.env', 'utf8');

content = content.replace(/^APP_ENV=.*$/m, 'APP_ENV=local');
content = content.replace(/^APP_DEBUG=.*$/m, 'APP_DEBUG=true');
content = content.replace(/^APP_URL=.*$/m, 'APP_URL=http://localhost:8000');
content = content.replace(/^ASSET_URL=.*$/m, 'ASSET_URL=http://localhost:8000');
content = content.replace(/^LOG_LEVEL=.*$/m, 'LOG_LEVEL=debug');

fs.writeFileSync('.env', content, 'utf8');
