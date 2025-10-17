// import { navigateTo } from "./router";

export function timerViewFunc (eggDataObj) {
    const bigTimerViewDiv = document.createElement("div");
    bigTimerViewDiv.id = "bigTimerViewDiv";

    // timer DIV (övre)
    const timerDiv = document.createElement("div");
    timerDiv.id = "timerDiv";
    timerDiv.innerHTML = `
        <img id="timerImg" src="/assets/images/timerAggspert.png" alt="starta timer" />
    `;

    // undre DIV
    const lowerDiv = document.createElement("div");
    lowerDiv.id = "lowerDiv";

    setInfo();  


    timerDiv.addEventListener("click", () => {
        setFacts();
      }, { once: true });

    bigTimerViewDiv.append(timerDiv, lowerDiv);

    //setInfo DIV
    function setInfo() {
        lowerDiv.innerHTML = `
            <div class="infoDiv">
                <h1 id="infoHeadLine">KOKA ÄGGEN I<br> <span id="minutes">--</span><br> MINUTER</h1>
                <p id="infoP">KLICKA PÅ ÄGGSPERTEN FÖR ATT STARTA TIMERN</p>
            </div>
        `;
    }

    // setFact DIV     MÅSTE ÄNDRA SÅ FACTSEN ÄNDRAS
    function setFacts() {
        lowerDiv.innerHTML = `
            <div id="factsDiv">
                <h1 id="factsHeadLine">ÄGG- FUN FACTS</h1>
                <p class="factP">HIHIHI</p> 
                <button id="nextFactB">NÄSTA FUN FACT</button>
            </div>
        `
    }

    return bigTimerViewDiv; // ← viktigt!
}