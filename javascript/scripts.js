const images = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];

function generateDiceOneImg(num) {
    document.querySelector('.img1').setAttribute("src", images[num]);
    document.querySelector('#leftCup').classList.add('shake');
}
function generateDiceTwoImg(num) {
    document.querySelector('.img2').setAttribute("src", images[num]);
    document.querySelector('#rightCup').classList.add('shake');
}
function listenForClick() {
  const randomNumber1 = Math.floor(Math.random()* images.length);
  const randomNumber2 = Math.floor(Math.random()* images.length);
  const playerButton1 = document.querySelector('.player1Btn');
  const playerButton2 = document.querySelector('.player2Btn');
  const valueArr = [];

  playerButton1.addEventListener("click", (event) => {
    hideButtons(event);
    generateDiceOneImg(randomNumber1);
    valueArr.push(event.target);
    checkLength(valueArr,randomNumber2,randomNumber1);
    event.preventDefault();
  });
  playerButton2.addEventListener("click", (event) => {
    hideButtons(event);
    generateDiceTwoImg(randomNumber2);
    valueArr.push(event.target);
    checkLength(valueArr,randomNumber2,randomNumber1);
    event.preventDefault();
  });
  document.querySelector('#playAgain').classList.add('playAgain');
}

function hideButtons(event) {
  event.target.style.visibility = 'hidden';
}

function checkLength(arr, randomNumber2, randomNumber1) {
  if(arr.length === 2) {
    checkWinner(randomNumber2,randomNumber1);
    playAgain();
  }
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

