function getComputerChoice() {
    let choice;
    let roll = Math.ceil(Math.random() * 3);
    switch(roll) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Make your choice: rock , paper or scissors?");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        alert("Invalid choice!");
        getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return `${humanChoice} vs ${computerChoice}\nDraw!\n${humanScore} : ${computerScore}`;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return `${humanChoice} vs ${computerChoice}\nYou win! ${humanChoice} beats ${computerChoice}!\n${humanScore} : ${computerScore}`;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return `${humanChoice} vs ${computerChoice}\nYou win! ${humanChoice} beats ${computerChoice}!\n${humanScore} : ${computerScore}`;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return `${humanChoice} vs ${computerChoice}\nYou win! ${humanChoice} beats ${computerChoice}!\n${humanScore} : ${computerScore}`;
        } else {
            computerScore++;
            return `${humanChoice} vs ${computerChoice}\nYou Lost... ${humanChoice} loses to ${computerChoice}!\n${humanScore} : ${computerScore}`;
        }
    }

    for (i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
}

playGame();