const fs = require('fs');
let text = fs.readFileSync('data/destinations.ts', 'utf8');
text = text.replace(/https:\/\/logo\.clearbit\.com\/([^"]+)/g, (match, p1) => {
   return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${p1}&size=128`;
});
fs.writeFileSync('data/destinations.ts', text);
