/************************************ */
/* javascript code by Kaloyan KRASTEV */
/*       kaloyansen@gmail.com         */
/*   https://github.com/kaloyansen    */
/************************************ */

"usr strict";
var VALEUR      = "";//password
var BREAK       = false;//interrupt interval

/* constants d'abord */
const URLAPI    = "https://www.ericfreelance.fr/api/check_user.php";
const PASSIZE   = 6;
const FREQUENCE = 0.054321;//talk fréquence, Hz
const CHIFFRE   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                   " ", " ", " ", " ", " ", " "];
const VALIDER   = window.document.getElementById("valider");
const EFFACER   = window.document.getElementById("effacer");
const BUTTON    = window.document.querySelectorAll("button");
const INPUT     = window.document.getElementById("input");
const INPID     = window.document.getElementById("inpid");
const LABEL     = window.document.getElementById("label");
const LABID     = window.document.getElementById("labid");
const BODY      = window.document.querySelector("body");
const INFO      = window.document.getElementById("info");
const TALK      = ["https://www.kalodev.site to learn more",
                   "javascript code by Kaloyan KRASTEV",
                   "there is no limit for the imagination",
                   "use the mouse and the virtual keyboard to enter your password",
                   "ne jamais dis jamais je ne boirai",
                   "if you share it your code is no more secret",
                   `take a look at my <a href = "https://www.kalodev.site">django</a> project if up`,
                   `une liste <a href = "https://freeshell.de/morla/ap">opérationnelle</a> d'apformation projets`];

class kalo {/* une classe général des instruments essenciels
               il a seulement static méthods */
    constructor() {
        kalo.setContent(BODY,
                        `<div class = "info">
                           <p class = "warning">nothing to construct</p>
                           <p>all kalo methods are static</p>
                         </div>`);
    }

    static get rien() { return 0; }
    static get hasbool() { return (Math.random() > 0.5) ? true : false; }
    static hasint(min, max) { return Math.round(kalo.hasard(min, max)); }
    static*rndGenerator(array) {
        while (true) {
            yield array[parseInt(array.length * Math.random())];
        }
    }

    static hasard(min, max) {
        let moi = Math.random();
        let delta = max - min;
        let hasa = min + moi * delta;
        return hasa;        
    }

    static setContent(lm, ...texte) {
        switch (lm) {/* key controls the content */
        case 0:
            window.console.log(texte);
            break;
        case INFO:
            INFO.style.backgroundColor = "#efface";
            INFO.innerHTML = texte;
            break;
        default:
            lm.innerHTML = texte;
        }            

    }

    static dumProp(lm) {
        let prop;
        let log = "{";
        for (prop in lm) {
            let val = lm[prop];
            if (val) log += `${prop}: ${val}, `;
        }
        return log + "}";
    }

    static invertColor(lm, invisible = false) {
        lm.style.color = "#654321";
        if (invisible) lm.style.color = "#ccc";
        lm.style.backgroundColor = "#ccc";
    }

    static revertColor(lm, invisible = false) {
        lm.style.color = "#fedcba";
        if (invisible) lm.style.color = "#123456";
        lm.style.backgroundColor = "#123456";
    }    

    static ouverture() {
        window.console.clear;
        window.console.log("javascript code by Kaloyan KRASTEV");
        (typeof window === 'undefined') ? window.console.log("welcome to node.js") : window.console.log('screen size: ' + window.screen.width + 'x' + window.screen.height);
    }

    /* **************************************************************** */
    /* ********************   end of class kalo    ******************** */
    /* **************************************************************** */
}

kalo.ouverture();

const itr = kalo.rndGenerator(TALK);
const winterval = window.setInterval(() => {
    let item = itr.next();
    if (item.done || BREAK) clearInterval(winterval);
    kalo.setContent(INFO, "inforouleau", item.value);
    INFO.style.backgroundColor = "#eee";

}, Math.round(1000 / FREQUENCE));

var roule = BUTTON.length;
kalo.setContent(LABEL, `${PASSIZE} chiffres code secret`);
kalo.setContent(LABID, `identification`);


while (0 < roule --) {
    const but = BUTTON[roule];
    kalo.invertColor(but);
    but.addEventListener("mouseover",
                         function() { kalo.revertColor(this); }, false);
    but.addEventListener("mouseout",
                         function() { kalo.invertColor(this); }, false);
    if (but.className == "control") continue;//drop valider et effacer

    let index = kalo.hasint(0, roule - 2);
    let value = CHIFFRE.splice(index, 1)[0];
    kalo.setContent(but, value);
    if (value != parseInt(value)) {
        kalo.setContent(but, "-");
        kalo.invertColor(but, true);
        but.addEventListener("mouseover",
                             function() { kalo.revertColor(this, true); }, false);
        but.addEventListener("mouseout",
                             function() { kalo.invertColor(this, true); }, false);
        continue;//drop empty buttons => no listeners for zéros
    }

    but.value = value;

    but.addEventListener("click", passwordVerification, false);

}

EFFACER.addEventListener("click", passwordReset, false);
VALIDER.addEventListener("click", function() {
    let formData = new FormData();
    formData.append('login', INPID.value);
    formData.append('password', VALEUR);

    connexion(URLAPI, "post", formData, INFO);
    passwordReset();
}, false);

/* **************************************************************** */
/* **************************   function    *********************** */
/* **************************************************************** */


function passwordVerification(e) {/* it happens each time a button
                                     from the virtual keyboard is pressed */
    var valen = INPID.value.length;
    if (valen == 0) {
        kalo.setContent(INFO, "your login name please");
        return;
    }

    kalo.invertColor(e.target);
    EFFACER.style.display = "inline";
    if (VALEUR.length < PASSIZE) VALEUR = `${VALEUR}${e.target.value}`;
    else kalo.setContent(INFO, INPID.value, ` effacer ou valider le mot de passe de ${PASSIZE} chiffres`);
    if (VALEUR.length == PASSIZE) {
        INPUT.style.borderColor = "green";
        INPUT.style.backgroundColor = "#aea";
        VALIDER.style.display = "inline";
    } else {
        INPUT.style.borderColor = "red";
        INPUT.style.backgroundColor = "#efface";
        VALIDER.style.display = "none";
    }
    INPUT.value = VALEUR;
}

function passwordReset() {
    VALEUR = "";
    INPUT.value = VALEUR;
    INPUT.style.borderColor = "red";
    INPUT.style.backgroundColor = "#efface";
    VALIDER.style.display = EFFACER.style.display = "none";
}

function connexion(adresse, method, payload, lm) {
    window.console.log(`${method} => ${adresse} => ${payload}`);
    const format = {method: method, body: payload};
    window.fetch(adresse, format)
        .then(response => {
            return response.json();
        })
        .then(json => {
            BREAK = true;
            kalo.setContent(lm, kalo.dumProp(json));
            window.console.log(json);
        })
}


