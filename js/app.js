/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//create new instance game
let game = new Game;

//select the start button and addeventlistener to start game when clicked.
const getButton = document.querySelector('#btn__reset');
getButton.addEventListener('click', () => {
  game.startGame();
});

//add event listener for on screen keyboard
const getKeyboard = document.querySelectorAll('#qwerty button');
for( let i = 0; i < getKeyboard.length; i++)
  {
    getKeyboard[i].addEventListener('click', (e) =>{
    game.handleInteraction(e.target)
    });
  }
