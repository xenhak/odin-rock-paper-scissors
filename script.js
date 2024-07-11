let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
};

const getHumanChoice = () => {
  let humanChoice = prompt("rock | paper | scissors").toLowerCase();
  return humanChoice;
};

const playGame = () => {
  const playRound = (humanChoice, computerChoice) => {
    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else {
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    }
  };

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  return { humanScore, computerScore };
};

for (i = 0; i < 5; i++) {
  playGame();
}

const displayWinner = (finalHumanScore, finalComputerScore) => {
  if (finalComputerScore > finalHumanScore) {
    console.log(`The winner is: Computer with ${finalComputerScore} points`);
  } else if (computerScore === humanScore) {
    console.log("It's a tie!!!");
  } else {
    console.log(`The winner is: Human with ${finalHumanScore} points`);
  }
};

displayWinner(humanScore, computerScore);
