const rockBtn = document.getElementById('rock-button');
const paperBtn = document.getElementById('paper-button');
const scissorsBtn = document.getElementById('scissots-button');

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function getComputerChoice () {
        const randomNumber = Math.floor(Math.random() * 3);

        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber ===1) {
            return "paper"
        }else {
            return"scissors"
    }
}


    function getHumanChoice () {
      let sign = prompt("rock, paper, or scissors?");
      if (sign) {
        sign = sign.toLowerCase();
      }
       if (sign === "rock") {
        return "rock"
       } else if (sign === "paper") {
        return "paper"
       } else if (sign === "scissors") {
        return "scissors"
       }
    }



    function playRound (humanChoice, computerChoice) {


        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoice}.`);
            return 0;
        }
        if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") 
    ){
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`); return 1;
            } else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                return -1;
            }
            }

            
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

const rockButton = document.createElement('Button');
rockButton.textContent = "Rock";
rockButton.id = "rock";

const paperButton = document.createElement('Button');
paperButton.textContent = "Paper";
paperButton.id = "paper";

const scissorsButton = document.createElement('Button');
scissorsButton.textContent = "Scissors";
scissorsButton.id = "scissors";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

let resultsDiv = document.createElement("div");
document.body.appendChild = (results);

let humanScoreDisplay = document.createElement("p");
humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
let computerScoreDisplay = document.createElement("p");
computerScoreDisplay.textContent = 'Computer Score: ${computerScore}';

scoreDiv.appendChild(humanScoreDisplay);
scoreDiv.appendChild(computerScoreDisplay);

let scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);

let roundResult = playRound(humanChoice, computerChoice);
    if (roundResult ===1) {
        humanScore++;
    } else if (roundResult === -1) {
        computerScore++;
    }
    }

let finalScore = "";
if (humanScore > computerScore) {
    finalScore = "You win!";
} else if (humanScore < computerScore) {
    finalScore = "You lose!";
} else {
    finalScore = "It's a tie!";
}

resultDiv.textContent = finalScore;


            playGame();
