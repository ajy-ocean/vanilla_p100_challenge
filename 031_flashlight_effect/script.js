let mouseX = 0;
let mouseY = 0;

let flashLight = document.getElementById("flashlight");
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        return true;
    }
    catch (e) {
        return false;
    }
};

function getMousePosition(e) {
    mouseX  = !isTouchDevice() ? 
    e.pageX : e.touches[0].pageX;
    
    mouseY = !isTouchDevice() ? 
    e.pageY : e.touches[0].pageY;

    flashLight.style.setProperty("--Xpos", mouseX + "px");
    flashLight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", 
    getMousePosition);

document.addEventListener("touchmove",
    getMousePosition);
