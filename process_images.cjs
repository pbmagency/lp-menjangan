const fs = require('fs');
const https = require('https');
const path = require('path');
const { execSync } = require('child_process');

const urls = [
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Anemone-fish-Menjangan-Island.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Anemone-fish-Menjangan-Island-350x350.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Colorful-coral-Menjangan-Island.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Colorful-coral-Menjangan-Island-350x350.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Desain-tanpa-judul-350x350.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Menjangan-Island-West-Bali-National-park.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Scuba-Diving-Menjangan-3.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Scuba-Diving-Menjangan-4.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Scuba-Diving-Menjangan-5.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Scuba-Diving-Menjangan-7.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Snorkeling-Menjangan-Island-1.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Snorkeling-Menjangan-Island-2.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Snorkeling-Menjangan-Island-3.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Snorkeling-Menjangan-Island-4.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Snorkeling-Menjangan-Island-5.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Tons-of-fishes-At-Menjangan-Island.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Tons-of-fishes-At-Menjangan-Island-350x350.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Turtles-Menjangan-Island.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Turtles-Menjangan-Island-350x350.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Wild-Deers-at-Menjangan-Island.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2024/02/Wild-Deers-at-Menjangan-Island-350x350.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/518311948_739445245713673_2929780841752963449_n.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/518408166_741022225555975_840694571809901799_n.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/519396628_743465071978357_2561587557975164201_n.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/Bali-Untold-Logo-Final-1-300x90-1.webp',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/diving-menjangan-island1.png',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/GetYourGuide_Logo.svg_.webp',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/GOPR9465-scaled-1.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/GOPR9548-scaled-1.jpg',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/images__2_-removebg-preview.png',
'https://menjanganislandtrip.com/wp-content/uploads/2026/08/yandexmaps-removebg-previewnorm.png'
];

const dir = 'public/uploads/wp';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function processImages() {
  let bladeContent = fs.readFileSync('resources/views/landing.blade.php', 'utf8');
  for (const url of urls) {
    const filename = path.basename(url);
    const basename = filename.substring(0, filename.lastIndexOf('.')) || filename;
    const dest = path.join(dir, filename);
    const webpDest = path.join(dir, basename + '.webp');
    
    console.log('Downloading ' + filename);
    try {
      await new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
          if (response.statusCode !== 200) {
            reject(new Error('Status: ' + response.statusCode));
            return;
          }
          response.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      });

      console.log('Optimizing ' + filename);
      execSync(`node -e "require('sharp')('${dest.replace(/\\/g, '\\\\')}').webp({quality: 70}).toFile('${webpDest.replace(/\\/g, '\\\\')}')"`);
      
      bladeContent = bladeContent.split(url).join(`{{ asset('uploads/wp/${basename}.webp') }}`);
    } catch (e) {
      console.error('Failed on ' + filename + ': ' + e.message);
    }
  }
  fs.writeFileSync('resources/views/landing.blade.php', bladeContent);
  console.log('All done!');
}

processImages();
