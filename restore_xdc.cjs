const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<div class="x-dc">/g, '<x-dc>');
content = content.replace(/<\/div>\n<script type="text\/x-dc"/g, '</x-dc>\n<script type="text/x-dc"');

fs.writeFileSync(file, content, 'utf8');
