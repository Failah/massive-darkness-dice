console.log('JS OK');

const empty = "---";
const burst = `<i class="fa-solid fa-burst"></i>`;
const diamond = `<i class="fa-regular fa-gem"></i>`;
const shield = `<i class="fa-solid fa-shield"></i>`;
const sword = `<img src="img/sword.png" alt="Sword Icon" class="icon">`;

const blueDie = [empty, empty, shield, shield, shield, shield + shield + burst];
const greenDie = [empty, empty, shield, shield + shield + burst, shield + shield + burst, shield + shield + shield + diamond];
const yellowDie = [empty, sword, sword, sword, sword, sword + sword + burst];
const redDie = [empty, sword, sword, sword + sword + burst, sword + sword + burst, sword + sword + sword + diamond];

function increaseDice(color) {
    var diceCount = document.getElementById(color + 'DiceCount');
    diceCount.value = parseInt(diceCount.value) + 1;
}

function decreaseDice(color) {
    var diceCount = document.getElementById(color + 'DiceCount');
    if (parseInt(diceCount.value) > 0) {
        diceCount.value = parseInt(diceCount.value) - 1;
    }
}

function rollDice() {
    // Pulisci i contenitori dei dadi
    document.getElementById('blueDiceContainer').innerHTML = `<h2 style="color: blue;">Blue Dice Results:</h2>`;
    document.getElementById('greenDiceContainer').innerHTML = `<h2 style="color: green;">Green Dice Results:</h2>`;
    document.getElementById('yellowDiceContainer').innerHTML = `<h2 style="color: rgb(190, 173, 13);">Yellow Dice Results:</h2>`;
    document.getElementById('redDiceContainer').innerHTML = ` <h2 style="color: red;">Red Dice Results:</h2>`;

    // Ottieni il numero di dadi da lanciare per ogni colore
    var blueDiceCount = parseInt(document.getElementById('blueDiceCount').value);
    var greenDiceCount = parseInt(document.getElementById('greenDiceCount').value);
    var yellowDiceCount = parseInt(document.getElementById('yellowDiceCount').value);
    var redDiceCount = parseInt(document.getElementById('redDiceCount').value);

    // Esegui un ciclo per lanciare il numero di dadi selezionati
    rollAndDisplayDice(blueDiceCount, blueDie, 'blueDiceContainer');
    rollAndDisplayDice(greenDiceCount, greenDie, 'greenDiceContainer');
    rollAndDisplayDice(yellowDiceCount, yellowDie, 'yellowDiceContainer');
    rollAndDisplayDice(redDiceCount, redDie, 'redDiceContainer');
}

function rollAndDisplayDice(count, diceValues, containerId) {
    for (var i = 0; i < count; i++) {
        var roll = diceValues[Math.floor(Math.random() * diceValues.length)];

        var newDiv = document.createElement("div");
        newDiv.innerHTML = roll;
        newDiv.classList.add("dice");

        document.getElementById(containerId).appendChild(newDiv);
    }
}

function resetDice() {
    // Resetta il valore di tutti gli input a 0
    document.getElementById('blueDiceCount').value = 0;
    document.getElementById('greenDiceCount').value = 0;
    document.getElementById('yellowDiceCount').value = 0;
    document.getElementById('redDiceCount').value = 0;

    // Pulisci i contenitori dei dadi
    document.getElementById('blueDiceContainer').innerHTML = `<h2 style="color: blue;">Blue Dice Results:</h2>`;
    document.getElementById('greenDiceContainer').innerHTML = `<h2 style="color: green;">Green Dice Results:</h2>`;
    document.getElementById('yellowDiceContainer').innerHTML = `<h2 style="color: rgb(190, 173, 13);">Yellow Dice Results:</h2>`;
    document.getElementById('redDiceContainer').innerHTML = ` <h2 style="color: red;">Red Dice Results:</h2>`;
}

// SWITCH VIEW BUTTONS
var body = document.getElementById('body');

