const fs = require('fs');
const file = 'app/Http/Middleware/SecurityHeaders.php';
let content = fs.readFileSync(file, 'utf8');

// Add unsafe-eval to script-src
content = content.replace(/("script-src 'self' 'nonce-.*')/g, "$1 'unsafe-eval'");
// Add unsafe-eval to script-src-elem
content = content.replace(/("script-src-elem 'self' 'unsafe-inline')/g, "$1 'unsafe-eval'");

fs.writeFileSync(file, content, 'utf8');
