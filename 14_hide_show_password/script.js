let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

eyeIcon.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/14_hide_show_password/images/eye-open.png"
    } else {
        password.type = "password";
        eyeIcon.src = "https://raw.githubusercontent.com/ajy-ocean/vanilla_p100_challenge/master/14_hide_show_password/images/eye-close.png"
    }
}