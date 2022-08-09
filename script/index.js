const toTopButton = document.getElementById("toTop");

let prevScrollPos = window.scrollY;
window.onscroll = function() {
    (prevScrollPos > window.scrollY ? toTopButton.style.opacity = "1" : toTopButton.style.opacity = "0");
    prevScrollPos = window.scrollY;
}