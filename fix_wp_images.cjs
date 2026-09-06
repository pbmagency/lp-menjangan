const fs = require('fs');
const file = 'resources/views/c1-lp.blade.php';
let content = fs.readFileSync(file, 'utf8');

// Replace external WordPress images with local webp assets
content = content.replace(/https:\/\/menjanganislandtrip\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/([^"'\s]+)\.(jpg|jpeg|png)/g, (match, filename) => {
    return "{{ asset('uploads/wp/" + filename + ".webp') }}";
});

fs.writeFileSync(file, content, 'utf8');
