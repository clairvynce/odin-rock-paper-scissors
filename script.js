"use strict";

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose your weapon").toLowerCase();
    if (playRound(playerSelection, getComputerChoice()) === "You win!") {
      console.log("You win");
      playerScore++;
    } else if (
      playRound(playerSelection, getComputerChoice()) === "Computer wins!"
    ) {
      console.log("You lose");
      computerScore++;
    } else {
      console.log("Draw");
      i--;
    }
  }

  alert(playerScore > computerScore ? "Player wins!" : "Computer wins!");
}

function getComputerChoice() {
  let variants = ["rock", "paper", "scissors"];
  return variants[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win!";
  } else if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
}

game();
