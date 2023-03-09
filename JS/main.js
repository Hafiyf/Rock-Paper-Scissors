const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scis = document.querySelector(".scissors");
const rpsItem = document.querySelector(".rps__item");
const gameUI = document.querySelector(".game__rps");
const gameUI1 = document.querySelector(".game");
const compChoice = document.querySelector(".comp__choice");
const againBtn = document.querySelector(".again");
const compChoiceImg = document.querySelector(".compChoiceImg");
let scoreValue = document.querySelector(".score__value");
const winner = document.querySelector(".winner__title");
const winner2 = document.querySelector(".winner__title2");
const againBtn2 = document.querySelector(".again2");
const uPicked = document.querySelector(".u__picked");
const compPicked = document.querySelector(".comp__picked");
const loader = document.querySelector(".loader");

let computerOption = "";
let playerChoice = "";
let roundWinner = "";
let score = "";

function playerOption(option){
  if(option = "rock"){
    rockChoice()
  } else if(option = 'paper'){
    paperChoice()
  } else if(option = 'scissors'){
    scisChoice()
  }
}

function rockChoice() {
  paper.classList.add("disable");
  scis.classList.add("disable");
  playerChoice = "ROCK";
  rmDisable();
}

function paperChoice() {
  rock.classList.add("disable");
  scis.classList.add("disable");
  playerChoice = "PAPER";
  rmDisable();
}

function scisChoice() {
  rock.classList.add("disable");
  paper.classList.add("disable");
  playerChoice = "SCISSORS";
  rmDisable();
}


function rmDisable(){
  gameUI.style.background = "none";
  gameUI.style.width = "20%";
  gameUI1.style.justifyContent = "space-around";
  compChoice.classList.remove("disable");
  againBtn.classList.remove("disable");
  winner.classList.remove("disable");
  uPicked.classList.remove("disable");
  compPicked.classList.remove("disable");
  compChoiceImg.setAttribute("src", "./images/Oval.svg");
  playRound()
  // setTimeout("playRound()", 1000);

}

function winnerValue(){
  ++score;
  scoreValue.textContent = score;
  compChoice.style.boxShadow = "none";
  document.querySelector(".rps__item").style.boxShadow =
    "0px 0px 0px 45px #ffffff2d, 0px 0px 0px 90px #ffffff1b";
}



const choices = ["ROCK", "PAPER", "SCISSORS"];

function computerChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  setImg(choice);
  return choice;
}

function setImg(choice) {
  switch (choice) {
    case "ROCK":
      compChoiceImg.setAttribute("src", "./images/rock-group.svg");
      break;

    case "PAPER":
      compChoiceImg.setAttribute("src", "./images/paper-group.svg");
      break;

    case "SCISSORS":
      compChoiceImg.setAttribute("src", "./images/scissors-group.svg");
      break;
  }
}

function playRound() {
  computerOption = computerChoice();
  if (playerChoice === computerOption) {
    roundWinner = "tie";
    winnerValue()
  } else if (
    (playerChoice === "ROCK" && computerOption === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerOption === "PAPER") ||
    (playerChoice === "PAPER" && computerOption === "ROCK")
  ) {
    roundWinner = "you win";
    winnerValue()
  } else {
    roundWinner = "computer win";
    rpsItem.style.boxShadow = "none";
    compChoice.style.boxShadow =
      "0px 0px 0px 45px #ffffff2d, 0px 0px 0px 90px #ffffff1b";
  }

  winner.textContent = roundWinner;
  winner2.textContent = roundWinner;
}







// AGAIN btn
function again() {
  rock.classList.remove("disable");
  paper.classList.remove("disable");
  scis.classList.remove("disable");
  winner.classList.add("disable");
  
  winner.setAttribute('value', '')

  againBtn.classList.add("disable");
  uPicked.classList.add("disable");
  compPicked.classList.add("disable");

  gameUI.style.background = "";
  gameUI.style.width = "";
  gameUI1.style.justifyContent = "center";
  rpsItem.style.boxShadow = "none";
  compChoice.classList.add("disable");
  compChoiceImg.setAttribute('src', '')
  compChoice.style.boxShadow = "none";
}
