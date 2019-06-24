let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = function() {
  return Math.floor(Math.random()*9);
};

let compareGuesses = function(humanScore, computerScore, targetNumber) {
  if (Math.abs(targetNumber - humanScore) <= Math.abs(targetNumber - computerScore)) {
    return true;
    } else {
    return false;
  }
};

let updateScore = function(winner) {
  if (winner === 'human'){
    humanScore += 1;
  } else if(winner === 'computer'){
    computerScore += 1;
  }
};

let advanceRound = function() {
  currentRoundNumber ++;
}
