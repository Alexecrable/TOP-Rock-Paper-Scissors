








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


function Game(nb_rounds){
    let Vainqueur;
    let ComputerChoice, PlayerChoice;
    let Computer_Score = 0, Player_Score = 0;
    let resultat;
    for(let i = 0; i < nb_rounds; i++){
        ComputerChoice = setComputerChoice();
        PlayerChoice = setPlayerChoice();
        console.log(`Manche ${nb_rounds} :\n Joueur : ${PlayerChoice} VS Ordi : ${ComputerChoice}`);
        resultat = RPS(PlayerChoice, ComputerChoice);
        console.log(resultat)
        if(resultat === "You WIN"){
            
            Player_Score++;
        }
        else{
            if(resultat === "You Lose"){
                
                Computer_Score++;
            }
            
            
        }
        console.log(`Joueur : ${Player_Score} || Computer : ${Computer_Score}`);
        
    }
    
    vainqueur = (Player_Score > Computer_Score) ? "Joueur" : 
    (Player_Score < Computer_Score) ? "Computer" : "Personne :("
    console.log(`The winner is : ${vainqueur}`);

}



let nbrounds = prompt("choose number of rounds",'3');

Game(nbrounds)







