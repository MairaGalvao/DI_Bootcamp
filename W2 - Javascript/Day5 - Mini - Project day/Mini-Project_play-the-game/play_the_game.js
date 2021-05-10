function playTheGame(){
    let confirmGame = confirm("Would you like to play a game?");
    if (confirmGame == false){
        alert("No problem, Goodbye")
    }
    if (confirmGame == true){
        userNumber = parseFloat(prompt("Amazing, so lets play! Type a number between 0 and 10"))
        if (isNaN(userNumber)){
            alert("Sorry Not a number, Goodbye")
        }else if (userNumber > 10){
        alert("Sorry it’s not a good number, Goodbye")
    }
}return userNumber
}
        
function test(userNumber,computerNumber){
    computerNumber = 5
    // Math.floor(Math.random() * 11)
    for (i = 0; i <= 3; i ++){
        if (userNumber == computerNumber){
            alert("WINNER")
            { break; }   
        }else if(userNumber > computerNumber){
            alert ("Your number is bigger then the computers's guess! Try another number")
        }else if(userNumber < computerNumber)
            alert ("Your number is smaller then the computers's guess! Try another number")  
        }
        if(i > 3){
            alert("Out of chances")
}
}

alert("It was nice playing with you. See you next time")

numberGame = playTheGame()
test(numberGame)