// import { navigateTo } from "./router";

export function timerViewFunc (eggDataObj) {
    const bigTimerViewDiv = document.createElement("div");
    bigTimerViewDiv.id = "bigTimerViewDiv";


    const funFacts = [
        { id: 1, fact: "Ett hönsägg består till cirka 90 % av vatten och protein." },
        { id: 2, fact: "Hönor kan lägga över 300 ägg per år!" },
        { id: 3, fact: "Äggulan är alltid gul, men nyansen beror på vad hönan ätit." },
        { id: 4, fact: "Bruna och vita ägg smakar likadant, det är bara skalet som skiljer." },
        { id: 5, fact: "Det tar ungefär 24-26 timmar för en höna att producera ett ägg." },
        { id: 6, fact: "Det största hönsägg som någonsin lagts vägde över 450 gram!" },
        { id: 7, fact: "Skalets färg bestäms av hönans ras, inte av vad hon äter." },
        { id: 8, fact: "Ägg är en av få naturliga källor till D-vitamin." },
        { id: 9, fact: "En höna börjar lägga ägg när hon är runt 5 månader gammal." },
        { id:10, fact: "Ett ägg innehåller alla vitaminer utom C-vitamin." },
        { id:11, fact: "Äggulan hålls i mitten tack vare små trådar som heter chalazae." },
        { id:12, fact: "Ju äldre ett ägg är, desto lättare är det att skala efter kokning." },
        { id:13, fact: "Ett färskt ägg sjunker i vatten, ett gammalt flyter." },
        { id:14, fact: "Det finns hönor som lägger blå eller gröna äggskal!" },
        { id:15, fact: "Japan har världens högsta äggkonsumtion per person." },
        { id:16, fact: "Ägg kan användas som lim i gamla konsttekniker, som äggtempera." },
        { id:17, fact: "Ordet 'ägg' kommer från fornnordiskans 'egg', som betyder 'spets'." },
        { id:18, fact: "Kycklingens fjädrar börjar bildas redan innan den kläcks." },
        { id:19, fact: "Ägg har använts i matlagning i över 5 000 år." },
        { id:20, fact: "Det sägs att den som knäcker ägget med ett slag har tur hela dagen." },
    ];


    const eggBase = {
        LÖSKOKT: { S: 6, M: 7, L: 8 },
        MJUKKOKT: { S: 8, M: 9, L: 10 },
        HÅRDKOKT: { S: 10, M: 11, L: 12 }
    };

    let minutes = "--";
    if (eggDataObj.preference && eggDataObj.size) {
        minutes = eggBase[eggDataObj.preference][eggDataObj.size];
    }
    console.log(minutes);

    
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
                <h1 id="infoHeadLine">KOKA ÄGGEN I<br> <span id="minutes">${minutes ?? "--"}</span><br> MINUTER</h1>
                <p id="infoP">KLICKA PÅ ÄGGSPERTEN FÖR ATT STARTA TIMERN</p>
            </div>
        `;
    }

    // setFact DIV     MÅSTE ÄNDRA SÅ FACTSEN ÄNDRAS
    function setFacts() {
        lowerDiv.innerHTML = `
            <div id="factsDiv">
                <h1 id="factsHeadLine">ÄGG- FUN FACTS</h1>
                <p id="factP"></p> 
                <button id="nextFactB">NÄSTA FUN FACT</button>
            </div>
        `

        // randomera fun facts
        const factP = lowerDiv.querySelector("#factP");
        const nextFactB = lowerDiv.querySelector("#nextFactB");

        let lastIndex = -1;
        randomisedFact();
        nextFactB.addEventListener("click", randomisedFact);

        function randomisedFact () {
            if (!funFacts.length) return;   // skydd: ifall listan skulle vara tom

            let i = Math.floor(Math.random() * funFacts.length);
            if (funFacts.length > 1 && i === lastIndex) {
                i = (i + 1) % funFacts.length;  // undvik samma två gånger i rad, % ser till att vi wrappar runt till 0 om vi var på sista.
            }

            factP.textContent = funFacts[i].fact;
            lastIndex = i;
        }

    }

    return bigTimerViewDiv; // ← viktigt!
}