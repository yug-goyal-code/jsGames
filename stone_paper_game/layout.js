var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var playerChoice = 0;
var playerScore = 0;
var computerScore = 0;
stone.onclick = function(){
    console.log("stone button clicked");//no console logs
    playerChoice = 0;
    document.getElementById("playerOptionImage").src =  "stone.png";
    computerKaFaisla();//computer's move
}
paper.onclick = function(){
    console.log("paper button clicked");
    playerChoice = 1;
    document.getElementById("playerOptionImage").src =  "paper.png";
    computerKaFaisla();
}
scissor.onclick = function(){
    console.log("scissor button clicked");
    playerChoice = 2;
    document.getElementById("playerOptionImage").src =  "scissors.png";
    computerKaFaisla();
}
var computerkiChoice;//poor naming
function computerKaFaisla(){
    var randomNumber = (parseInt(Math.random()*1000))%3;
    console.log("this is our random Number="+randomNumber);
    if(randomNumber===0){
        document.getElementById("computerOptionImage").src = "stone.png";
    }
    else if(randomNumber===1){
        document.getElementById("computerOptionImage").src = "paper.png";
    }
    else document.getElementById("computerOptionImage").src = "scissors.png";
    computerkiChoice = randomNumber;
    result();
}
function result(){
    if(playerChoice === computerkiChoice){
        console.log("draw hogaya");
    }
    else{
        if(playerChoice==0 && computerkiChoice==1){
            console.log("computer jeet gaya p = stone c = paper");
            computerScore++;
        }
        else if(playerChoice==0 && computerkiChoice==2){
            console.log("plager win p= stone c = scissor");
            playerScore++;
        }
        else if(playerChoice==1 && computerkiChoice==0){
            console.log("plager win p= paper c = stone");
            playerScore++;
        }
        else if(playerChoice==1 && computerkiChoice==2){
            console.log("computer win p= paper c = scissor");
            computerScore++;
        }
        else if(playerChoice==2 && computerkiChoice==0){
            console.log("computer win p= scissor c = stone");
            computerScore++;
        }
        else if(playerChoice==2 && computerkiChoice==1){
            console.log("plager win p= scissor c = paper");
            playerScore++;
        }
    }
    document.getElementById("playerScoreD").innerHTML = playerScore;
    document.getElementById("computerScoreD").innerHTML = computerScore;
    if(playerScore==5 || computerScore==5){
        newGame();
    }
}
function newGame(){
    if(playerScore==5) location.replace("redirectifWin.html");
    else location.replace("redirectIfLose.html")
}