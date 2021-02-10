
const debug = false;

const mainStylesheet = document.getElementById("thiamath-main-css");
const darkModeSwitch = document.getElementById("darkModeSwitch");

function initDarkMode() {
    if (debug) console.log("initDarkMode()")
    if (getCookie("dark").length === 0) {
        console.log("NO COOKIE");
        setCookie("dark", darkModeSwitch.checked, 3650);
    } else {
        let isDark = getCookie("dark") === 'true';
        console.log("Dark cookie -> " + getCookie("dark"));
        console.log("isDark.type -> " + typeof isDark);
        console.log("isDark -> " + isDark);
        console.log("darkModeSwitch.checked -> " + darkModeSwitch.checked);
        darkModeSwitch.checked = isDark;
        console.log("darkModeSwitch.checked -> " + darkModeSwitch.checked);
        if (!isDark) {
            console.log("Setting light cuz isDark -> " + isDark);
            setLight();
        }
    }
}

initDarkMode();

function setDark() {
    if (debug) console.log(("Setting DARK MODE"))
    let isDark = getCookie("dark")
    console.log("Dark cookie -> " + getCookie("dark"))
    mainStylesheet.href = mainStylesheet.href.replace(/light/gi, 'dark');
    let navbar = document.getElementById("main-nav-bar");
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
}

function setLight() {
    if (debug) console.log(("Setting LIGHT MODE"))
    let isDark = getCookie("dark")
    if (debug) console.log("Dark cookie -> " + getCookie("dark"))
    mainStylesheet.href = mainStylesheet.href.replace(/dark/gi, 'light');
    let navbar = document.getElementById("main-nav-bar");
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
}

function toggleDark() {
    if (debug) console.log("Toggling dark mode")
    let isDark = darkModeSwitch.checked
    if (isDark) {
        setCookie("dark", true, 3650)
        setDark()
    } else {
        setCookie("dark", false, 3650)
        setLight()
    }
}