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
    "32_drum_kit": "https://codepen.io/ajy_ocean/full/JoXxNgK",
    "33_clock": "https://codepen.io/ajy_ocean/full/ZYWwKgg",
    "34_css_variables": "https://codepen.io/ajy_ocean/full/wBGNewx",
    "35_cardio_day": "https://codepen.io/ajy_ocean/full/ogxmwNZ",
    "36_panel_gallery": "https://codepen.io/ajy_ocean/full/XJdOgJb",
    "37_type_ahead": "https://codepen.io/ajy_ocean/full/pvyGwvm",
    "38_second_cardio": "https://codepen.io/ajy_ocean/full/VYagWLW",
    "39_html_canvas": "https://codepen.io/ajy_ocean/full/ZYWwybE",
    "40_dev_tools": "https://codepen.io/ajy_ocean/full/yyOZXYm",
    "41_hold_shift_checkbox": "https://codepen.io/ajy_ocean/full/WbwPOrP",
    "42_custom_video_player": "https://codepen.io/ajy_ocean/full/yyOZXOm",
    "43_key_sequence_detection": "https://codepen.io/ajy_ocean/full/azNXwBm",
    "44_slide_in_on_scroll": "https://codepen.io/ajy_ocean/full/myPvwRL",
    "45_references_copying": "https://codepen.io/ajy_ocean/full/xbVMrqg",
    "46_localstorage": "https://codepen.io/ajy_ocean/full/ZYWwyKG",
    "47_mouse_move_effect": "https://codepen.io/ajy_ocean/full/PwNVjmd",
    "48_sort_without_articles": "https://codepen.io/ajy_ocean/full/gbrqRRd",
    "48_sort_without_articles": "https://codepen.io/ajy_ocean/full/gbrqRRd",
    "49_adding_time_using_reduce": "https://codepen.io/ajy_ocean/full/GgZzEvB",
    "50_webcam_fun": "https://codepen.io/ajy_ocean/full/YPqBQre",
    "51_speech_detection": "https://codepen.io/ajy_ocean/full/RNavgxJ",
    "52_geolocation": "https://codepen.io/ajy_ocean/full/LENqLrO",
    "53_follow_link": "https://codepen.io/ajy_ocean/full/xbVMrJL",
    "54_text_to_speech": "https://codepen.io/ajy_ocean/full/KwzJqxp",
    "55_sticky_nav": "https://codepen.io/ajy_ocean/full/myPvwGz",
    "56_event_propagation": "https://codepen.io/ajy_ocean/full/GgZzEwP",
    "57_stripe_follow_links": "https://codepen.io/ajy_ocean/full/OPNdgrG",
    "58_click_drag": "https://codepen.io/ajy_ocean/full/LENqLad",
    "59_video_speed_controller": "https://codepen.io/ajy_ocean/full/raePwby",
    "60_countdown": "https://codepen.io/ajy_ocean/full/ByKMZEg",
    "61_whack_a_mole": "https://codepen.io/ajy_ocean/full/dPMaREK",
    "62_tip-calculator": "https://codepen.io/ajy_ocean/full/jEqdwjb",
    "63_testimonial_slider": "https://codepen.io/ajy_ocean/full/azNXwgV",
    "63_testimonial_slider": "https://codepen.io/ajy_ocean/full/azNXwgV",
    "64_rock_paper_scissors_game": "https://codepen.io/ajy_ocean/full/MYyLoNb",
    "65_video_trailer_popup": "https://codepen.io/ajy_ocean/full/QwNYMLj",
    "66_change_tabs": "https://codepen.io/ajy_ocean/full/ByKMdBX",
    "67_step_progress_bar": "https://codepen.io/ajy_ocean/full/GgZzvRL",
    "68_random_photos": "https://codepen.io/ajy_ocean/full/jEqdLEq",
    "69_random_color_generator": "https://codepen.io/ajy_ocean/full/gbrqxbJ",
    "70_heart_trail_animation": "https://codepen.io/ajy_ocean/full/MYyLvwJ",
    "71_emoji_generator": "https://codepen.io/ajy_ocean/full/myPvMJo",
    "72_loading_bar": "https://codepen.io/ajy_ocean/full/MYyLvap",
    "73_button_ripple_effect": "https://codepen.io/ajy_ocean/full/GgZzvpa",
    "74_bmi_calci": "https://codepen.io/ajy_ocean/full/pvyGrgN",
    "75_blurred_background_popup": "https://codepen.io/ajy_ocean/full/VYagzeV",
    "76_auto_text_effect_animation": "https://codepen.io/ajy_ocean/full/MYyLvyp",
    "77_animated_search_bar": "https://codepen.io/ajy_ocean/full/ZYWwJOy",
    "78_recipe_book_app": "https://codepen.io/ajy_ocean/full/dPMazXQ",
    "79_dice_roll_simulator": "https://codepen.io/ajy_ocean/full/NPNovRx",
    "80_mouse_event": "https://codepen.io/ajy_ocean/full/JoXxyRZ",
    "81_double_landing_page": "https://codepen.io/ajy_ocean/full/MYyLvbm",
    "82_background_video": "https://codepen.io/ajy_ocean/full/qEZgXqy",
    "83_image_search_app": "https://codepen.io/ajy_ocean/full/MYyLvmo",
    "84_emoji_rating": "https://codepen.io/ajy_ocean/full/RNavZVm",
    "85_sidebar": "https://codepen.io/ajy_ocean/full/ZYWwJyX",
    "86_color-flipper": "https://codepen.io/ajy_ocean/full/jEqdLLy",
    "87_counter": "https://codepen.io/ajy_ocean/full/raePzGp",
    "88_review": "https://codepen.io/ajy_ocean/full/WbwPEXG",
    "89_navbar": "https://codepen.io/ajy_ocean/full/dPMazZr",
    "90_responsive_sidebar": "https://codepen.io/ajy_ocean/full/wBGNqpG",
    "91_modal": "https://codepen.io/ajy_ocean/full/ZYWwJva",
    "92_question": "https://codepen.io/ajy_ocean/full/myPvMXb",
    "93_menu": "https://codepen.io/ajy_ocean/full/dPMazmL",
    "94_video_preloader": "https://codepen.io/ajy_ocean/full/MYyLvGO",
    "95_scroll": "https://codepen.io/ajy_ocean/full/vEGbJjo",
    "96_tabs": "https://codepen.io/ajy_ocean/full/XJdOaYq",
    "97_countdown_timer": "https://codepen.io/ajy_ocean/full/gbrqxda",
    "98_lorem-ipsum": "https://codepen.io/ajy_ocean/full/raePzqv",
    "99_grocery-bud": "https://codepen.io/ajy_ocean/full/myPvMQy",
    "100_slider": "https://codepen.io/ajy_ocean/full/MYyLvzr",
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
