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
    
    ComputerChoice = (random == 1) ? "PAPER" :
    (random == 2) ? "SCISSORS" : "ROCK"
    return ComputerChoice;
}





const results = document.querySelector(".result_round");
const buttons = document.querySelectorAll("#choice button");
const P_Score = document.querySelector("#P_Score");
const C_Score = document.querySelector("#C_Score");
const Winner = document.querySelector("#WINNER");
const resetter = document.querySelector('#RESET');

const score = document.querySelector(".score");

let Computer_Score = 0, Player_Score = 0;

buttons.forEach((button) => {
    button.addEventListener(
        "click",
        () => {
            
            
            let result_round = document.createElement("li");
            result_round.className = "temp_result";
            
            result_round.textContent = RPS(button.textContent,setComputerChoice());
            results.appendChild(result_round);
           
            if(result_round.textContent == "You WIN"){
                Player_Score++;
            }
            else{
                if(result_round.textContent == "You Lose"){
                 
                    Computer_Score++;
                }
            }
            if(Computer_Score == 5){
                Winner.textContent = "COMPUTER";
                buttons.forEach((button) => button.disabled = true);
            }
            else{
                if(Player_Score == 5){
                    Winner.textContent = "YOU";
                    buttons.forEach((button) => button.disabled = true);
                }
            }
            C_Score.textContent = Computer_Score;
            P_Score.textContent = Player_Score;
        }
    )
})

resetter.addEventListener(
    "click",
    () => {
        Player_Score = 0;
        Computer_Score = 0;
        Winner.textContent = "";
        C_Score.textContent = Computer_Score;
        P_Score.textContent = Player_Score;
        buttons.forEach((button) => {
            button.disabled = false;
        });
        const temp_res = document.querySelectorAll(".temp_result");
        temp_res.forEach((res) => {
            res.remove();
        })
        
    }
)




