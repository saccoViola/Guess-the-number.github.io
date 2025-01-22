let numberToGuess = Math.floor(Math.random()*(100));

let userInput = document.getElementById("user-input");
let checkButton = document.getElementById("check");
let tip = document.getElementById("tip");
let attempts = document.getElementById("attempts");
let gameCore = document.getElementById("game-core");
let picks = document.getElementById("picks");
let titolo = document.getElementById("selected");

let numberAttempts = 5;

titolo.style.display = "none";

let restartButton = document.createElement("button");

// let userGuess = parseInt(userInput.value);

checkButton.addEventListener("click", ()=>{
   submit()
})

userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        submit();
    }
})

restartButton.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        restart();
    }
})

function submit() {
    tip.style.display = "block";
    titolo.style.display = "block";

    if (userInput.value > 100 || userInput.value <= 0){
        errorMessage()
        tip.innerHTML = `You need to pick a number between 1 and 100`; 
    }
    
    else if(userInput.value < numberToGuess){
        tip.innerHTML = `You picked ${userInput.value} ,this numer is lower than the one you have to guess`; 
        numberSelected() 
        showAttempts()
    }
    else if (userInput.value > numberToGuess){
        tip.innerHTML = `You picked ${userInput.value} ,this numer is higher than the one you have to guess`;
        numberSelected()
        showAttempts()
        
    }
    else{
        youWon()
    }
    youLost()
    userInput.value = "";
    
    
    
}

function youWon() {
        tip.innerHTML = "You guessed right!";
        attempts.innerHTML = "You won!";
        titolo.style.display = "none";
        picks.style.display = "none";
        gameCore.style.display = "none";
        restart()
}


function youLost() {
    if (numberAttempts == 0){
        attempts.innerHTML = "You lost";
        gameCore.style.display = "none";
        tip.innerHTML = `The number to guess was ${numberToGuess}`;
        titolo.style.display = "none";
        picks.style.display = "none";
        restart()
    }
    
}

function numberSelected() {
    let list = document.createElement("li");
    list.innerHTML = `${userInput.value}`
    picks.appendChild(list); 
}

function restart() {
    restartButton.innerHTML = "Riprova!";
    restartButton.style.marginLeft = "40px"
    attempts.appendChild(restartButton);
    restartButton.addEventListener("click", ()=>{
        location.reload()
    })

}

function showAttempts() {
    numberAttempts --;
    attempts.innerHTML = `You still have ${numberAttempts} attempts`; 
    titolo.style.display = "none";
}

function errorMessage() {
    userInput.classList.add("error-message");

}