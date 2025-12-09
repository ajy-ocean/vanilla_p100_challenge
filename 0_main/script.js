// js/script.js
const REPO_USER = "ajy-ocean";
const REPO_NAME = "vanilla_p100_challenge";
const API_URL = `https://api.github.com/repos/${REPO_USER}/${REPO_NAME}/contents`;

const searchInput = document.getElementById("search");
const projectsContainer = document.getElementById("projects");

// Placeholder: Map folder to CodePen URL later (e.g., after you create them)
// For now, uses a blank editor. Update this object with { '1_weather-app': 'https://codepen.io/your-pen-id/full' }
const CODEPEN_MAP = {}; // Example: { '1_weather-app': 'https://codepen.io/ajy-ocean/pen/abc123?editors=1100' }

async function fetchProjects() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Filter folders only
        const folders = data.filter((item) => item.type === "dir");

        // Sort numerically (e.g., 1, 2, 10...)
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
        .replace(/^\d+_/, "") // Remove number prefix
        .replace(/_/g, " ") // Underscores to spaces
        .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize words
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
            const githubUrl = `https://github.com/${REPO_USER}/${REPO_NAME}/tree/master/${folder.name}`;
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

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".card").forEach((card) => {
            const title = card.dataset.title;
            card.style.display = title.includes(query) ? "block" : "none";
        });
    });
}

// Load on page ready
fetchProjects();
