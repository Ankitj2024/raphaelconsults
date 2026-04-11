const fs = require('fs');
const http = require('http');

const delay = ms => new Promise(res => setTimeout(res, ms));

function fetchDomain(name) {
    return new Promise((resolve, reject) => {
        http.get(`http://universities.hipolabs.com/search?name=${encodeURIComponent(name)}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (parsed && parsed.length > 0 && parsed[0].domains) {
                        resolve(parsed[0].domains[0]);
                    } else {
                        resolve(null);
                    }
                } catch(e) { resolve(null); }
            });
        }).on('error', e => resolve(null));
    });
}

async function run() {
    let content = fs.readFileSync('data/destinations.ts', 'utf8');
    const regex = /{ name: "(.*?)", location: "(.*?)", courseCount: "(.*?)" }/g;
    let match;
    const items = [];
    while ((match = regex.exec(content)) !== null) {
        items.push({ full: match[0], name: match[1], loc: match[2], count: match[3] });
    }

    console.log(`Found ${items.length} universities.`);
    let newContent = content;

    for (const item of items) {
        const domain = await fetchDomain(item.name);
        let replacement;
        if (domain) {
            replacement = `{ name: "${item.name}", location: "${item.loc}", courseCount: "${item.count}", logo: "https://logo.clearbit.com/${domain}" }`;
            console.log(`Found domain for ${item.name}: ${domain}`);
        } else {
            replacement = `{ name: "${item.name}", location: "${item.loc}", courseCount: "${item.count}" }`;
            console.log(`NO DOMAIN for ${item.name}`);
        }
        newContent = newContent.replace(item.full, replacement);
        await delay(50);
    }

    fs.writeFileSync('data/destinations.ts', newContent);
    console.log('Done!');
}
run();
