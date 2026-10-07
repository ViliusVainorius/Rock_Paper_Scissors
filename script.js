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

function getHumanChoice() {
  let input = prompt('Choose one of "rock", "paper", "scissors"');
  return input.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      console.log(GetRockSolution(computerChoice));
      break;

    case "paper":
      console.log(GetPaperSolution(computerChoice));
      break;

    case "scissors":
      console.log(GetScissorsSolution(computerChoice));
      break;

    default:
      console.log("Invalid user choice. Please select existing value.");
      break;
  }
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
  }

  console.log(`Final results after 5 games:`);
  console.log(`${humanScore}:${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won! Congratulations!");
  } else if (humanScore < computerScore) {
    console.log("You lost. Better luck next time!");
  } else console.log("It's a tie!");
}

let humanScore = 0;
let computerScore = 0;
playGame();
