"use strict";

let playerScore = 0;
let computerScore = 0;

const roundResultUI = document.querySelector(".app__heading");
const playerScoreUI = document.querySelector(".score__value_player");
const computerScoreUI = document.querySelector(".score__value_computer");

const getComputerChoice = () => {
  const variants = ["rock", "paper", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
};

const getPlayerChoice = (choice) => {
  if (choice.dataset.option === "rock") {
    return "rock";
  } else if (choice.dataset.option === "paper") {
    return "paper";
  } else if (choice.dataset.option === "scissors") {
    return "scissors";
  }
};

const updateRoundResult = (roundResult) => {
  switch (roundResult) {
    case "player":
      roundResultUI.textContent = "🎉 You win!";
      playerScore++;
      playerScoreUI.textContent = playerScore;
      break;
    case "computer":
      roundResultUI.textContent = "🤖 Computer wins!";
      computerScore++;
      computerScoreUI.textContent = computerScore;
      break;
    case "tie":
      roundResultUI.textContent = "🤝 It's a tie!";
      return;
  }

  if (playerScore === 5 || computerScore === 5) {
    popFinalModal(playerScore > computerScore ? "player" : "computer");
  }
};

const getRoundWinner = (playerChoice, computerChoice) => {
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
  updateRoundResult(roundWinner);
};

const popFinalModal = (gameWinner) => {
  const modalWindow = document.querySelector(".modal");
  const modalResult = document.querySelector(".modal__result");
  const modalOverlay = document.querySelector(".modal__overlay");
  const modalBtn = document.querySelector(".modal__btn");

  modalWindow.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");

  modalResult.style.color = `${
    gameWinner === "player" ? "#47682c" : "#ef3054"
  }`;
  modalResult.textContent = `${
    gameWinner === "player" ? "You win 🎉" : "You lost 😢"
  }`;

  modalBtn.addEventListener("click", () => {
    restartGame();
    closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      restartGame();
      closeModal();
    }
  });
};

const restartGame = () => {
  playerScore = 0;
  computerScore = 0;

  roundResultUI.textContent = "Choose your weapon";
  playerScoreUI.textContent = 0;
  computerScoreUI.textContent = 0;
};

const closeModal = () => {
  const modalWindow = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal__overlay");

  modalWindow.classList.add("hidden");
  modalOverlay.classList.add("hidden");
};

const optionButtons = document.querySelectorAll(".control");
optionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    getRoundWinner(getPlayerChoice(button), getComputerChoice());
  });
});
