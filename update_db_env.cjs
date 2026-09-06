const fs = require('fs');
let content = fs.readFileSync('.env', 'utf8');

content = content.replace(/^DB_CONNECTION=.*$/m, 'DB_CONNECTION=sqlite');
content = content.replace(/^DB_HOST=.*$/m, '# DB_HOST=127.0.0.1');
content = content.replace(/^DB_PORT=.*$/m, '# DB_PORT=3306');
content = content.replace(/^DB_DATABASE=.*$/m, '# DB_DATABASE=laravel');
content = content.replace(/^DB_USERNAME=.*$/m, '# DB_USERNAME=root');
content = content.replace(/^DB_PASSWORD=.*$/m, '# DB_PASSWORD=');

fs.writeFileSync('.env', content, 'utf8');
