'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

let playerName = '';

window.addEventListener('load', function () {
  playerName = prompt('Enter your name here');
  console.log(playerName);
});

//Check button Handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').style.visibility = 'hidden';
      document.querySelector('.check').disabled = true;
    }

    //when number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').style.visibility = 'hidden';
      document.querySelector('.check').disabled = true;
    }
  }
});

//again button handler
document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  //reset secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //reset message
  document.querySelector('.message').textContent = 'Start guessing...';

  //reset number
  document.querySelector('.number').textContent = '?';

  //reset input fields
  document.querySelector('.guess').value = '';

  //reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //reset check button
  document.querySelector('.check').style.visibility = 'visible';
  document.querySelector('.check').disabled = false;
});
