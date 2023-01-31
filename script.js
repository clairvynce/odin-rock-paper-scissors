"use strict";

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const roundWinner = playRound(getPlayerChoice(), getComputerChoice());

    if (roundWinner == "player") {
      playerScore++;
      console.log(`Player wins! ${playerScore} : ${computerScore}`);
    } else if (roundWinner === "computer") {
      computerScore++;
      console.log(`Computer wins! ${playerScore} : ${computerScore}`);
    } else {
      console.log(`It's a tie! ${playerScore} : ${computerScore}`);
    }
  }

  if (playerScore > computerScore) {
    alert(`You win! ${playerScore} : ${computerScore}`);
  } else if (playerScore === computerScore) {
    alert(`Draw! ${playerScore} : ${computerScore}`);
  } else {
    alert(`You lose! ${playerScore} : ${computerScore}`);
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return "player";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "player";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "player";
  } else if (playerChoice === computerChoice) {
    return "tie";
  } else {
    return "computer";
  }
}

function getPlayerChoice() {
  return prompt("Choose your weapon").toLowerCase();
}

function getComputerChoice() {
  const variants = ["rock", "paper", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
}

game();
