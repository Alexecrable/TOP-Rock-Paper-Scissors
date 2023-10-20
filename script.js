

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


function setComputerChoice(ComputerChoice){
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    (random == 1) ? ComputerChoice = "PAPER" :
    (random == 2) ? ComputerChoice = "SCISSORS" : ComputerChoice = "ROCK"
    return ComputerChoice;
}


let ComputerChoice = "";

ComputerChoice = setComputerChoice(ComputerChoice);


let PlayerChoice = prompt("Choix ?", '');

PlayerChoice = PlayerChoice.toUpperCase();

while (PlayerChoice !== "PAPER" && PlayerChoice !== "ROCK" && PlayerChoice !== "SCISSORS"){
    alert(`${PlayerChoice} is not a valid option.\n try with ROCK, PAPER or SCISSORS`);
    PlayerChoice = prompt("Choix ?", '');
    PlayerChoice = PlayerChoice.toUpperCase();
}


console.log(`Joueur : ${PlayerChoice} VS Ordi : ${ComputerChoice}`);
console.log(RPS(PlayerChoice, ComputerChoice));
