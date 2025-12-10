const REPO_USER = "ajy-ocean";
const REPO_NAME = "vanilla_p100_challenge";
const API_URL = `https://api.github.com/repos/${REPO_USER}/${REPO_NAME}/contents`;

const searchInput = document.getElementById("search");
const projectsContainer = document.getElementById("projects");

const CODEPEN_MAP = {
    "1_weather-app": "https://codepen.io/ajy_ocean/full/ZYWVgYy",
    "2_todolist": "https://codepen.io/ajy_ocean/full/MYyLbKB",
    "3_quiz": "https://codepen.io/ajy_ocean/full/LENqbbE",
    "4_random_password_generator": "https://codepen.io/ajy_ocean/full/EaKrNmB",
    "5_notes_app": "https://codepen.io/ajy_ocean/full/YPqBpxW",
    "6_age_calculator": "https://codepen.io/ajy_ocean/full/XJdONaw",
    "7_quote_generator": "https://codepen.io/ajy_ocean/full/MYyLbrL",
    "8_qr_generator": "https://codepen.io/ajy_ocean/full/emZxBVo",
    "9_toast_notification": "https://codepen.io/ajy_ocean/full/pvyGRzm",
    "10_music_player": "https://codepen.io/ajy_ocean/full/EaKrZKy",
    "11_stopwatch": "https://codepen.io/ajy_ocean/full/XJdOpjX",
    "12_calculator": "https://codepen.io/ajy_ocean/full/jEqdyVj",
    "13_popup": "https://codepen.io/ajy_ocean/full/EaKrZmN",
    "14_hide_show_password": "https://codepen.io/ajy_ocean/full/RNavKgy",
    "15_dark_mode": "https://codepen.io/ajy_ocean/full/JoXxErJ",
    "16_form_validation": "https://codepen.io/ajy_ocean/full/bNpzgYJ",
    "17_image_gallery": "https://codepen.io/ajy_ocean/full/ZYWwLxW",
    "18_newsletter_form": "https://codepen.io/ajy_ocean/full/bNpzgvy",
    "19_password_strength": "https://codepen.io/ajy_ocean/full/KwzJaew",
    "20_text_to_speech": "https://codepen.io/ajy_ocean/full/WbwPRKe",
    "21_coming_soon_page": "https://codepen.io/ajy_ocean/full/zxqeZrP",
    "22_img_bg_remove": "https://codepen.io/ajy_ocean/full/XJdOMdz",
    "23_mini_calender": "https://codepen.io/ajy_ocean/full/emZxvzE",
    "24_menu_design": "https://codepen.io/ajy_ocean/full/LENqWRJ",
    "25_circular_progress_bar": "https://codepen.io/ajy_ocean/full/QwNYpGE",
    "26_product_design": "https://codepen.io/ajy_ocean/full/jEqdByV",
    "27_cryptocurrency_website": "https://codepen.io/ajy_ocean/full/bNpzqWE",
    "28_digital_clock": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "29_drag_and_Drop": "https://codepen.io/ajy_ocean/full/QwNYpxp",
    "30_image_search_engine": "https://codepen.io/ajy_ocean/full/PwNVmQK",
    "31_flashlight_effect": "https://codepen.io/ajy_ocean/full/VYagbXK",
    "32_drum_kit": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "33_clock": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "34_css_variables": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "35_cardio_day": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "36_panel_gallery": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "37_type_ahead": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "38_second_cardio": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "39_html_canvas": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "40_dev_tools": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "41_hold_shift_checkbox": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "42_custom_video_player": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "44_slide_in_on_scroll": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "45_references_copying": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "46_localstorage": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "47_mouse_move_effect": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "50_webcam_fun": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "51_speech_detection": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "52_geolocation": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "53_follow_link": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "54_text_to_speech": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "55_sticky_nav": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "56_event_propagation": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "57_stripe_follow_links": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "58_click_drag": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "60_countdown": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "61_whack_a_mole": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "62_tip-calculator": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "63_testimonial_slider": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "66_change_tabs": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "67_step_progress_bar": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "68_random_photos": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "71_emoji_generator": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "72_loading_bar": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "73_button_ripple_effect": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "74_bmi_calci": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "77_animated_search_bar": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "78_recipe_book_app": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "79_dice_roll_simulator": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "80_mouse_event": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "81_double_landing_page": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "82_background_video": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "83_image_search_app": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "84_emoji_rating": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "85_sidebar": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "86_color-flipper": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "87_counter": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "88_review": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "89_navbar": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "90_responsive_sidebar": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "91_modal": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "92_question": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "93_menu": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "94_video_preloader": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "95_scroll": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "96_tabs": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "97_countdown_timer": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "98_lorem-ipsum": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "99_grocery-bud": "https://codepen.io/ajy_ocean/full/zxqeZdW",
    "100_slider": "https://codepen.io/ajy_ocean/full/zxqeZdW",
};

async function fetchProjects() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const folders = data.filter(
            (item) => item.type === "dir" && item.name !== "0_main"
        );
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
