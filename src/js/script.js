"use strict";

let playerScore = 0;
let computerScore = 0;

const playerScoreUI = document.querySelector("#js-playerScore");
const computerScoreUI = document.querySelector("#js-computerScore");
const roundResult = document.querySelector("#js-roundResult");
const controlButtons = document.querySelectorAll(".control");

function getComputerChoice() {
  const variants = ["rock", "paper", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
}

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const computerChoice = getComputerChoice();

    if (button.id.includes("js-rockBtn")) {
      playRound("rock", computerChoice);
    } else if (button.id.includes("js-paperBtn")) {
      playRound("paper", computerChoice);
    } else {
      playRound("scissors", computerChoice);
    }
  });
});

function playRound(playerChoice, computerChoice) {
  let roundWinner;

  if (playerChoice === "rock" && computerChoice === "scissors") {
    roundWinner = "player";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    roundWinner = "player";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    roundWinner = "player";
  } else if (playerChoice === computerChoice) {
    roundWinner = "tie";
  } else {
    roundWinner = "computer";
  }

  updateScore(roundWinner);
}

function updateScore(roundWinner) {
  switch (roundWinner) {
    case "player":
      playerScore++;
      playerScoreUI.textContent = `${playerScore}`;
      roundResult.textContent = `You win!`;
      break;

    case "computer":
      computerScore++;
      computerScoreUI.textContent = `${computerScore}`;
      roundResult.textContent = `Computer wins!`;
      break;

    case "tie":
      roundResult.textContent = `It's a tie!`;
      break;
  }

  if (playerScore === 5 || computerScore === 5) popModal();
}

function popModal() {
  const modal = document.querySelector("#js-modal");
  const gameResult = document.querySelector("#js-gameResult");
  const restartBtn = document.querySelector("#js-restart");

  modal.showModal();

  gameResult.style.color = playerScore > computerScore ? "#47682c" : "#ef3054";
  gameResult.textContent =
    playerScore > computerScore ? `You win!` : `You lose!`;

  restartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    roundResult.textContent = "Choose your weapon";
    playerScore = 0;
    playerScoreUI.textContent = `${playerScore}`;
    computerScore = 0;
    computerScoreUI.textContent = `${computerScore}`;
    modal.close();
  });
}
