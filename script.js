

function RPS(PlayerChoice, ComputerChoice){ //Play a round of RPS
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
    while (PlayerChoice !== "PAPER" && PlayerChoice !== "ROCK" && PlayerChoice !== "SCISSORS"){ //to ensure the choice
        alert(`${PlayerChoice} is not a valid option.\n try with ROCK, PAPER or SCISSORS`);
        PlayerChoice = prompt("Choix ?", '');
        PlayerChoice = PlayerChoice.toUpperCase();
    }
    return PlayerChoice;
}


function Game(nb_rounds){ //plays the game for as many round as wanted
    let Winner;
    let ComputerChoice, PlayerChoice;
    let Computer_Score = 0, Player_Score = 0;
    let result;
    for(let i = 0; i < nb_rounds; i++){
        ComputerChoice = setComputerChoice();
        PlayerChoice = setPlayerChoice();
        console.log(`Round ${i+1} :\n Player : ${PlayerChoice} VS Ordi : ${ComputerChoice}`);
        result = RPS(PlayerChoice, ComputerChoice);
        console.log(result)
        if(result === "You WIN"){
            
            Player_Score++;
        }
        else{
            if(result === "You Lose"){
                
                Computer_Score++;
            }
            
            
        }
        console.log(`Player : ${Player_Score} || Computer : ${Computer_Score}`);
        
    }
    
    Winner = (Player_Score > Computer_Score) ? "Player" : 
    (Player_Score < Computer_Score) ? "Computer" : "Nobody :("
    console.log(`The winner is : ${Winner}`);

}



let nbrounds = prompt("choose number of rounds",'3');
while(nbrounds < 1){
    alert("you have to play at least 1 round please");
    nbrounds = prompt("choose number of rounds",'3');
}
Game(nbrounds);







