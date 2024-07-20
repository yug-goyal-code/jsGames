/*************************************All variables used in program********************************************/
var arrayOfCount = new Array(26);
for(index=0;index<26;index++){
    arrayOfCount[index] = 0;
}
var imageCount=0;
var imagesArray = ["hangmanimg1.png","hangmanimg2.png","hangmanimg3.png","hangmanimg4.png","hangmanimg5.png",
"hangmanimg6.png","hangmanimg7.png"];

var arrayOfTopics = ["State","Car Company","Country","Data Structure"];
/***************************************************************************************************************/
var selectTopic = (Math.floor(Math.random()*1000))%4;
console.log("random1 = "+selectTopic+" arraytopic = "+arrayOfTopics[selectTopic]);
document.getElementById("topicNameReplace").innerHTML = arrayOfTopics[selectTopic];
var resultString = "";

/****************************the array of topics and their hint*************************************************/
if(selectTopic==0){
    var cityArray = ["RAJASTHAN","MADHYPRADESH","UTTARPRADESH","UTTRAKHAND","JAMMUKASHMIR","TAMILNADU"];
    var randomNumber3 = (Math.floor(Math.random()*1000))%6;
    console.log("array of stste  = "+cityArray[randomNumber3]);
    var stateHint = ["favorite tourist spot in india","",
                    "most important engineering colleges are situated here",
                    "this state has many beautiful valley","this state enjoy many special power",
                    "literacy of this state is very high"];
    resultString = cityArray[randomNumber3];
}
else if(selectTopic==1){
    var carArray = ["MARUTISUZUKI","CHRYSLER","HYUNDAI","LAMBORGINI","VOLKSWAGEN","PORSCHE","BUGGATI"];
    var carArraylength = carArray.length;
    var randomNumber5 = (Math.floor(Math.random()*1000))%carArraylength;
    var carHint = ["Cars of this company are very popular in india",
                  "It is one of the 'Big three' automobile' manufacturer","Largest car sold by this company after lockdown",
                  "This company initially manufacture tractor","Among Biggest car seller in the world",
                "Builds among the fastest car in the world","Fastest production car is the world"];
    resultString = carArray[randomNumber5]; 
    
}
else if(selectTopic==2){
    var countryArray = ["ETHIOPIA","CZECHOSLOVAKIA","GUATEMALA","INDONESIA","MOZAMBIQUE","URUGUARY","ZIMBABWE"];
    var countryArrayLength = countryArray.length;
    var randomNumber4 = (Math.floor(Math.random()*1000))%countryArrayLength;
    //console.log("array of country = "+countryArray[randomNumber4]+" random number 4 = "+randomNumber4);
    var countryHint = ["It is landlocked country split by the great rift valley",
                    "The capital of the country is prague","This is home of volcanoes, rainforests and ancient mayan sites",
                    "this country consists of more than 17,000 island including sumatra,java etc",
                    "It's long coastline is dotted with popular beaches like tofo",
                    "It is one of the top 5 producers of wine in south America",
                    "The largest waterfall of world is situated here"];
    resultString = countryArray[randomNumber4];
}
else{
    var dataStructure = ["STACK","QUEUE","TREE","ARRAYLIST","HEAP"];
    var randomNumber2 = (Math.floor(Math.random()*1000))%5;
    console.log("random2 = "+randomNumber2+" datastructure ="+dataStructure[randomNumber2]);
    var dataStructureHint = ["it is well known for its use in balanced paranthesis question",
                            "fifo data structure","Used to store data in non linear form",
                            "resizable array in java",
                            "Another form of tree"];
    resultString = dataStructure[randomNumber2];
}
/*****************************************************************************************************************/

/************************************ Hint button click function**************************************************/
document.getElementById("toGetHintButton").onclick = () => {
    if(selectTopic==0) document.getElementById("hintWill").innerHTML = stateHint[randomNumber3];
    else if(selectTopic==1) document.getElementById("hintWill").innerHTML = carHint[randomNumber5];
    else if(selectTopic==2) document.getElementById("hintWill").innerHTML = countryHint[randomNumber4];
    else document.getElementById("hintWill").innerHTML = dataStructureHint[randomNumber2];
    document.getElementById("toGetHintButton").style.display = "none";
}
/***************************************************************************************************************/




/***************************************** All alphabet button click event will be handeled here*****************/

/***************************************************************************************************************/
var lengthOfString = resultString.length;
// console.log("length = "+lengthOfString);
var chancesUsed  = 0;
var sundarString = "";
for(indexOf= 0;indexOf<lengthOfString;indexOf++){
    sundarString += "_ ";
}
document.getElementById("guessedWord").innerHTML = sundarString;
var characterGuessed = 65;

let userString = "";
for(index = 0;index < lengthOfString; index++){
    userString += "_";
}
function checkForCharacter(characterGuessed) {
    arrayOfCount[characterGuessed-65]++;
    if(arrayOfCount[characterGuessed-65] == 1) {
        if (chancesUsed >= 6) {
            location.replace("redirectIfLose.html");
        }
        else{
            let noMatch = false;
    
            for(let index=0; index<lengthOfString; index++) {
                if (resultString.charCodeAt(index) === characterGuessed) {
                   console.log(String.fromCharCode(characterGuessed));
                   userString = userString.replaceAt(index, String.fromCharCode(characterGuessed));
                   noMatch = true;
                }
            }
            if (!noMatch) {
                document.getElementById("hangmanState").src = imagesArray[imageCount];
                imageCount++;
                chancesUsed++;
            }
            var beauty = "";
            for(index = 0;index<2*lengthOfString;index++){
                if(index%2==0) beauty+=userString.charAt(index/2);
                else beauty+=" ";
            }
            console.log("beauty="+beauty);
            document.getElementById("guessedWord").innerHTML = beauty;//beautify(userString);
            if (userString === resultString) {
                location.replace("redirectIfWin.html");
            }
        }


    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

