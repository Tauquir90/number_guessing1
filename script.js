'use strict';
/*

let z = document.querySelector('.message');
z.textContent = '😍😍😍Correct Number!!';

document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
    // when guess is equal to secret no
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Numnber!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.higher').textContent = highScore;
    }
  }
  // when guess is greater than secret number
  // when guess is not equal to secret no
  else if (guess !== secretNumber) {
    if (score > 6) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🤦‍♀️Too High!!' : '🤦‍♂️Too Low!!';
      score = score - 5;
      document.querySelector('.myscore').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 U lost the game!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.myscore').textContent = 0;
    }
  }
});

/*
  
  
  else if (guess > secretNumber) {
    if (score > 6) {
      document.querySelector('.message').textContent = '🤦‍♀️Too High!!';
      score = score - 5;
      document.querySelector('.myscore').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 U lost the game!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.myscore').textContent = 0;
    }
    // when guess is less than secret number
  } else {
    if (score > 6) {
      document.querySelector('.message').textContent = '🤦‍♂️Too Low!!';
      score = score - 5;
      document.querySelector('.myscore').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 U lost the game!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.myscore').textContent = 0;
    }
  }
});
*/

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = ' Start Guessing.......!!';
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.myscore').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
