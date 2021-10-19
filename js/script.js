//Rock Paper Scissors
const imgPlayerOne = document.querySelector('.img-1');
const imgPlayerTwo = document.querySelector('.img-2');
const choicePlayerOne = document.querySelector('.choice-player-1');
const choicePlayerTwo = document.querySelector('.choice-player-2');
const readyPara = document.querySelector('.ready');
const randomPara = document.querySelector('.random');
const buttonDiv = document.querySelector('.buttons');
const btnRock = document.querySelector('.rock-btn');
const btnPaper = document.querySelector('.paper-btn');
const btnScissors = document.querySelector('.scissors-btn');
const btnAgain = document.querySelector('.again');
const roundsPara = document.querySelector('.rounds');
const scoresPara = document.querySelector('.scores');
const resultPara = document.querySelector('.result');
let choiceOfPlayer = '';
let randomChoice = '';
let roundsCounter = 5;
let winsOfPlayer = 0;
let winsofComputer = 0;

//The computer gets a random choice of the selection array 
//and the picture/text of the computer changes accordingly.
//The function counts the rounds backwards (how many times the player clicked on one of the buttons)
//and gives the result when there is no more rounds.

function randomElement(arr){
  let output = arr[Math.floor(Math.random() * arr.length)];
  return output;
}
const getRandomChoice = () => {
  const selection = ['rock', 'paper', 'scissors'];
  randomChoice = randomElement(selection);
  if(randomChoice === 'paper'){
    imgPlayerTwo.src = "images/paper.jpg";
    imgPlayerTwo.alt = "Paper";
    choicePlayerTwo.innerText = 'Paper';
  }else if(randomChoice === 'rock') {
    imgPlayerTwo.src = "images/rock.jpg";
    imgPlayerTwo.alt = "Rock";
    choicePlayerTwo.innerText = 'Rock';
  }else if(randomChoice === 'scissors') {
    imgPlayerTwo.src = "images/scissors.jpg";
    imgPlayerTwo.alt = "Scissors";
    choicePlayerTwo.innerText = 'Scissors';
  }
  roundsCounter--;
  roundsPara.innerText = `${roundsCounter} rounds left`;
  if(roundsCounter === 0){
    roundsPara.innerText = 'No more rounds.';
    buttonDiv.style.display = 'none';
    btnAgain.style.display = 'block';
    readyPara.style.display = 'none';
    randomPara.style.display = 'none';
  }
  return randomChoice;
}

//We get the players choice by clicking one of the buttons,
//then the random choice of the computer from getRandomChoice(),
//and the players picture and the text change accordingly to the choices.

//Button Rock
const getRock = () => {
  choiceOfPlayer = 'rock'
  imgPlayerOne.src = "images/rock.jpg";
  imgPlayerOne.alt = "Rock";
  choicePlayerOne.innerText = `Rock`;
  getRandomChoice();
  if(randomChoice === 'paper') {
    winsofComputer++;
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'Paper wins against rock.'
  }else if (randomChoice === 'scissors') {
    winsOfPlayer++;
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'Rock wins against scissors.'
  }else if (randomChoice === 'rock') {
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'New round.'
    roundsCounter++;
  }
}
btnRock.addEventListener('click', getRock);

//Button Paper
const getPaper = () => {
  choiceOfPlayer = 'paper'
  imgPlayerOne.src = "images/paper.jpg";
  imgPlayerOne.alt = "Paper";
  choicePlayerOne.innerText = `Paper`;
  getRandomChoice();
  if(randomChoice === 'paper') {
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'New round.'
    roundsCounter++;
  }else if (randomChoice === 'scissors') {
    winsofComputer++;
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'Scissors wins against paper'
  }else if (randomChoice === 'rock') {
    winsOfPlayer++;
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'Paper wins against rock.'
  }
}
btnPaper.addEventListener('click', getPaper);

//Button Scissors
const getScissors = () => {
  choiceOfPlayer = 'scissors'
  imgPlayerOne.src = "images/scissors.jpg";
  imgPlayerOne.alt = "Scissors";
  choicePlayerOne.innerText = "Scissors";
  getRandomChoice();
  if(randomChoice === 'paper') {
    winsOfPlayer++;
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'Scissors wins against paper'
  }else if (randomChoice === 'scissors') {
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'New round.'
    roundsCounter++;
  }else if (randomChoice === 'rock') {
    winsofComputer++;
    scoresPara.innerText = `${winsOfPlayer} - ${winsofComputer}`;
    resultPara.innerText = 'Rock wins against scissors.'
  }
}
btnScissors.addEventListener('click', getScissors);

// By clcking the 'play again' button loads the page again.
btnAgain.addEventListener('click', () => location.reload());



