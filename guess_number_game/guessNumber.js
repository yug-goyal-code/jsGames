var randomNumber = Math.floor(Math.random()*100);//never use var
var chances = 10;
var prevGues = "";
var submitButton = document.getElementById("submitButton");
submitButton.onclick = () => {
    console.log("submit button clicked ad random number is="+randomNumber);
    var inputNumber = document.getElementById("inputNumber").value;
    console.log("entered number is="+inputNumber);
    if(inputNumber===""){
        document.getElementById("result").innerHTML = "Please enter a valid guess";//the button should not be enabled if you leave the field blank
        document.getElementById("result").style.backgroundColor = "yellow";
    }
    else{
        if(chances) {
           prevGues += inputNumber+" ";
           document.getElementById("prevGuessArray").innerHTML = prevGues;
           check(inputNumber);
        }
        else {
            location.replace("redirectIfLose.html");
        }
    }
    
}

function check(inputNumber) {
    if(inputNumber<randomNumber) {
        console.log("inside if");
        document.getElementById("result").innerHTML = "Your guess is smaller than the answer";
        document.getElementById("result").style.backgroundColor = "red";
        chances--;
        document.getElementById("chanceLeftCount").innerHTML = chances;
    }
    else if(inputNumber>randomNumber){
        console.log("inside else if");
        document.getElementById("result").innerHTML = "Your guess is larger than the answer";
        document.getElementById("result").style.backgroundColor = "red";
        chances--;
        document.getElementById("chanceLeftCount").innerHTML = chances;
    }
    else{
        document.getElementById("result").style.backgroundColor = "green";
        console.log("inside else");
        document.getElementById("result").innerHTML = "you won";
        location.replace("redirectIfWon.html");
    }
}















