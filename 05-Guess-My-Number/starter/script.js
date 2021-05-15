'use strict';

console.log(document.querySelector('h1').textContent);

document.querySelector('.message').textContent = 'Correct Number 🥳 ';

document.querySelector('.score').textContent;

document.querySelector('.guess').value;

// Event Listener

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

function displayMessage(message) {
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	//when there is no input
	if (!guess) {
		displayMessage('No number 🚫! ');
	} else if (guess === secretNumber) {
		// When user wins
		displayMessage('Correct Number 🥳 ');

		document.querySelector('body').style.backgroundColor = 'green';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.number').style.width = '30rem';
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	} else if (guess != secretNumber && score > 1) {
		//When guess is wrong

		score--;
		document.querySelector('.score').textContent = score;
		guess > secretNumber ? displayMessage('Too high!') : displayMessage('Too low!');
	} else {
		alert('Game Over 😩');
	}
});

document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	document.querySelector('.score').textContent = 20;

	secretNumber = Math.trunc(Math.random() * 20 + 1);
	document.querySelector('.number').textContent = '?';
	displayMessage('Start guessing ...');
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('body').style.backgroundColor = 'black';
	document.querySelector('.guess').value = '';
});
