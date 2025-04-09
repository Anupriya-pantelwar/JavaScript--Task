'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ':) Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//creating function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //  document.querySelector('.message').textContent = ' :( No number!';
    displayMessage(' :( No number! ');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ' :) Correct Number!';
    displayMessage(' :) Correct Number! ');
    document.querySelector('.number').textContent = secretNumber;

    //using CSS
    document.querySelector('body').style.backgroundColor = ' #60b347';

    document.querySelector('.number').style.width = '30rem';

    //setting Highscore value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? ' :( Too high! ' : ' :( Too Low! ';
      displayMessage(guess > secretNumber ? ' :( Too high! ' : ' :( Too Low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent =

      displayMessage(' * YOU LOST THE GAME...');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ':( Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' * YOU LOST THE GAME...';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' :( Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        ' * YOU LOST THE GAME...';
      document.querySelector('.score').textContent = 0;
    }*/
});

/*
Implement a game reset functinality, so that the player can make a new guess!
here is how:

1. select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial condition of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //using CSS
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
