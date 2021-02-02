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

let secretNumber = 0;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

const generateSecretNumber = () =>
  (secretNumber = Math.trunc(Math.random() * 20) + 1);

generateSecretNumber();

let score = 20;

let highScore = 0;

let playerName = '';

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBodyBackgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const setCheckButtonVisibility = (visibility, isDisable) => {
  document.querySelector('.check').style.visibility = visibility;
  document.querySelector('.check').disabled = isDisable;
};

window.addEventListener('load', function () {
  playerName = prompt('Enter your name here');
  console.log(playerName);
});

//Check button Handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.getElementById('click').play();
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMsg('⛔ No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    document.getElementById('myAudio').play();
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMsg('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('body').style.backgroundColor = '#60b347';
    setBodyBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is not equal to secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMsg(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      setScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMsg('💥 You lost the game!');
      // document.querySelector('.score').textContent = 0;
      setScore(0);
      // document.querySelector('body').style.backgroundColor = 'red';
      setBodyBackgroundColor('red');
      // document.querySelector('.check').style.visibility = 'hidden';
      // document.querySelector('.check').disabled = true;
      setCheckButtonVisibility('hidden', true);
    }
  }
  //When number is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.check').style.visibility = 'hidden';
  //     document.querySelector('.check').disabled = true;
  //   }

  //   //when number is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.check').style.visibility = 'hidden';
  //     document.querySelector('.check').disabled = true;
  //   }
  // }
});

//again button handler
document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  // document.querySelector('.score').textContent = score;
  setScore(score);

  //reset secret Number
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  generateSecretNumber();

  //reset message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMsg('Start guessing...');

  //reset number
  document.querySelector('.number').textContent = '?';

  //reset input fields
  document.querySelector('.guess').value = '';

  //reset styles
  // document.querySelector('body').style.backgroundColor = '#222';
  setBodyBackgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';

  //reset check button
  // document.querySelector('.check').style.visibility = 'visible';
  // document.querySelector('.check').disabled = false;
  setCheckButtonVisibility('visible', false);
});
