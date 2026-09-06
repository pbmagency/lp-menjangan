const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

// Replace standard static files
content = content.replace(/href="industry\.css"/g, 'href="{{ asset(\'c1/industry.css\') }}"');
content = content.replace(/src="support\.js"/g, 'src="{{ asset(\'c1/support.js\') }}"');
content = content.replace(/src="logo-menjangan\.webp"/g, 'src="{{ asset(\'c1/logo-menjangan.webp\') }}"');
content = content.replace(/src="hero-reef-diver\.png"/g, 'src="{{ asset(\'c1/hero-reef-diver.png\') }}"');
content = content.replace(/src="hero-snorkeling\.png"/g, 'src="{{ asset(\'c1/hero-snorkeling.png\') }}"');
content = content.replace(/src="problem-reef\.png"/g, 'src="{{ asset(\'c1/problem-reef.png\') }}"');

// Replace uploads/ and screenshots/ correctly using regex groups
content = content.replace(/src="((uploads|screenshots)\/[^"]+)"/g, 'src="{{ asset(\'c1/\') }}"');

fs.writeFileSync(file, content, 'utf8');
console.log("Assets replaced successfully");
