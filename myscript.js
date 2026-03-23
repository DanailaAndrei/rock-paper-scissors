function getComputerChoice(){
    let res = Math.floor(Math.random() * 3);
    if (res == 0)
        return "rock";
    if (res == 1)
        return "paper";
    return "scissors";
}

function getHumanChoice(){
    return prompt("Choose rock, paper or scissors").toLowerCase();
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice ,computerChoice){
    if (humanChoice == computerChoice)
        console.log("It's a tie");
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } 
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }           
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);