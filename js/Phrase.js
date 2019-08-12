/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase
 {
   //accepts a parameter phrase and set this.phrase equal to the parameter and making it all lower case
   constructor(phrase)
   {
     this.phrase = phrase.toLowerCase();
   }

   //add the placeholder on the page when start is pressed and add css to the placeholders.
   addPhraseToDisplay()
   {

     const letter = this.phrase.split("");
     const createLi = document.createElement("li");
     const section = document.querySelector('#phrase ul');
      for( var i = 0; i < letter.length; i++ )
      {
        const createLi = document.createElement("li");
        createLi.textcontent = letter[i];
        if(letter[i] === " ")
        {
          createLi.className = "space";
        }
        else
        {
            createLi.className = "hide letter " + letter[i];
        }
        section.append(createLi);
      }
   }

   //check if the letter picked is in the phrase. If it is filter it out and create newArray and return it
   checkLetter(pressedLetter)
   {
     let clickedLetter = pressedLetter.textContent;
     const letterArray = this.phrase.split("");
     const wordLength = letterArray.length;
     const newArray = letterArray.filter( letter => letter !== clickedLetter );
     return newArray;
   }

   //show matched letters and change class from hide to show for matched letters
   showMatchedLetter(letter)
   {
     const textContent = letter.textContent;
     const matchedLetter = document.getElementsByClassName(textContent);
     for(let i=0; i < matchedLetter.length; i++)
     {
       matchedLetter[i].className = "show letter " + textContent;
       matchedLetter[i].textContent = textContent;
     }
   }

 }
