const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Resize + recompress the images the landing page actually displays.
// Photos get quality 70 (matches process_images.cjs), logos get 85.
const jobs = [
    // Hero (LCP element): full-size recompress + responsive variants.
    // 480w covers the Lighthouse mobile viewport (412px) at DPR 1, and is the
    // variant that gets preloaded so LCP stops paying for 1200px worth of bytes.
    // Source is the -compressed duplicate so the original stays untouched.
    { in: 'public/hero-snorkeling-compressed.webp', out: 'public/hero-snorkeling.webp', width: 1200, quality: 70 },
    { in: 'public/hero-snorkeling-compressed.webp', out: 'public/hero-snorkeling-800.webp', width: 800, quality: 70 },
    { in: 'public/hero-snorkeling-compressed.webp', out: 'public/hero-snorkeling-480.webp', width: 480, quality: 70 },

    // Header/footer logo — displayed at 52–88px, so 128px is plenty.
    { in: 'public/logo-menjangan.webp', out: 'public/logo-menjangan.webp', width: 128, quality: 85 },

    // Trip-card cover images (object-fit: cover in ~320px-tall cards).
    { in: 'public/uploads/wp/GOPR9548-scaled-1.webp', out: 'public/uploads/wp/GOPR9548-scaled-1.webp', width: 480, quality: 70 },
    { in: 'public/uploads/try_scuba/new_try_scuba.webp', out: 'public/uploads/try_scuba/new_try_scuba.webp', width: 480, quality: 70 },
    { in: 'public/uploads/scuba/new_scuba.webp', out: 'public/uploads/scuba/new_scuba.webp', width: 500, quality: 70 },
    { in: 'public/uploads/snorkeling/53EB5B71-90A5-4B43-B247-FCF43536ABBD.webp', out: 'public/uploads/snorkeling/53EB5B71-90A5-4B43-B247-FCF43536ABBD.webp', width: 500, quality: 70 },

    // Try-scuba gallery (lazy but 1–1.3MB at 4000–5568px wide — way oversize
    // for 800px-tall cards). Resize to 800w, matching the width attributes.
    { in: 'public/uploads/try_scuba_new/try-scuba-1.webp', out: 'public/uploads/try_scuba_new/try-scuba-1.webp', width: 800, quality: 70 },
    { in: 'public/uploads/try_scuba_new/try-scuba-2.webp', out: 'public/uploads/try_scuba_new/try-scuba-2.webp', width: 800, quality: 70 },
    { in: 'public/uploads/try_scuba_new/try-scuba-3.webp', out: 'public/uploads/try_scuba_new/try-scuba-3.webp', width: 800, quality: 70 },
    { in: 'public/uploads/try_scuba_new/try-scuba-4.webp', out: 'public/uploads/try_scuba_new/try-scuba-4.webp', width: 800, quality: 70 },
    { in: 'public/uploads/try_scuba_new/try-scuba-5.webp', out: 'public/uploads/try_scuba_new/try-scuba-5.webp', width: 800, quality: 70 },
    { in: 'public/uploads/try_scuba_new/try-scuba-6.webp', out: 'public/uploads/try_scuba_new/try-scuba-6.webp', width: 800, quality: 70 },

    // Platform logos — displayed at 30–34px height.
    { in: 'public/uploads/wp/GetYourGuide_Logo.svg_.webp', out: 'public/uploads/wp/GetYourGuide_Logo.svg_.webp', width: 200, quality: 85 },
    { in: 'public/uploads/wp/Bali-Untold-Logo-Final-1-300x90-1.webp', out: 'public/uploads/wp/Bali-Untold-Logo-Final-1-300x90-1.webp', width: 150, quality: 85 },
    { in: 'public/uploads/wp/images__2_-removebg-preview.webp', out: 'public/uploads/wp/images__2_-removebg-preview.webp', width: 150, quality: 85 },
    { in: 'public/uploads/wp/yandexmaps-removebg-previewnorm.webp', out: 'public/uploads/wp/yandexmaps-removebg-previewnorm.webp', width: 160, quality: 85 },
];

(async () => {
    for (const job of jobs) {
        const meta = await sharp(job.in).metadata();
        const buffer = await sharp(job.in)
            .resize({ width: job.width, withoutEnlargement: true })
            .webp({ quality: job.quality })
            .toBuffer();
        // Write to a sibling .new file — the caller swaps it into place with
        // bash `rm && mv`, because node fs ops can hit transient Windows locks.
        fs.writeFileSync(job.out + '.new', buffer);
        const out = await sharp(job.out).metadata();
        const kb = Math.round(buffer.length / 1024);
        console.log(
            path.relative(process.cwd(), job.in).padEnd(58),
            `${meta.width}x${meta.height} -> ${out.width}x${out.height}`,
            `${kb}KB`,
        );
    }
})().catch((err) => {
    console.error(err);
    process.exit(1);
});