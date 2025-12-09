// update-assets.js
const fs = require("fs");
const path = require("path");

const REPO_BASE =
    "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master";
const folders = fs
    .readdirSync("./")
    .filter((f) => fs.statSync(f).isDirectory() && /^\d+/.test(f));

folders.forEach((folder) => {
    // Update index.html
    const htmlPath = path.join(folder, "index.html");
    if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, "utf8");
        // Images in HTML
        html = html.replace(
            /src="(?:\.\/)?images\/([^"]+)"/g,
            `src="${REPO_BASE}/${folder}/images/$1"`
        );
        // Videos in HTML
        html = html.replace(
            /src="(?:\.\/)?videos\/([^"]+)"/g,
            `src="${REPO_BASE}/${folder}/videos/$1"`
        );
        fs.writeFileSync(htmlPath, html);
        console.log(`Updated HTML for ${folder}`);
    }

    // Update style.css (if backgrounds or other assets)
    const cssPath = path.join(folder, "style.css"); // Or 'main.css'—add if needed
    if (fs.existsSync(cssPath)) {
        let css = fs.readFileSync(cssPath, "utf8");
        css = css.replace(
            /url\(['"]?(?:\.\/)?images\/([^'"]+)['"]?\)/g,
            `url('${REPO_BASE}/${folder}/images/$1')`
        );
        css = css.replace(
            /url\(['"]?(?:\.\/)?videos\/([^'"]+)['"]?\)/g,
            `url('${REPO_BASE}/${folder}/videos/$1')`
        );
        fs.writeFileSync(cssPath, css);
        console.log(`Updated CSS for ${folder}`);
    }
});
console.log("All updates complete—using master branch!");
