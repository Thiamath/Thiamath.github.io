
const mainStylesheet = document.getElementById("thiamath-main-css");
const darkModeSwitch = document.getElementById("darkModeSwitch");
const navbar = document.getElementById("main-nav-bar");

function initDarkModeSwitch() {
    darkModeSwitch.checked = isDark;
    darkModeSwitch.onclick = () => { toggleDark() };
    if (isDark) {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    }
}

initDarkModeSwitch();

function setDark() {
    setCookie("dark", true)
    if (debug) console.log(("Setting DARK MODE"))
    mainStylesheet.href = mainStylesheet.href.replace(/light/gi, 'dark');
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
}

function setLight() {
    setCookie("dark", false)
    if (debug) console.log(("Setting LIGHT MODE"))
    mainStylesheet.href = mainStylesheet.href.replace(/dark/gi, 'light');
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
}

function toggleDark() {
    if (debug) console.log("Toggling dark mode")
    isDark = darkModeSwitch.checked
    if (isDark) {
        setDark()
    } else {
        setLight()
    }
}