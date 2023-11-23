// Creating variables

let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';
let moveList = ['Rock','Paper','Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

/**
 * Computes result of the game. Returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

function calcResult(move1, move2) {}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

// Displays start state of game

function startGame() {
    statusDisplay.textContent = 'Choose!';
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = moveList[i];
        buttons[i].style.display = "inline-block";
      }
      moveDisplays.forEach(moveDisplay => moveDisplay.style.display='none');
}

/**
 * Displays end state of game
 * @param {Event} event event containing information of user input.
 */

function endGame(event) {}

startGame();