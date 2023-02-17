"use strict";
const randomNumberInput = document.querySelector(".number");
const guessNumber = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const again = document.querySelector(".again");
let score = 20;
let highScore = 0;
let randomNumber = Math.round(Math.random() * 20);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", () => {
  if (score > 1) {
    if (!guessNumber.value) {
      displayMessage("🥲 No Number!");
    } else if (Number(guessNumber.value) !== randomNumber) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(
        guessNumber.value > randomNumber ? "📈 Too High" : "📉 Too Low"
      );
    } else {
      check.style.display = "none";
      guessNumber.disabled = true;
      displayMessage("🎉 Correct answer");
      randomNumberInput.textContent = randomNumber;
      document.body.style.backgroundColor = "#60b347";
      randomNumberInput.style.width = "30rem";
      if (score >= highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else {
    message.textContent = "😭 You lost the game!";
    score = 0;
    document.querySelector(".score").textContent = score;
  }
});
again.addEventListener("click", () => {
  guessNumber.disabled = false;
  check.style.display = "block";
  document.body.style.backgroundColor = "#222";
  randomNumberInput.style.width = "15rem";
  guessNumber.value = "";
  displayMessage("Start guessing again...");
  randomNumberInput.textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 20);
});
