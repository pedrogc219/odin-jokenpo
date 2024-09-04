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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return `Draw!\n${humanScore} : ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}!\n${humanScore} : ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}!\n${humanScore} : ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}!\n${humanScore} : ${computerScore}`;
    } else {
        computerScore++;
        return `You Lost... ${humanChoice} loses to ${computerChoice}!\n${humanScore} : ${computerScore}`;
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));