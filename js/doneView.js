// doneView.js

import { navigateTo } from "./router.js";


export function doneViewFunc () {

    // skapa yttre div
    const doneView = document.createElement("div");
    doneView.id = "doneView";
    document.querySelector("#app").appendChild(doneView);

    // chat Div
    const chatDiv = document.createElement("div");
    chatDiv.id = "chatDiv";
    doneView.appendChild(chatDiv);


    // Äggsperten Div
    const aggspertenDiv = document.createElement("div");
    aggspertenDiv.id = "aggspertenDiv";
    doneView.appendChild(aggspertenDiv);

    // choicesDiv
    const choicesDiv = document.createElement("div");
    choicesDiv.id = "choicesDiv";
    doneView.appendChild(choicesDiv);

    // innehåll chat Div
    const chatbubble = document.createElement("div");
    chatbubble.id = "chatbubble";
    chatDiv.appendChild(chatbubble);
    let chatText = document.createElement("p");
    chatText.id = "chatText";
    chatText.textContent = "ÄGGET ÄR FÄRDIGKOKT! \n SPOLA KALLT VATTEN I KASTRULLEN \n FÖR ATT STOPPA KOKTIDEN.";
    chatbubble.appendChild(chatText);

    // innehåll aggsperten Div
    const aggImg = document.createElement("img");
    aggImg.src = "../assets/images/aggsperten.png";
    aggImg.style.width = "164px";
    aggImg.style.height = "210.429px";
    aggspertenDiv.appendChild(aggImg);

    // innehåll choisesDIv
    const moreEggsB = document.createElement("button");
    moreEggsB.textContent = "KOKA MER ÄGG"
    choicesDiv.appendChild(moreEggsB);

    const moreFactsB = document.createElement("button");
    moreFactsB.textContent = "LÄS FLER FUN FACTS";
    choicesDiv.appendChild(moreFactsB);

    moreEggsB.addEventListener("click", () => navigateTo("choice"));
}
