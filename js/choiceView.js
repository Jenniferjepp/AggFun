/* choiceView.js */

import { navigateTo } from "./router.js";

export function choiceFunction () {

    const eggDataObj = {
        preference: "",
        size: ""
    }

    const app = document.querySelector("#app");


    let currentStep = 1;
    goToStep(currentStep);
    
    function goToStep (step) {
        currentStep = step;
        app.innerHTML = "";

        switch (step) {
            case 1: 
                app.appendChild(renderStep1());
                break;
            case 2:
                app.appendChild(renderStep2());
                break;
        }
    }


    /* ---  STEP 1 --- */
    function renderStep1() {
        // skapa yttre div
        const preferenceView = document.createElement("div");
        preferenceView.id = "preferenceView";
        document.querySelector("#app").appendChild(preferenceView);

        // chat Div
        const chatDiv = document.createElement("div");
        chatDiv.id = "chatDiv";
        document.querySelector("#preferenceView").appendChild(chatDiv);


        // Äggsperten Div
        const aggspertenDiv = document.createElement("div");
        aggspertenDiv.id = "aggspertenDiv";
        document.querySelector("#preferenceView").appendChild(aggspertenDiv);

        // choicesDiv
        const choicesDiv = document.createElement("div");
        choicesDiv.id = "choicesDiv";
        preferenceView.appendChild(choicesDiv);

        // innehåll chat Div
        const chatbubble = document.createElement("div");
        chatbubble.id = "chatbubble";
        chatDiv.appendChild(chatbubble);
        let chatText = document.createElement("p");
        chatText.id = "chatText";
        chatText.textContent = "HEJ, JAG ÄR ÄGGSPERTEN!\nHUR VILL DU HA DITT ÄGG IDAG?";
        chatbubble.appendChild(chatText);

        // innehåll aggsperten Div
        const aggImg = document.createElement("img");
        aggImg.src = "../assets/images/aggsperten.png";
        aggImg.style.width = "164px";
        aggImg.style.height = "210.429px";
        aggspertenDiv.appendChild(aggImg);

        // innehåll choices Div
        const hardButton = document.createElement("button");
        hardButton.classList.add("choiceButtons");
        hardButton.textContent = "HÅRDKOKT";
        hardButton.dataset.pref = "HÅRDKOKT";   // spara värdet rätt
        choicesDiv.appendChild(hardButton);

        const softButton = document.createElement("button");
        softButton.classList.add("choiceButtons");
        softButton.textContent = "MJUKKOKT";
        softButton.dataset.pref = "MJUKKOKT";
        choicesDiv.appendChild(softButton);

        const looseButton = document.createElement("button");
        looseButton.classList.add("choiceButtons");
        looseButton.textContent = "LÖSKOKT";
        looseButton.dataset.pref = "LÖSKOKT";
        choicesDiv.appendChild(looseButton);


        choicesDiv.addEventListener("click", (e) => {
            const btn = e.target.closest(".choiceButtons");
            if (!btn) return; // klickade inte på en knapp
            eggDataObj.preference = btn.dataset.pref;
            console.log(eggDataObj);

            goToStep(2);
          });

        return preferenceView;
    }

    function renderStep2() {
        // skapa yttre div
        const sizeView = document.createElement("div");
        sizeView.id = "sizeView";
        app.appendChild(sizeView);

        // chat Div
        const chatDiv = document.createElement("div");
        chatDiv.id = "chatDiv";
        sizeView.appendChild(chatDiv);

        // Äggsperten Div
        const aggspertenDiv = document.createElement("div");
        aggspertenDiv.id = "aggspertenDiv";
        sizeView.appendChild(aggspertenDiv);

        // choicesDiv
        const choicesDiv = document.createElement("div");
        choicesDiv.id = "choicesDiv";
        sizeView.appendChild(choicesDiv);

        // innehåll chat Div
        const chatbubble = document.createElement("div");
        chatbubble.id = "chatbubble";
        chatDiv.appendChild(chatbubble);
        let chatText = document.createElement("p");
        chatText.id = "chatText";
        chatText.textContent = "VILKEN STORLEK ÄR DITT ÄGG?";
        chatbubble.appendChild(chatText);

        // innehåll aggsperten Div
        const aggImg = document.createElement("img");
        aggImg.src = "../assets/images/aggsperten.png";
        aggImg.style.width = "164px";
        aggImg.style.height = "210.429px";
        aggspertenDiv.appendChild(aggImg);

        // innehåll choices Div
        const buttonS = document.createElement("button");
        buttonS.classList.add("choiceButtons");
        buttonS.textContent = "S - SMALL";
        buttonS.dataset.size = "S";   // ← lägg värdet här
        choicesDiv.appendChild(buttonS);

        const buttonM = document.createElement("button");
        buttonM.classList.add("choiceButtons");
        buttonM.textContent = "M - MEDIUM";
        buttonM.dataset.size = "M";   // ← lägg värdet här
        choicesDiv.appendChild(buttonM);

        const buttonL = document.createElement("button");
        buttonL.classList.add("choiceButtons");
        buttonL.textContent = "L - LARGE"
        buttonL.dataset.size = "L";   // ← lägg värdet här
        choicesDiv.appendChild(buttonL);


        choicesDiv.addEventListener("click", (e) => {
            const btn = e.target.closest(".choiceButtons");
            if (!btn) return; // klickade inte på en knapp
            eggDataObj.size = btn.dataset.size;     // ← direkt "S"/"M"/"L"
            console.log(eggDataObj);

            navigateTo("timer", eggDataObj);
        })

        return sizeView;
    }

}