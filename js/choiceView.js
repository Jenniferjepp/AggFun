/* choiceView.js */

export function choiceFunction () {

    // skapa yttre div
    const choiceView = document.createElement("div");
    choiceView.id = "choiceView";
    document.querySelector("#eggtainer").appendChild(choiceView);

    // chat Div
    const chatDiv = document.createElement("div");
    chatDiv.id = "chatDiv";
    document.querySelector("#choiceView").appendChild(chatDiv);


    // Äggsperten Div
    const aggspertenDiv = document.createElement("div");
    aggspertenDiv.id = "aggspertenDiv";
    document.querySelector("#choiceView").appendChild(aggspertenDiv);

    // choicesDiv
    const choicesDiv = document.createElement("div");
    choicesDiv.id = "choicesDiv";
    choiceView.appendChild(choicesDiv);

    // innehåll chat Div
    const chatbubble = document.createElement("div");
    chatbubble.id = "chatbubble";
    chatDiv.appendChild(chatbubble);
    let chatText = document.createElement("p");
    chatText.id = "chatText";
    chatText.textContent = "HEJ, JAG ÄR ÄGGSPERTEN! HUR VILL DU HA DITT ÄGG IDAG?";
    chatbubble.appendChild(chatText);

    // innehåll aggsperten Div
    const aggImg = document.createElement("img");
    aggImg.src = "../assets/images/aggsperten.png";
    aggImg.style.width = "164px";
    aggImg.style.height = "210.429px";
    aggspertenDiv.appendChild(aggImg);

    // innehåll choices Div
    const hardButton = document.createElement("button");
    hardButton.classList = "choiceButtons";
    hardButton.textContent = "HÅRDKOKT";
    choicesDiv.appendChild(hardButton);

    const softButton = document.createElement("button");
    softButton.classList = "choiceButtons";
    softButton.textContent = "MJUKKOKT";
    choicesDiv.appendChild(softButton);

    const looseButton = document.createElement("button");
    looseButton.classList = "choiceButtons";
    looseButton.textContent = "LÖSKOKT";
    choicesDiv.appendChild(looseButton);
}