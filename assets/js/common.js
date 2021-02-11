const debug = false;

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    if (!exdays)
        exdays = 3650;
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires="+d.toUTCString();
    let cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    if (debug) console.log("COOKIE SET -> " + cookie);
    document.cookie = cookie;
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// BOOTSTRAPPING SCRIPT

let isDark = getCookie("dark");
if (isDark.length === 0) {
    isDark = true;
    setCookie("dark", true);
} else {
    isDark = isDark === 'true';
}
