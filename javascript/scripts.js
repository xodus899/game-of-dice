let images = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
let randomNumber1 = Math.floor(Math.random()* images.length);
let randomNumber2 = Math.floor(Math.random()* images.length);
let button1 = document.getElementById('player1Btn');
let button2 = document.getElementById('player2Btn');
let button1False = false;
let button2False = false;

function diceOneImg() {
    let randomImage1 = document.querySelector('.img1').setAttribute("src", images[randomNumber1]);
    document.getElementById('leftCup').classList.add('shake');
}

function diceTwoImg() {
    let randomImage2 = document.querySelector('.img2').setAttribute("src", images[randomNumber2]);
    document.getElementById('leftCup').classList.add('shake');
}

function setImage() {
  return listenForClick();
}

function listenForClick() {
  button1.addEventListener("click", () => {
    diceOneImg();
  })
  button2.addEventListener("click", () => {
    diceTwoImg();
  });
  removeButtons();
}

function removeButtons() {
  button1False = false;
  secondButtonClicked = false;

  button1.addEventListener('click',()=>{
    button1.style.visibility = 'hidden';
    button1False = true
    if(button1False && button2False) playAgain()
  })
  button2.addEventListener('click',()=>{
    button2.style.visibility = 'hidden';
    button2False = true
    if(button1False && button2False) playAgain()
  })
  document.getElementById('playAgain').classList.add('playAgain');
}

function playAgain() {
  document.getElementById('playAgain').classList.add('playAgainShow');
  checkWinner();
  document.getElementById('playAgain').onclick = () => {
    location.reload();
    return false;
  }
}

function checkWinner() {
  if(randomNumber2 === randomNumber1) {
    document.querySelector('h1').innerHTML ="Draw";
  } else if (randomNumber2 < randomNumber1) {
    document.querySelector('h1').innerHTML ="Player 1 wins"
  } else {
    document.querySelector('h1').innerHTML = "Player 2 wins";
  }
}

setImage();
