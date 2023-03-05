const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scis = document.querySelector(".scissors");
const rpsItem = document.querySelector('.rps__item')
const gameUI = document.querySelector(".game__rps");
const gameUI1 = document.querySelector('.game');
const compChoice = document.querySelector(".comp__choice");
const againBtn = document.querySelector('.again')
const compChoiceImg = document.querySelector(".compChoice");
let scoreValue = document.querySelector(".score__value");
const winner = document.querySelector(".winner__title");
const winner2 = document.querySelector(".winner__title2");
const againBtn2 = document.querySelector(".again2");

let computerOption = "";
let playerChoice = "";
let roundWinner = "";
let score = "";

function rockChoice() {
  paper.classList.add("disable");
  scis.classList.add("disable");
  gameUI.style.background = "none";
  gameUI.style.width = '20%';
  gameUI1.style.justifyContent = "space-around";
  compChoice.classList.remove("disable");
  againBtn.classList.remove("disable");
  winner.classList.remove("disable");
  playerChoice = "ROCK";

  playRound();
}

function paperChoice() {
  rock.classList.add("disable");
  scis.classList.add("disable");
  gameUI.style.background = "none";
  gameUI.style.width = '20%'
  gameUI1.style.justifyContent = "space-around";
  compChoice.classList.remove("disable");
  againBtn.classList.remove("disable");
  winner.classList.remove("disable");
  playerChoice = "PAPER";

  playRound();
}

function scisChoice() {
  rock.classList.add("disable");
  paper.classList.add("disable");
  gameUI.style.background = "none";
  gameUI.style.width = '20%'
  gameUI1.style.justifyContent = "space-around";
  compChoice.classList.remove("disable");
  againBtn.classList.remove("disable");
  winner.classList.remove("disable");
  playerChoice = "SCISSORS";

  playRound();
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
    rpsItem.style.boxShadow = 'none';
    compChoice.style.boxShadow = 'none'
  }
  if (
    (playerChoice === "ROCK" && computerOption === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerOption === "PAPER") ||
    (playerChoice === "PAPER" && computerOption === "ROCK")
  ) {
    roundWinner = "you win";
    ++score
    scoreValue.textContent = score
    compChoice.style.boxShadow = 'none'
    rpsItem.style.boxShadow = '2px 4px 0px 25px #fff7002d';
  }
  if (
    (computerOption === "ROCK" && playerChoice === "SCISSORS") ||
    (computerOption === "SCISSORS" && playerChoice === "PAPER") ||
    (computerOption === "PAPER" && playerChoice === "ROCK")
  ) {
    roundWinner = "computer win";
    rpsItem.style.boxShadow = 'none';
    compChoice.style.boxShadow = '2px 4px 0px 25px #fff7002d';
  }

  winner.textContent = roundWinner;
  winner2.textContent = roundWinner;

}


// AGAIN btn
function again(){
  rock.classList.remove("disable");
  paper.classList.remove("disable");
  scis.classList.remove("disable");
  winner.classList.add("disable");
  againBtn.classList.add("disable");
  compChoice.classList.add("disable");
  gameUI.style.background = '';
  gameUI.style.width = ''
  gameUI1.style.justifyContent = "center";
  rpsItem.style.boxShadow = 'none'
  compChoice.style.boxShadow = 'none'

}
