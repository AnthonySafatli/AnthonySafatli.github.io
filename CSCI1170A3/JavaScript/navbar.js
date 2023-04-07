let navBar = document.querySelector("nav");

function toggleMobileNav(event) {
    if (navBar.classList.length == 0) {
        navBar.classList.add("invisible");
    } else {
        navBar.classList.remove("invisible");
    }
}

function resize(event) {
    if (window.innerWidth > 1000) {
        navBar.classList.add("invisible");
    }
}

let navButton = document.getElementById("hamburger")
navButton.addEventListener("click", toggleMobileNav);

window.onresize = resize;