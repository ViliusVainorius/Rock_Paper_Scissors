function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      return GetRockSolution(computerChoice);

    case "paper":
      return GetPaperSolution(computerChoice);
      break;

    case "scissors":
      return GetScissorsSolution(computerChoice);
      break;
  }
}

function displayResult(text) {
  const result = document.querySelector("#result");
  result.textContent = text;
}

function GetRockSolution(computerChoice) {
  if (computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  } else {
    return "Tie! Rock does not beat Rock";
  }
}

function GetPaperSolution(computerChoice) {
  if (computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  } else if (computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else {
    return "Tie! Paper does not beat Paper";
  }
}

function GetScissorsSolution(computerChoice) {
  if (computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  } else {
    return "Tie! Scissors does not beat Scissors";
  }
}

function checkHumanChoice(humanChoice) {
  if (
    humanChoice === "paper" ||
    humanChoice === "rock" ||
    humanChoice === "scissors"
  ) {
    return true;
  }

  return false;
}

function playGame() {
  if (computerScore === 5) {
    gameEnd.style.color = "red";
    gameEnd.textContent = "You lost. Better luck next time!";
    finishGame();
  }

  if (humanScore === 5) {
    gameEnd.style.color = "green";
    gameEnd.textContent = "You won! Congratulations!";
    finishGame();
  }
}

function finishGame() {
  toggleChoiceBtn();
  playAgain.style.display = "block";
  gameEnd.style.display = "block";
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  toggleChoiceBtn();
  playAgain.style.display = "none";
  gameEnd.style.display = "none";
  displayResult("");
}

function toggleChoiceBtn() {
  const allBtns = choiceBtnSelector.querySelectorAll("button");

  allBtns.forEach((btn) => {
    btn.disabled = !btn.disabled;
  });
}

function updateScore() {
  const score = document.querySelector("#score");
  score.textContent = `Score: ${humanScore}:${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

const playAgain = document.querySelector("#playAgain");
playAgain.style.display = "none";

playAgain.addEventListener("click", () => restartGame());

const choiceBtnSelector = document.querySelector("#choice");
choiceBtnSelector.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const computerChoice = getComputerChoice();
    displayResult(playRound(e.target.textContent, computerChoice));
    updateScore();
    playGame();
  }
});

const gameEnd = document.querySelector("#gameEnd");
