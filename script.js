"use strict";

//Variables
const choice = ["ROCK", "PAPER", "SCISSORS"];
var computerSelection;
var playerSelection;
var playerScore = 0;
var compScore = 0;

//Functions
function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let ask = prompt("Enter Rock, Paper or Scissors");
  return ask.toUpperCase();
}

function playRound(player, comp) {
  switch (true) {
    case player === comp:
      console.log("It's a draw");
      break;

    case player === "ROCK" && comp === "SCISSORS":
      console.log("Player wins");
      return playerScore++;
      break;

    case player === "PAPER" && comp === "ROCK":
      console.log("Player wins");
      return playerScore++;
      break;

    case player === "SCISSORS" && comp === "PAPER":
      console.log("Player wins");
      return playerScore++;
      break;

    case comp === "ROCK" && player === "SCISSORS":
      console.log("Comp Wins");
      return compScore++;
      break;

    case comp === "PAPER" && player === "ROCK":
      console.log("Comp wins");
      return compScore++;
      break;

    case comp === "SCISSORS" && player === "PAPER":
      console.log("Player wins");
      return compScore++;
      break;

    default:
      console.log("Enter Rock, Paper or Scissors correctly");
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > compScore) {
    console.log("Player wins game");
  } else if (compScore > playerScore) {
    console.log("Comp wins game");
  } else {
    console.log("It's a draw");
  }
}

game();
