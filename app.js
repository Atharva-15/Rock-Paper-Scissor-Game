let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const genCompChoice=()=>{
 const option=["rock","paper","scissors"];
 const randIdx=Math.floor(Math.random()*3);
 return option[randIdx];
}

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game draw! Play again";
    msg.style.backgroundColor="orange";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        console.log("You lose");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice=genCompChoice()
    console.log("computer choice",compChoice)

        if(userChoice==compChoice){
            drawGame();
        }
        else{
            let userWin=true;
            if(userChoice==="rock"){
                userWin=compChoice==="paper" ? false : true;
            }
            else if(userChoice==="paper"){
                userWin=compChoice==="scissors" ? false:true;
            } else{
                userWin=compChoice==="rock" ? false:true;
            }

            showWinner(userWin);
        }





}




choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      
        playGame(userChoice);
        
    });
});