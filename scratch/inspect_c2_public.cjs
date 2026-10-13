const https = require('https');
const fs = require('fs');

async function inspectPublicPage() {
    const url = 'https://menjangansnorkelingtripanddiving.com/wp/c2-lp/?cachebust=' + Date.now();
    https.get(url, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
            console.log('Status:', res.statusCode);
            console.log('Total Length:', body.length);
            fs.writeFileSync('scratch/c2-public-wp.html', body);

            console.log('Has header:', body.includes('<header'));
            console.log('Has hero section:', body.includes('id="top"'));
            console.log('Has guest reviews carousel:', body.includes('id="guest-reviews-carousel"'));
            console.log('Has snorkeling intro:', body.includes('id="snorkeling-intro"'));
            console.log('Has scuba section:', body.includes('id="scuba-diving-section"'));
            console.log('Has discovery scuba:', body.includes('id="discovery-scuba-section"'));
            console.log('Has tripadvisor carousel:', body.includes('id="more-tripadvisor-reviews"'));
            console.log('Has WhatsApp link:', body.includes('wa.me/6281238578042'));
            console.log('Has landing.css stylesheet:', body.includes('landing.css'));
            console.log('Has landing.js script:', body.includes('landing.js'));
            console.log('Has clarity script:', body.includes('y5mhtiav9f'));
            console.log('Has GTM script:', body.includes('GTM-57DRDWXR'));
            console.log('Has data-lg="en":', body.includes('data-lg="en"'));
            console.log('Has data-l="en":', body.includes('data-l="en"'));
            console.log('Has data-l="id":', body.includes('data-l="id"'));

            // Check if any theme Twenty Twenty-Five header/footer leaked
            console.log('Has wp-block-site-title (theme header leak):', body.includes('wp-block-site-title'));
            console.log('Has wp-block-navigation (theme nav leak):', body.includes('wp-block-navigation'));
        });
    });
}

inspectPublicPage().catch(console.error);
