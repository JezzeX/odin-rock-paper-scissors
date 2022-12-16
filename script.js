const compChoice = ["ROCK", "PAPER", "SCISSORS"];

const button = document.querySelectorAll("button");

const div = document.querySelector("div");

const p = document.querySelector("p");

function getComputerChoice() {
  return compChoice[Math.floor(Math.random() * 3)];
}

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  });
});

function playRound(player, comp) {
  p.textContent = `Computer chose ${comp}`;
  switch (true) {
    case player === comp:
      div.textContent = "It's a draw";
      break;

    case player === "ROCK" && comp === "SCISSORS":
      div.textContent = "Player wins";
      break;

    case player === "PAPER" && comp === "ROCK":
      div.textContent = "Player wins";
      break;

    case player === "SCISSORS" && comp === "PAPER":
      div.textContent = "Player wins";
      break;

    case comp === "ROCK" && player === "SCISSORS":
      div.textContent = "Comp wins";
      break;

    case comp === "PAPER" && player === "ROCK":
      div.textContent = "Comp wins";
      break;

    case comp === "SCISSORS" && player === "PAPER":
      div.textContent = "Comp wins";
      break;

    default:
      console.log("Enter Rock, Paper or Scissors correctly");
  }
}
