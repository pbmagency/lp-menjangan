const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

// Replace the <x-dc> tags
content = content.replace(/<x-dc>/g, '<div class="x-dc">');
content = content.replace(/<\/x-dc>/g, '</div>');

fs.writeFileSync(file, content, 'utf8');
