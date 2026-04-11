const fs = require('fs');
const https = require('https');

async function getWiki(title) {
    return new Promise(res => {
        let searchName = title.includes('(Via') ? title.split(' (')[0] : title;
        https.get(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchName)}&prop=pageimages&format=json&pithumbsize=500`, 
        { headers: {'User-Agent': 'NodeApp/1.0'} }, 
        r => {
            let d=''; 
            r.on('data', c=> d+=c); 
            r.on('end', () => {
                try {
                    let j = JSON.parse(d);
                    let p = j.query.pages;
                    let id = Object.keys(p)[0];
                    res(id != '-1' && p[id].thumbnail ? p[id].thumbnail.source : null);
                } catch(e) { res(null); }
            });
        }).on('error', ()=>res(null));
    });
}

(async () => {
    let text = fs.readFileSync('data/destinations.ts', 'utf8');
    let rex = /name: "(.*?)"/g;
    let m, names=[];
    while ((m=rex.exec(text))) names.push(m[1]);
    names = [...new Set(names)];
    
    let map = {};
    for (const [index, name] of Object.entries(names)) {
        let url = await getWiki(name);
        if(url) {
            map[name] = url;
            console.log(`Found: ${name}`);
        } else {
            console.log(`Missing: ${name}`);
        }
        await new Promise(r => setTimeout(r, 50));
    }
    fs.writeFileSync('data/logos.json', JSON.stringify(map, null, 2));
    console.log("Written to data/logos.json");
})();
