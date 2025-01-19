let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx  = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText = "Game was Draw . play again";
    msg.style.backgroundColor="black";


};

const showWinner = (userWin , userChoice,CompChoice)=>{
    if( userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText=`you win!   Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        CompScore ++;
        CompScorePara.innerText = CompScore;
        msg.innerText= `you lose ${CompChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const CompChoice = genCompChoice();
    console.log("Comp choice = ",CompChoice);

    if(userChoice === CompChoice){
        drawGame();
        
    }
    else{
        let userWin= true;
        if(userChoice ==="rock"){
           userWin = CompChoice ==="paper"? false : true;


        }
        else if(userChoice   === "paper"){
            userWin = CompChoice === "scissors" ? false:true;
        }
        else{
            userWin = CompChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
