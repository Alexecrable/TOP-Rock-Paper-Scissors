

function RPS(PlayerChoice, ComputerChoice){
    let res;
    if(PlayerChoice === ComputerChoice){
        
        return "Equality";
    }

    if (PlayerChoice === "ROCK"){
        res = (ComputerChoice === "PAPER") ?  "You Lose" : "You WIN"
    }
    else{
        if(PlayerChoice === "PAPER"){
            res = (ComputerChoice === "SCISSORS") ?  "You Lose" : "You WIN"
        }
        else{
            res = (ComputerChoice === "ROCK") ?  "You Lose" : "You WIN"
        }
    }
    return res;
    
}


function setComputerChoice(){
    let ComputerChoice = '';
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    ComputerChoice = (random == 1) ? "PAPER" :
    (random == 2) ? "SCISSORS" : "ROCK"
    return ComputerChoice;
}

function setPlayerChoice(){
    let PlayerChoice = prompt("Choix ?", '');
    PlayerChoice = PlayerChoice.toUpperCase();
    while (PlayerChoice !== "PAPER" && PlayerChoice !== "ROCK" && PlayerChoice !== "SCISSORS"){
        alert(`${PlayerChoice} is not a valid option.\n try with ROCK, PAPER or SCISSORS`);
        PlayerChoice = prompt("Choix ?", '');
        PlayerChoice = PlayerChoice.toUpperCase();
    }
    return PlayerChoice;
}





let ComputerChoice = setComputerChoice();
let PlayerChoice = setPlayerChoice();


console.log(`Joueur : ${PlayerChoice} VS Ordi : ${ComputerChoice}`);
console.log(RPS(PlayerChoice, ComputerChoice));
