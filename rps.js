let playerScore = 0;
let computerScore = 0;

let playerButtons = document.querySelectorAll('.playerButton');
let resultText = document.querySelector('#result');
let computerScoreText = document.querySelector('#computerScore');
let playerScoreText = document.querySelector('#playerScore');

playerButtons.forEach(element => element.addEventListener('click', function() {
    playRound(this.id);

    playerScoreText.textContent = `Player score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    
    if (playerScore === 5) {
        resultText.textContent = "Congratulations! You won the game.";
    }
    else if (computerScore === 5) {
        resultText.textContent =  "Better luck next time! Computer won the game.";
    }
    
    if (computerScore === 5 || playerScore === 5) {
        computerScore = 0;
        playerScore = 0;
    }
}));


getComputerChoice = () =>  {
    let value = "";
    let number = Math.floor(Math.random() * (3));;
    switch (number) {
        case 0 :
            value = "rock";
            break;
        case 1 :
            value = "paper";
            break;
        case 2 :
            value = "scissors";
            break;
    }
    return value;
}

win = (player, computer) => {
    playerScore++;
    resultText.textContent = `You won this round, ${player} beats ${computer}`;
}

draw = (player) => {
    resultText.textContent = `This round is a tie ! You both chose ${player}`
}

loss = (player, computer) => {
    computerScore++;
    resultText.textContent = `You lost this round, ${player} gets beaten by ${computer}`;
}

playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection)
        return draw(playerSelection);
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper')
            return loss(playerSelection, computerSelection);
        else if (computerSelection === 'scissors')
            return win(playerSelection, computerSelection);
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock')
            return win(playerSelection, computerSelection);
        else if (computerSelection === 'scissors')
            return loss(playerSelection, computerSelection);
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock')
            return loss(playerSelection, computerSelection);
        else if (computerSelection === 'paper')
            return win(playerSelection, computerSelection);
    }
}