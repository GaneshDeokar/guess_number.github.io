'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🥳';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.score').textContent = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#D84926';
    document.querySelector('number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When user insert wrong input:-
    if (!guess) {
        displayMessage('🔴 No Number!');

        //When guess is right!
    } else if (guess < 1 || guess > 20) {
        displayMessage('⛔ Number should be in between 1 to 20');
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct Number🥳');
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#00FF00';
        document.querySelector('.number').style.width = '30rem';
        const reload1 = () => {
            document.querySelector('body').style.backgroundColor = '#D84926';
            document.querySelector('.score').textContent = '20';
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            displayMessage('Start guessing...');
            document.querySelector('.guess').value = '';
            document.querySelector('.number').textContent = '?';

        }
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        setTimeout(function() { reload1(); }, 3000);
    }

    if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Greater than my number!' : 'Lower than my number!');
            score--;
            document.querySelector('.score').textContent = score;

            // when player loose the game!
        } else {
            displayMessage('You loss the game! 😢');
            document.querySelector('.score').textContent = 0;
        }
    }

});