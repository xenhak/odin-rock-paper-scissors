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
      console.log("It's a tie!");
    } else {
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    }
  };

  //   const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  console.log(humanScore);
  console.log(computerScore);
};

for (i = 0; i < 5; i++) {
  playGame();
}
