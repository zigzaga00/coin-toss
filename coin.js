function tossCoin(e) {
    let playerGuess = e.target.innerText;
    let coinToss = Math.floor(Math.random() * coins.length);
    let tossedCoin = coins[coinToss];
    let chosenText = `The Coin is ${tossedCoin}`;
    if (playerGuess === tossedCoin) {
        pScore ++;
        msgOutput.innerHTML = `${chosenText}<br>Player Wins!<br>Player:${pScore} | CPU:${cScore}`;
    } else {
        cScore ++;
        msgOutput.innerHTML = `${chosenText}<br>CPU Wins!<br>Player:${pScore} | CPU:${cScore}`;
    }
}

// main
const msgOutput = document.querySelector("#output");
msgOutput.innerHTML = "Please Choose Heads or Tails...";
const buttons = document.querySelectorAll("button");
const coins = [
    "Heads",
    "Tails"
];
let pScore = 0;
let cScore = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", tossCoin);
}


