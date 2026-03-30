function getComputerChoice(){
    let res = Math.floor(Math.random() * 3);
    if (res == 0)
        return "rock";
    if (res == 1)
        return "paper";
    return "scissors";
}

// THIS FUNCTION IS NOT USED ANYMORE. I DECIDED TO JUST COMMENT IT, INSTEAD OF DELETING IT
// function getHumanChoice(){
//     return prompt("Choose rock, paper or scissors").toLowerCase();
// }

function playRound(h, c){
    let choice = "You picked " + h + ". Computer picked " + c + ". "; 
    if (h == c)
        return choice + "It's a tie.";
    if ((h == "rock" && c == "scissors") || (h == "paper" && c == "rock") || (h == "scissors" && c == "paper")){
        humanScore++;
        return choice + "You win this round, " + h + " beats " + c + "!";
    } 
    computerScore++;
    return choice + "You lose this round, " + c + " beats " + h + "!";           
}

function playGame(){
    let btns = document.getElementsByTagName("button");
    
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", (e) => {
            let result = playRound(e.target.id, getComputerChoice());
            let score = "<br>" + "Score human-computer: " + humanScore + "-" + computerScore;
            let final = "";
            document.getElementById("score").innerHTML = result + " " + score;
            
            if(humanScore == 5 || computerScore == 5){
                if(humanScore > computerScore)
                    final = "You won the game!";
                else final = "You lost the game!";
                document.getElementById("score").innerHTML += "<br>" + final;
                humanScore = 0;
                computerScore = 0;
            }
        });
    }
}

let humanScore = 0, computerScore = 0;

playGame();