const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join('public', 'uploads', 'try_scuba', 'new_try_scuba.webp');
const tempPath = path.join('public', 'uploads', 'try_scuba', 'new_try_scuba_temp.webp');

async function rotateImage() {
  try {
    // Read to buffer so file is not locked
    const buffer = fs.readFileSync(inputPath);
    
    await sharp(buffer)
      .rotate(270) // 270 degrees clockwise = -90 degrees
      .webp({ quality: 80 })
      .toFile(tempPath);
      
    // Now we can safely replace it
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    console.log('Successfully rotated the image -90 degrees');
  } catch (err) {
    console.error('Failed to rotate image:', err);
  }
}

rotateImage();
