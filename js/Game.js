/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game
 {
   constructor() //constructor used to initiate properties
   {
     this.missed = 0;
     this.phrases = [ 'yellow', 'blue', 'dragon', 'treehouse is the best', 'javascript rocks' ];
     this.activePhrase = null;
   }

   //hides the overlay and runs getRandomPhrase to get phrase
   startGame()
   {
     document.getElementById('overlay').style.display = 'none';
     this.activePhrase = this.getRandomPhrase();
     const phraseClass = new Phrase(this.activePhrase);
     phraseClass.addPhraseToDisplay();

   }

   //chooses a random number between 0 and 4 and use that to choose a random phrase
   getRandomPhrase()
   {
     let randomNumber = Math.floor( Math.random() * 5 );
     let chosenPhrase = this.phrases[randomNumber];
     return chosenPhrase;
   }

   //check if button clicked by player is within the phrase. If, it is run showMatchedLetter and checkForwin. If not, run removeLife function
   handleInteraction(pressedKey)
   {
     pressedKey.disabled = true;
     const phraseClass = new Phrase(this.activePhrase);
     const letterCheck = phraseClass.checkLetter(pressedKey);
     if(letterCheck === false) //if lettercheck is false, letter is not in phrase
     {
       pressedKey.className = "wrong";
       this.removeLife();
     }
     else //otherwise it is true and letter is in phrase
     {
       pressedKey.className = "chosen";
       phraseClass.showMatchedLetter(pressedKey);
       this.checkForWin();
     }

   }
   //removed a live by changing the image to a lost heart. also, check for how many hearts is remaining and if none left, then game over.
   removeLife()
   {
     const heart = document.querySelectorAll("[src='images/liveHeart.png']");
     this.missed += 1;
     heart[0].setAttribute("src", "images/lostHeart.png");
     if(this.missed === 5){
       const message = document.getElementById('game-over-message');
       message.textContent = "YOU LOSE! TRY AGAIN AND GOOD LUCK!"
       this.gameOver();
       this.refresh();
     }
   }

   //check if there is still any hidden letters within the phrase. If there isn't they win.
   checkForWin()
   {
     const numOfHide = document.querySelectorAll('.hide');
     if(numOfHide.length === 0)
     {
       const message = document.getElementById('game-over-message');
       message.textContent = "YOU WIN!"
       this.gameOver();
       this.refresh();
     }
   }
   //bring back overlay
   gameOver()
   {
     const overlay = document.getElementById('overlay');
     overlay.style.display = '';
     if(this.missed === 5) //if missed 5, you win. else you win
     {
       overlay.className = "lose";
     }
     else
     {
       overlay.className = "win";
     }

   }

   //reset everything by changing all heart images to liveheart, remove all li within #phrase and change all disabled onscreen keys to false an change its class name.
   refresh()
   {
     this.missed = 0;
     const brokenHeart = document.querySelectorAll("[src='images/lostHeart.png']");
     for(let i=0; i < brokenHeart.length; i++)
     {
       brokenHeart[i].setAttribute("src", "images/liveHeart.png");
     }
     const oldWord = document.querySelectorAll('#phrase ul li');
     for(let i = 0; i < oldWord.length; i++)
     {
       oldWord[i].parentNode.removeChild(oldWord[i]);
     }
     const disabledLetters = document.querySelectorAll('#qwerty button[disabled]');
      for(let i = 0; i < disabledLetters.length; i++)
      {
        disabledLetters[i].disabled = false;
        disabledLetters[i].className = "key";
      }
   }

 }
