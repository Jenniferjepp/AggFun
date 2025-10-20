/* router.js */
import { choiceFunction } from "./choiceView.js";
import { timerViewFunc } from "./timerView.js";
import { doneViewFunc } from "./doneView.js";


function loadCSS(href) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}


export function navigateTo (view = "choice", eggDataObj) {

    const container = document.querySelector("#app");
    // Rensa tidigare vy
    container.innerHTML = "";

    if (view === "choice") {
        loadCSS("./css/choice.css"); // relativ till HTML
        choiceFunction();
        return;
    }

    if (view === "timer") {
        loadCSS("./css/timer.css");
        container.appendChild(timerViewFunc(eggDataObj));
        return;
    }

    if (view === "done") {
        loadCSS("./css/done.css");
        doneViewFunc();
        return;
    }

    // Fallback om okänd vy
    container.textContent = "Oops! Okänd vy.";
}

window.addEventListener("DOMContentLoaded", () => {
    navigateTo("choice");
});