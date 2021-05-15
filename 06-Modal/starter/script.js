'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//returns a node list (like an array)
console.log(btnsOpenModal);
//because node list is an array can use a for loop

function openModal() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click', openModal);

	console.log(btnsOpenModal[i].textContent);
}

function closeModal() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}
//We don't call the function in the event listener because it would immediately call the function as soon as JS executes that line  BUT we only want closeModal to be executed only when the click event happens
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		if (!modal.classList.contains('hidden')) {
			closeModal();
		}
	}
});
