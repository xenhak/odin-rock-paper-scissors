const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    randomChoice = "rock";
  } else if (randomChoice === 1) {
    randomChoice = "paper";
  } else {
    randomChoice = "scissors";
  }

  return randomChoice;
};

// getComputerChoice();
console.log(getComputerChoice());
