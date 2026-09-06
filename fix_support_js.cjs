const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/src="\.\/support\.js"/g, 'src="{{ asset(\'c1/support.js\') }}"');
content = content.replace(/href="\.\/industry\.css"/g, 'href="{{ asset(\'c1/industry.css\') }}"');

fs.writeFileSync(file, content, 'utf8');
