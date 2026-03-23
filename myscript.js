function getComputerChoice(){
    let res = Math.floor(Math.random() * 3);
    if (res == 0)
        return "rock";
    if (res == 1)
        return "paper";
    return "scissors";
}