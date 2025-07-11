//getting elements from DOM
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check");
const tip = document.getElementById("tip");
const attempts = document.getElementById("attempts");
const gameCore = document.getElementById("game-core");
const picks = document.getElementById("picks");
let attemptsShowed = document.getElementById("show-attempts");
const title = document.getElementById("title")

const translations = {
  en: {
    title: "GUESS THE RANDOM NUMBER BETWEEN 1 AND 100",
    check: "CHECK",
    selectedNumbers: "You selected the following numbers:",
  },
  it: {
    title: "INDOVINA IL NUMERO CASUALE TRA 1 E 100",
    check: "VERIFICA",
    selectedNumbers: "Hai selezionato i seguenti numeri:",
  }
}; 

document.querySelectorAll('#language-selector button').forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.value;
    changeLanguage(selectedLang);
  });
});

const italianLanguage = document.getElementById("lang-it")
//number to guess
let numberToGuess = Math.floor(Math.random()*(100));

//creating a button to restart the game
const restartButton = document.createElement("button");
restartButton.setAttribute("tabindex", "0");

restartButton.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        location.reload();
    }
})

//number attempts
let numberAttempts = 6;

attemptsShowed.style.display = "none";

//click the button or pressing enter

checkButton.addEventListener("click", ()=>{
   submit()
})

userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        submit();
    }
})



function submit() {
    tip.style.display = "block";
    attemptsShowed.style.display = "block";

    if (userInput.value > 100 || userInput.value <= 0){
        tip.innerHTML = `You need to pick a number between 1 and 100`; 
    }
    else if(userInput.value < numberToGuess){
        tip.innerHTML = `You picked ${userInput.value}, try with a <b>higher</b> number`; 
        numberSelected() 
        showAttempts()
    }
    else if (userInput.value > numberToGuess){
        tip.innerHTML = `You picked ${userInput.value}, try with a <b>lower</b> number`;
        numberSelected()
        showAttempts()  
    }
    else{
        youWon()
    }
    if (numberAttempts == 0){ 
        youLost()
    }
    userInput.value = "";   
}

function youWon() {
        tip.innerHTML = "You guessed right!";
        attempts.innerHTML = "You won!";
        attemptsShowed.style.display = "none";
        picks.style.display = "none";
        gameCore.style.display = "none";
        restart()
}

function youLost() {
    tip.innerHTML = `The number to guess was ${numberToGuess}`;
    attempts.innerHTML = "You lost :(";
    attemptsShowed.style.display = "none";
    picks.style.display = "none";
    gameCore.style.display = "none";
    restart()
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
    attemptsShowed.style.display = "none";
}

function errorMessage() {
    userInput.classList.add("error-message");

}


function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
}