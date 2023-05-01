console.log('JS OK');

const burst = `<i class="fa-solid fa-burst"></i>`;
const diamond = `<i class="fa-regular fa-gem"></i>`;
const shield = `<i class="fa-solid fa-shield"></i>`;
const sword = `<img src="img/sword.png" alt="Sword Icon" class="icon">`;

const blueDie = ["/", "/", shield, shield, shield, shield + shield + burst];
const greenDie = ["/", "/", shield, shield + shield + burst, shield + shield + burst, shield + shield + shield + diamond];
const yellowDie = ["/", sword, sword, sword, sword, sword + sword + burst];
const redDie = ["/", sword, sword, sword + sword + burst, sword + sword + burst, sword + sword + sword + diamond];

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