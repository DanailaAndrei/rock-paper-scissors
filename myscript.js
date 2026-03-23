function getComputerChoice(){
    let res = Math.floor(Math.random() * 3);
    if (res == 0)
        return "rock";
    if (res == 1)
        return "paper";
    return "scissors";
}

function getHumanChoice(){
    let res = prompt("Choose rock, paper or scissors");
    return res;
}