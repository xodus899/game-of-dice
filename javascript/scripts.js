const images = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];

function diceOneImg(num) {
    document.querySelector('.img1').setAttribute("src", images[num]);
    document.querySelector('#leftCup').classList.add('shake');
}
function diceTwoImg(num) {
    document.querySelector('.img2').setAttribute("src", images[num]);
    document.querySelector('#rightCup').classList.add('shake');
}
function listenForClick() {
  let button1False = false;
  let button2False = false;
  const randomNumber1 = Math.floor(Math.random()* images.length);
  const randomNumber2 = Math.floor(Math.random()* images.length);
  const playerButton1 = document.querySelector('.player1Btn');
  const playerButton2 = document.querySelector('.player2Btn');
  playerButton1.addEventListener("click", (event) => {
    event.preventDefault();
    diceOneImg(randomNumber1);
    button1False = true;
    if(button1False && button2False) {
      checkWinner(randomNumber2,randomNumber1);
    }
  });
  playerButton2.addEventListener("click", (event) => {
    event.preventDefault();
    diceTwoImg(randomNumber2);
    button2False = true;
    if(button1False && button2False) {
      checkWinner(randomNumber2,randomNumber1);
    }
  });
  removeButtons(playerButton1,playerButton2);
}

function removeButtons(button1,button2) {
  let button1False = false;
  let button2False = false;

  button1.addEventListener('click', () => {
    button1.style.visibility = 'hidden';
    button1False = true;
    if(button1False && button2False) {
      playAgain();
    }
  });
  button2.addEventListener('click', () => {
    button2.style.visibility = 'hidden';
    button2False = true;
    if(button1False && button2False){
      playAgain();
    }
  });
  document.querySelector('#playAgain').classList.add('playAgain');
}

function updateDiv() {
  document.body.innerHTML = " ";
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="container">
      <h1 class="refresh-btn">Roll The Dice</h1>
      <div class="dice">
        <p>Player 1</p>
          <img id='leftCup'class="img1" src="images/cupRight.png">
          <button class='player1Btn'> Roll Player 1 </button>
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img id='rightCup'class="img2" src="images/cupLeft.png">
        <button class='player2Btn'> Roll Player 2 </button>
      </div>
    <button id='playAgain'> Play Again? </button>
    </div>`);
  listenForClick();
}

function checkWinner(randomNumber2,randomNumber1) {
  if(randomNumber2 === randomNumber1) {
    document.querySelector('h1').innerHTML ="Draw";
  } else if (randomNumber2 < randomNumber1) {
    document.querySelector('h1').innerHTML ="Player 1 wins";
  } else {
    document.querySelector('h1').innerHTML = "Player 2 wins";
  }
}
function playAgain() {
  document.querySelector('#playAgain').classList.add('playAgainShow');
  document.querySelector('#playAgain').onclick = () => {
    document.querySelector('#leftCup').classList.remove('shake');
    document.querySelector('#rightCup').classList.remove('shake');
    updateDiv();
  };
}
listenForClick();

