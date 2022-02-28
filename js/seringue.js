/************************************ */
/* javascript code by Kaloyan KRASTEV */
/*       kaloyansen@gmail.com         */
/*   https://github.com/kaloyansen    */
/************************************ */

const HEAD = window.document.getElementsByTagName('head')[0];
newMeta(HEAD, "name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no");
newMeta(HEAD, "name", "author", "content", "Kaloyan KRASTEV");
newMeta(HEAD, "name", "description", "content", "script, java, javascript, python, php, web, interface, false, true, null, france, software, hardware, logiciel, matériel, memory, memoire, qwerty, dell, bit, byte, google, chrome, alphabet, firefox, robot, machine, data, database, mysql, sqlite, oracle, detector, photon, electron, proton, neutron, positron, atom, energy, space, gravity, light, dark, universe, galaxy, earth, moon, sun, saturn, jupyter, venus, mars, neptun, pluton, water, ear, fire, ice, spring, summer, winter, autumn, year, month, day, hour, minute, second, centery, fox, sheep, horse, duck, frog, orange, violet, black, cyan, magenta");

styleLoad(HEAD, "css/style.css");
scriptLoad(HEAD, "js/login.js",
           "injecter javascript à la tête",
           "par contre si l'injection est enregistrée avant la précédante",
           "elle ne sera jamais chargée",
           "et si par hasard le script s'injecte lui-mêma",
           "ça sera un traitement infini");

/***************************************************************** */
/*********************   trois fonctions   *********************** */
/***************************************************************** */

function styleLoad(lm, filename, title = 0, description = 0) {
    const STYLE = window.document.createElement("link");
    STYLE.rel = "stylesheet";
    STYLE.href = filename;
    if (title) STYLE.title = title;
    if (description) STYLE.description = description;
    lm.appendChild(STYLE);
    return STYLE;
}

function scriptLoad(lm, filename, title, ...description) {
    const SCRIPT = window.document.createElement("script");
    SCRIPT.src = filename;
    if (title) SCRIPT.title = title;
    if (description) SCRIPT.description = description;
    lm.appendChild(SCRIPT);
    return SCRIPT;
}

function newMeta(lm, name, value, name1 = false, value1 = false) {
    const META = window.document.createElement('meta');
    META.setAttribute(name, value);
    if (name1 && value1) META.setAttribute(name1, value1);
    lm.appendChild(META);
    return META;
}


