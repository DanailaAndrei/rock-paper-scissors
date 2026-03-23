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

function playGame(){
    let humanScore = 0, computerScore = 0;

    for(let i = 1; i <= 5; i++){
        console.log("Round " + i + ":");
        const humanSelection = getHumanChoice();
        console.log("You chose " + humanSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer chose " + computerSelection);

        let result = (h ,c) => {
            if (h == c)
                return "It's a tie.";
            if ((h == "rock" && c == "scissors") || (h == "paper" && c == "rock") || (h == "scissors" && c == "paper")){
                humanScore++;
                return "You win this round, " + h + " beats " + c + "!";
            } 
            computerScore++;
            return "You lose this round, " + c + " beats " + h + "!";            
        }
        console.log(result(humanSelection ,computerSelection));
    }
    if(humanScore > computerScore)
        console.log("You won the game!");
    else console.log("You lost the game!");
    console.log("Score human-computer: " + humanScore + "-" + computerScore);
}

playGame();