var sections = {
    massiveDarkness: {
        button: document.getElementById('massiveDarknessDice'),
        container: document.getElementById('massiveDarknessContainer'),
        bgColor: 'bg-bisque'
    },
    normalDice: {
        button: document.getElementById('normalDice'),
        container: document.getElementById('normalDiceContainer'),
        bgColor: 'bg-green'
    },
    utilities: {
        button: document.getElementById('utilities'),
        container: document.getElementById('utilitiesContainer'),
        bgColor: 'bg-pink'
    }
};

Object.keys(sections).forEach(function (key) {
    sections[key].button.addEventListener('click', function () {
        showSection(key);
    });
});

function showSection(key) {
    Object.keys(sections).forEach(function (sectionKey) {
        if (sectionKey === key) {
            sections[sectionKey].container.classList.remove('hidden');
            sections[sectionKey].button.setAttribute('disabled', true);
            body.className = sections[sectionKey].bgColor;
        } else {
            sections[sectionKey].container.classList.add('hidden');
            sections[sectionKey].button.removeAttribute('disabled');
        }
    });
}

// Mostra la sezione "massiveDarkness" all'avvio dell'app
showSection('normalDice');


// NORMAL DICE SECTION ***************************************************************************
// seleziona tutti i tipi di dadi
const diceTypes = document.querySelectorAll('.normalDiceType');

// itera su ogni tipo di dado
diceTypes.forEach(diceType => {
    // seleziona i bottoni e il contatore per questo tipo di dado
    const subtractButton = diceType.querySelector('.subtractNormal');
    const addButton = diceType.querySelector('.addNormal');
    const launchNumber = diceType.querySelector('.launchNumberNormal');

    // aggiungi gli event listener ai bottoni
    subtractButton.addEventListener('click', () => {
        let count = parseInt(launchNumber.textContent, 10);
        if (count > 0) {
            launchNumber.textContent = count - 1;
        }
    });

    addButton.addEventListener('click', () => {
        let count = parseInt(launchNumber.textContent, 10);
        launchNumber.textContent = count + 1;
    });
});

// resetta tutti i dadi
function resetNormalDice() {
    diceTypes.forEach(diceType => {
        const launchNumber = diceType.querySelector('.launchNumberNormal');
        launchNumber.textContent = '0';

        const diceValue = diceType.querySelector('.normalDiceValue');
        const diceResultContainerId = "d" + getDiceValue(diceValue.textContent) + "DiceContainer";
        const resultsContainer = document.getElementById(diceResultContainerId).querySelector('.results');
        resultsContainer.innerHTML = '';
    });
}

// lancia tutti i dadi
function rollNormalDice() {
    diceTypes.forEach(diceType => {
        const launchNumber = diceType.querySelector('.launchNumberNormal');
        const numberOfDice = Number(launchNumber.textContent);

        if (numberOfDice > 0) {
            const diceValue = diceType.querySelector('.normalDiceValue');
            console.log(diceValue.textContent)
            const diceSides = getDiceValue(diceValue.textContent);
            console.log(diceSides)

            const diceResultContainerId = "d" + diceSides + "DiceContainer";
            const resultsContainer = document.getElementById(diceResultContainerId).querySelector('.results');
            resultsContainer.innerHTML = ''; // svuota i risultati precedenti

            for (let i = 0; i < numberOfDice; i++) {
                const diceResult = rollDiceResult(diceSides);
                const diceResultElement = document.createElement('span');
                diceResultElement.textContent = "[" + diceResult + "]"; // aggiunge parentesi quadre intorno al risultato
                resultsContainer.appendChild(diceResultElement);
                if (i < numberOfDice - 1) { // se non è l'ultimo risultato, aggiunge un trattino
                    const separatorElement = document.createElement('span');
                    separatorElement.textContent = " - ";
                    resultsContainer.appendChild(separatorElement);
                }
            }
        }
    });
}

// ottiene il valore del dado dal testo dell'elemento h2
function getDiceValue(diceText) {
    return parseInt(diceText.slice(1, -1));
}

function rollDiceResult(diceSides) {
    return Math.floor(Math.random() * diceSides) + 1;
}
