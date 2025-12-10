// js/script.js (your showcase site—already good, but confirming master usage)
const REPO_USER = "ajy-ocean";
const REPO_NAME = "vanilla_p100_challenge";
const API_URL = `https://api.github.com/repos/${REPO_USER}/${REPO_NAME}/contents`; // Auto-uses default (master)

const searchInput = document.getElementById("search");
const projectsContainer = document.getElementById("projects");

// Your CODEPEN_MAP here (add as you create Pens)
const CODEPEN_MAP = {
    '1_weather-app': 'https://codepen.io/ajy_ocean/full/ZYWVgYy'
}; // e.g., {'1_weather-app': 'https://codepen.io/ajy-ocean/full/abc123'};

async function fetchProjects() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const folders = data.filter((item) => item.type === "dir");
        folders.sort((a, b) => {
            const numA = parseInt(a.name.match(/^\d+/)?.[0] || "999");
            const numB = parseInt(b.name.match(/^\d+/)?.[0] || "999");
            return numA - numB;
        });
        displayProjects(folders);
    } catch (error) {
        console.error("Error fetching projects:", error);
        projectsContainer.innerHTML =
            "<p>Error loading projects. Check console.</p>";
    }
}

function humanizeTitle(folderName) {
    return folderName
        .replace(/^\d+_/, "")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
}

function getCodePenUrl(folderName) {
    return (
        CODEPEN_MAP[folderName] ||
        `https://codepen.io/pen/?editors=1100&title=${encodeURIComponent(
            humanizeTitle(folderName)
        )}`
    );
}

function displayProjects(folders) {
    projectsContainer.innerHTML = folders
        .map((folder) => {
            const title = humanizeTitle(folder.name);
            const githubUrl = `https://github.com/${REPO_USER}/${REPO_NAME}/tree/master/${folder.name}`; // Locked to master
            const codepenUrl = getCodePenUrl(folder.name);

            return `
      <div class="card" data-title="${title.toLowerCase()}">
        <h3>${title}</h3>
        <div class="card-content">
          <iframe id="codepen" src="${codepenUrl}" title="CodePen Preview"></iframe>
          <a href="${codepenUrl}" target="_blank" class="edit-link" style="display: block; text-align: center; margin: 0.5rem 0; color: #007bff; text-decoration: underline;">Edit CodePen</a>
          <a href="${githubUrl}" target="_blank" class="github-link">View Source on GitHub</a>
        </div>
      </div>
    `;
        })
        .join("");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".card").forEach((card) => {
            const title = card.dataset.title;
            card.style.display = title.includes(query) ? "block" : "none";
        });
    });
}

fetchProjects();
