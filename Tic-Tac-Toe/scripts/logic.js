
window.addEventListener("load", bindEvents);

function bindEvents() {
  var buttons = document.getElementsByClassName("game-btn");
  for (let i = 0; i < buttons.length; i++) {
    var currentButton = buttons[i];
    currentButton.addEventListener("click", printXorZero);
  }
  document.getElementById("reset").addEventListener("click", reset);
}

var flag = true;
var stepCount = 0;

function printXorZero() {
  if (this.innerText.trim().length == 0) {
    var buttonValue = flag ? "X" : "0";
    this.innerText = buttonValue;
    flag = !flag;
    ++stepCount;
    console.log(`Step Count: ${stepCount}, Button Value: ${buttonValue}`);

    if (isGameOver()) { 
      setTimeout(() => {
        alert("Game Over! " + buttonValue + " wins!");
        reset();
      }, 1000); 
    } else if (stepCount >= 9) { 
      setTimeout(() => {
        alert("It's a draw!");
        reset(); 
      }, 1000); 
    }
  }
}

function isGameOver() {
  var buttons = document.getElementsByClassName("game-btn");
  var gameOver = false;

  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      buttons[i * 3].innerText === buttons[i * 3 + 1].innerText &&
      buttons[i * 3 + 1].innerText === buttons[i * 3 + 2].innerText &&
      buttons[i * 3].innerText !== ""
    ) {
      gameOver = true;
      break;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      buttons[i].innerText === buttons[i + 3].innerText &&
      buttons[i + 3].innerText === buttons[i + 6].innerText &&
      buttons[i].innerText !== ""
    ) {
      gameOver = true;
      break;
    }
  }


  // Check diagonals
  if (
    buttons[0].innerText === buttons[4].innerText &&
    buttons[4].innerText === buttons[8].innerText &&
    buttons[0].innerText !== ""
  ) {
    gameOver = true;
  }
  if (
    buttons[2].innerText === buttons[4].innerText &&
    buttons[4].innerText === buttons[6].innerText &&
    buttons[2].innerText !== ""
  ) {
    gameOver = true;
  }

  return gameOver;
}

function reset() {
  var buttons = document.getElementsByClassName("game-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = "";
  }
  flag = true;
  stepCount = 0;
}
