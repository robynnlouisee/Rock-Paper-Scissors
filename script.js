function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper"
    }else {
        return"scissors"
  }
}

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            roundResult.textContent = `It's a tie! You both chose ${humanChoice}`;
            return 0;
        }

        if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") 
    ){
                roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`; 
                return 1;
            } else {
                roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
                return -1;
            }
            }

    let humanScore = 0;
    let computerScore = 0;


 
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");
    const roundResult = document.getElementById("round-results");
    const scoreDisplay = document.getElementById("score");
  

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === 1) {
        humanScore++;
    } else if (result === -1) {
        computerScore++;
    }

    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        const gameMessage = document.getElementById('game-message');
    
        if (humanScore > computerScore) {
            roundResult.textContent = "You won the game!";
            confetti();
            gameMessage.style.color = "green";
            gameMessage.textContent = "🎉 You beat the computer!";
            gameMessage.style.display = "block";
        } else {
            roundResult.textContent = "The computer won the game!"
            gameMessage.style.color = "red";
            gameMessage.textContent = "☠️ Game Over - The Computer Wins!";
            gameMessage.style.display = "block";
        };
    }
}

  const resetBtn = document.getElementById('reset-button');

resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = `Human: 0 | Computer: 0`;
    roundResult.textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    document.getElementById("game-message").textContent = "";

});