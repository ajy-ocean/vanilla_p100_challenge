const fs = require('fs');
const path = require('path');
const REPO = 'https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master';

fs.readdirSync('.')
    .filter(f => /^\d+/.test(f) && fs.statSync(f).isDirectory())
    .forEach(folder => {
        const html = path.join(folder, 'index.html');
        if (fs.existsSync(html)) {
            let content = fs.readFileSync(html, 'utf8');
            content = content.replace(/src=["'](.\/)?images\//g, `src="${REPO}/${folder}/images/`);
            content = content.replace(/src=["'](.\/)?videos\//g, `src="${REPO}/${folder}/videos/`);
            fs.writeFileSync(html, content);
            console.log('Fixed →', folder);
        }
    });
console.log('ALL DONE!');