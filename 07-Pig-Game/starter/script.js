'use strict';

// use EL because we need to remember it's an element not the actual score

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//scores is an array because two players
const scores = [ 0, 0 ];

function switchPlayer() {
	document.getElementById(`score--${activePlayer}`).textContent = 0;
	currentScore = 0;
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
}

let currentScore = 0;

//will help us know which player is active
let activePlayer = 0;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling dice functionality

btnRoll.addEventListener('click', function() {
	//generate random dice roll
	const dice = Math.trunc(Math.random() * 6 + 1);

	//display dice
	diceEl.classList.remove('hidden');
	diceEl.src = `dice-${dice}.png`;

	//check for rolled one, and if true switch player
	if (dice !== 1) {
		currentScore += dice;
		document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	} else {
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		//switch to next player
		currentScore = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
		//toggle method could have been used in previous activity but instead used contains method
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
	}
});

btnHold.addEventListener('click', function() {
	//1. add current score to active player's score
	//because created scores array, following works:
	scores[activePlayer] += currentScore;
	//2. check if player's score is >= 100, then finish the game
	if (scores[activePlayer >= 100]) {
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
	}

	//switch to next player
	switchPlayer();
});
