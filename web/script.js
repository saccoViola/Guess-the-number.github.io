let numberToGuess = Math.floor(Math.random()*(100));

let userInput = document.getElementById("user-input");
let checkButton = document.getElementById("check");
let tip = document.getElementById("tip");
let attempts = document.getElementById("attempts");
let gameCore = document.getElementById("game-core");
let numberAttempts = 10;

checkButton.addEventListener("click", ()=>{
    tip.style.display = "block";
    numberAttempts --;
    attempts.innerHTML = `You still have ${numberAttempts} attempts`;
    if (numberAttempts == 0){
        attempts.innerHTML = "You lost";
        gameCore.style.display = "none";
    }

    if(userInput.value < numberToGuess){
        tip.innerHTML = "your number is low";  
    }
    else if (userInput.value > numberToGuess){
        tip.innerHTML = "your number is high";
        
    }
    else{
        tip.innerHTML = "You guessed right!";
        attempts.innerHTML = "You won!"
    }
})


