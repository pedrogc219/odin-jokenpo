let humanScore = 0;
let computerScore = 0;

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