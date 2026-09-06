const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

// The file has \r\n, so we replace carefully.
content = content.replace(/<\/div>\r?\n<script type="text\/x-dc"/, '</x-dc>\n<script type="text/x-dc"');

fs.writeFileSync(file, content, 'utf8');
