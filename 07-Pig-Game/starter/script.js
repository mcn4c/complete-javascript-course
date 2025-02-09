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
let scores = [ 0, 0 ];

let activePlayer = 0;
let playing = true;
let currentScore = 0;

function switchPlayer() {
	if (playing) {
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
		currentScore = 0;
		document.getElementById(`current--${activePlayer}`).textContent = 0;
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
	}
}

diceEl.classList.add('hidden');

//rolling dice functionality

btnRoll.addEventListener('click', function() {
	// only if game still going on (playing = true)
	if ((playing = true)) {
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
	}
});

//Hold btn functionality
btnHold.addEventListener('click', function() {
	if (playing) {
		//1. add current score to active player's score
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] += currentScore;

		//2. check if player's score is >= 100, then finish the game
		if (scores[activePlayer] >= 10) {
			playing = false;
			diceEl.classList.add('hidden');

			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		}
		//switch which player is active
		activePlayer = activePlayer === 0 ? 1 : 0;

		//switch to next player
		switchPlayer();
	}
});

btnNew.addEventListener('click', function() {
	//reset scores
	scores = [ 0, 0 ];
	currentScore = 0;
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	//reset active player and set playing to true
	activePlayer = 0;
	playing = true;
	// hide dice
	diceEl.classList.add('hidden');

	//if remove winner class for either player
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
});
