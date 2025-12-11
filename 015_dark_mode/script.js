var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/15_dark_mode/images/sun.png";
    } else {
        icon.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/15_dark_mode/images/moon.png";
    }
}