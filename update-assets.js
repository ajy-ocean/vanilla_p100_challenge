// update-assets.js
const fs = require("fs");
const path = require("path");

const REPO_BASE =
    "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/main";
const folders = fs
    .readdirSync("./")
    .filter((f) => fs.statSync(f).isDirectory() && /^\d+/.test(f));

folders.forEach((folder) => {
    const htmlPath = path.join(folder, "index.html");
    if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, "utf8");
        // Replace images
        html = html.replace(
            /src="(?:\.\/)?images\/([^"]+)"/g,
            `src="${REPO_BASE}/${folder}/images/$1"`
        );
        // Replace videos
        html = html.replace(
            /src="(?:\.\/)?videos\/([^"]+)"/g,
            `src="${REPO_BASE}/${folder}/videos/$1"`
        );
        fs.writeFileSync(htmlPath, html);
    }
});
console.log("Updated all projects!");
