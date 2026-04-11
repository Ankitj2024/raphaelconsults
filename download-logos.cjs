const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const list = {
    "University of Liverpool": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Arms_of_the_University_of_Liverpool.svg/500px-Arms_of_the_University_of_Liverpool.svg.png",
    "Coventry University": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Coventry_University_logo.svg/500px-Coventry_University_logo.svg.png",
    "University of Birmingham": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/University_of_Birmingham_logo.svg/500px-University_of_Birmingham_logo.svg.png",
    "Anglia Ruskin University": "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Anglia_Ruskin_University_logo.svg/500px-Anglia_Ruskin_University_logo.svg.png",
    "Queen Mary University of London": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Queen_Mary_University_of_London_logo.svg/500px-Queen_Mary_University_of_London_logo.svg.png",
    "University of Sheffield": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/University_of_Sheffield_Logo.svg/500px-University_of_Sheffield_Logo.svg.png",
    "Dublin City University": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Dublin_City_University_logo.svg/500px-Dublin_City_University_logo.svg.png",
    "University of Limerick": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/University_of_Limerick_logo.svg/500px-University_of_Limerick_logo.svg.png",
    "Aston University": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aston_University_logo.svg/500px-Aston_University_logo.svg.png",
    "Bangor University": "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Bangor_University_logo.svg/500px-Bangor_University_logo.svg.png"
};

for (const [name, url] of Object.entries(list)) {
    const filename = name.replace(/ /g, '_').toLowerCase() + '.png';
    const filepath = path.join(dir, filename);
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36. UniversityApp/1.0'
        }
    };
    https.get(url, options, (res) => {
        const file = fs.createWriteStream(filepath);
        res.pipe(file);
        file.on('finish', () => file.close());
    });
}
console.log("Downloaded all logos properly!");
