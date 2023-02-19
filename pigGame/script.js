"use strict";
const btnRollDice = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const btnHoldScore = document.querySelector(".btn--hold");
const diceImage = document.querySelector(".dice");

const firstPlayer = document.querySelector(".player--0");
const firstPlayerScore = document.querySelector("#score--0");
const firstCurrentScore = document.querySelector("#current--0");

const secondPlayer = document.querySelector(".player--1");
const secondPlayerScore = document.querySelector("#score--1");
const secondCurrentScore = document.querySelector("#current--1");

firstPlayerScore.textContent = 0;
secondPlayerScore.textContent = 0;
diceImage.classList.add("hidden");

let totalDice = 0;
let activePlayer = 0;
let playing = true;
let totalScores = [0, 0];

function switchPlayer() {
  totalDice = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = totalDice;
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstPlayer.classList.toggle("player--active");
  secondPlayer.classList.toggle("player--active");
}

btnRollDice.addEventListener("click", () => {
  if (playing) {
    //generating random number
    const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    //displaying the dice
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${randomDiceNumber}.png`;

    //check if number is 1
    if (randomDiceNumber !== 1) {
      totalDice += randomDiceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        totalDice;
    } else {
      switchPlayer();
    }
  }
});

btnHoldScore.addEventListener("click", () => {
  if (playing) {
    totalScores[activePlayer] += totalDice;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
      diceImage.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener("click", () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  diceImage.classList.add("hidden");
  totalDice = 0;
  activePlayer = 0;
  playing = true;
  totalScores = [0, 0];
  firstPlayer.classList.add("player--active");
  secondPlayer.classList.remove("player--active");
  firstCurrentScore.textContent = 0;
  firstPlayerScore.textContent = 0;
  secondPlayerScore.textContent = 0;
  secondCurrentScore.textContent = 0;
});
