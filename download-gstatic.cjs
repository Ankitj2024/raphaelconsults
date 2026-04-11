process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const list = {
    "University of Liverpool": "liv.ac.uk",
    "Coventry University": "coventry.ac.uk",
    "University of Birmingham": "bham.ac.uk",
    "Anglia Ruskin University": "anglia.ac.uk",
    "Queen Mary University of London": "qmul.ac.uk",
    "University of Sheffield": "sheffield.ac.uk",
    "Dublin City University": "dcu.ie",
    "University of Limerick": "ul.ie",
    "Aston University": "aston.ac.uk",
    "Bangor University": "bangor.ac.uk"
};

for (const [name, domain] of Object.entries(list)) {
    const filename = name.replace(/ /g, '_').toLowerCase() + '.png';
    const filepath = path.join(dir, filename);
    const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
    
    https.get(url, (res) => {
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => file.close());
    });
}
console.log("Downloaded robust local favicons.");
