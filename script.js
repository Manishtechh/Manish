// Dark Mode
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

// Scroll Progress
window.onscroll = function () {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Terminal Intro
const text = "A Writer By Passion And Software Engineer By Proffesstion";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.querySelector(".terminal-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();