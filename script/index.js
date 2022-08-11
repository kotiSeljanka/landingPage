const toTopButton = document.getElementById("toTop");

const menuButtonOuter = document.getElementById("menuButtonOuter");
const menuButtonInner = document.getElementById("menuButtonInner")
const padMenu = document.getElementById("navMobile");

let prevScrollPos = window.scrollY;
window.onscroll = function() {
    (prevScrollPos > window.scrollY ? toTopButton.style.opacity = "1" : toTopButton.style.opacity = "0");
    prevScrollPos = window.scrollY;
}

function togglePadMenu() {
    padMenu.classList.toggle("padVisible");
    menuButtonInner.classList.toggle("padArrowVisible");
}