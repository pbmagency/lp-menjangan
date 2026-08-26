const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const mappings = [
  { in: '_3052419.JPG', out: 'try-scuba-1.webp' },
  { in: 'GP010609.JPG', out: 'try-scuba-2.webp' },
  { in: 'P8030109.JPG', out: 'try-scuba-3.webp' },
  { in: 'P8030098.JPG', out: 'try-scuba-4.webp' },
  { in: 'GP019647.JPG', out: 'try-scuba-5.webp' },
  { in: 'IMG_0327.JPEG', out: 'try-scuba-6.webp' }
];

const dir = 'public/uploads/try_scuba_new';

async function processImages() {
  for (const m of mappings) {
    const inputPath = path.join(dir, m.in);
    const outputPath = path.join(dir, m.out);
    
    // Wait until file exists (polling if necessary)
    let retries = 0;
    while (!fs.existsSync(inputPath) && retries < 60) {
      console.log('Waiting for ' + m.in + ' to download...');
      await new Promise(r => setTimeout(r, 2000));
      retries++;
    }
    
    if (fs.existsSync(inputPath)) {
      console.log('Optimizing ' + m.in + ' to ' + m.out);
      try {
        await sharp(inputPath).webp({ quality: 70 }).toFile(outputPath);
      } catch (e) {
        console.error('Error optimizing ' + m.in, e);
      }
    } else {
      console.error('File not found: ' + m.in);
    }
  }
}
processImages().catch(console.error);
