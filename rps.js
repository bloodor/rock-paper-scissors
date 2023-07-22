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
    return `You won this round, ${player} beats ${computer}`;
}

draw = (player, computer) => {
    return `This round is a tie ! You both chose ${player}`;
}

loss = (player, computer) => {
    computerScore++;
    return `You lost this round, ${player} gets beaten by ${computer}`;
}

unexpectedResult = () => {
    return "Please enter rock, paper or scissors (case do not matter)";
}


playRound = (playerSelection, computerSelection) => {
    if (playerSelection === '')
        return unexpectedResult();
    else if (playerSelection === computerSelection)
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

let playerScore = 0;
let computerScore = 0;

game = () => {
    while (playerScore < 3 && computerScore < 3) {
        let computerChoice = getComputerChoice();
        let userChoice = prompt("Rock, Paper or Scissors ?").toLowerCase();
        console.log(playRound(userChoice, computerChoice));
    }
    if (playerScore === 3)
        console.log("Congratulations! You won the game.")
    else if (computerScore === 3)
        console.log("You will do better next time! Computer won the game.")
}

game();