// js/script.js
const REPO_USER = "ajy-ocean";
const REPO_NAME = "vanilla_p100_challenge";
const API_URL = `https://api.github.com/repos/${REPO_USER}/${REPO_NAME}/contents`;

const searchInput = document.getElementById("search");
const projectsContainer = document.getElementById("projects");

// Placeholder: Map folder to CodePen URL later (e.g., after you create them)
const CODEPEN_MAP = {
    '1_weather-app': 'https://codepen.io/ajy_ocean/full/ZYWVgYy',
    '2_todolist': 'https://codepen.io/ajy_ocean/full/MYyLbKB',
    '3_quiz': 'https://codepen.io/ajy_ocean/full/LENqbbE',
    '4_random_password_generator': 'https://codepen.io/ajy_ocean/full/EaKrNmB',
    '5_notes_app': 'https://codepen.io/ajy_ocean/full/YPqBpxW',
    '6_age_calculator': 'https://codepen.io/ajy_ocean/full/XJdONaw',
    '7_quote_generator': 'https://codepen.io/ajy_ocean/full/MYyLbrL',
    '8_qr_generator': 'https://codepen.io/ajy_ocean/full/emZxBVo',
    '9_toast_notification': 'https://codepen.io/ajy_ocean/full/pvyGRzm',
    '10_music_player': 'https://codepen.io/ajy_ocean/full/EaKrZKy',
    '11_stopwatch': 'https://codepen.io/ajy_ocean/full/XJdOpjX',
    '12_calculator': 'https://codepen.io/ajy_ocean/full/jEqdyVj',
    '13_popup': 'https://codepen.io/ajy_ocean/full/EaKrZmN',
    '14_hide_show_password': 'https://codepen.io/ajy_ocean/full/EaKrZmN',
}; // Example: { '1_weather-app': 'https://codepen.io/ajy-ocean/full/abc123' }

async function fetchProjects() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const folders = data.filter(
            (item) => item.type === "dir" && item.name !== "0_main"
        ); // Exclude 0_main
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

function humanizeTitle(name) {
    return name
        .replace(/^\d+_/, "")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
}

function getCodePenUrl(name) {
    return (
        CODEPEN_MAP[name] ||
        `https://codepen.io/pen/?editors=1100&title=${encodeURIComponent(
            humanizeTitle(name)
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
          <a href="${codepenUrl}" target="_blank" class="button codepen-button">Preview in CodePen</a>
          <a href="${githubUrl}" target="_blank" class="button github-button">View Source on GitHub</a>
        </div>
      </div>
    `;
        })
        .join("");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".card").forEach((card) => {
            card.style.display = card.dataset.title.includes(query)
                ? "block"
                : "none";
        });
    });
}

fetchProjects();
