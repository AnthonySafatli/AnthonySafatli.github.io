let root = document.querySelector(':root');

function setTheme(navBackground, navText, navSpecial, bodyBackground, bodyText, bodySpecial) {
    root.style.setProperty('--nav-background', navBackground);
    root.style.setProperty('--nav-text', navText);
    root.style.setProperty('--nav-special', navSpecial);
    root.style.setProperty('--body-background', bodyBackground);
    root.style.setProperty('--body-text', bodyText);
    root.style.setProperty('--body-special', bodySpecial);
}

function setHeroImage(image) {
    let heroImage = document.getElementById("hero-img");

    if (heroImage) {
        heroImage.src = "Assets/Images/" + image;
    }
}

function setDarkMode(event) {
    setHeroImage("hero_white.svg");
    setTheme('#03111a', '#ffffff', '#c7e9ff', '#13212d', '#e6e6e6', '#d3ddf5');
}

function setLightMode(event) {
    setHeroImage("hero_black.svg");
    setTheme('#c3dcf2', '#000000', '#54626b', '#f5faff', '#1f2124', '#888f9e');
}

function setNeonMode(event) {
    setHeroImage("hero_white.svg");
    setTheme('#01267a', '#ff66ff', '#ffccff', '#01073d', '#66ffb3', '#33ffff');
}

let darkModeDiv = document.getElementById("darkmode");
darkModeDiv.addEventListener("click", setDarkMode);

let lightModeDiv = document.getElementById("lightmode");
lightModeDiv.addEventListener("click", setLightMode);

let neonModeDiv = document.getElementById("neonmode");
neonModeDiv.addEventListener("click", setNeonMode);