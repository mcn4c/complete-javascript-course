'use strict';

// function calcAge(birthYear) {
// 	const age = 2037 - birthYear;

// 	function printAge() {
// 		const output = `You are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			let string = `You are a millenial, ${firstName}`;
// 			console.log(string);
// 		} else {
// 			let string = `You are not a millenial, ${firstName}`;
// 			console.log(string);
// 		}
// 	}
// 	printAge();
// 	return age;
// }

// const firstName = 'Mary';
// calcAge(1982);
// calcAge(1997);
//********************************************** */

// var me = 'Mary';
// let job = 'teacher';
// const year = 2021;
// const birthYear = 1982;

// const jonas = {
// 	year: 1991,
// 	name: 'Jonas',
// 	calcAge: function() {
// 		return 2021 - this.year;
// 	}
// };

// const mary = {
// 	year: 1982,
// 	name: 'Mary'
// };

// //can add method to mary object
// mary.calcAge = jonas.calcAge;
// console.log(jonas.calcAge());
// console.log(mary.calcAge());

//******************************************** */

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//reference types
const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27
};
//below code only adds another variable name to same object in the heap
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);

//Copying objects
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: [ 'Alice', 'Bob' ]
};
//Object.assign method creates new object that is an actual copy rather than giving two names to same object
//only a shallow copy, only first level
const jessicaCopy = Object.assign({}, jessica2);

//does not change original jessica
jessicaCopy.lastName = 'Davis';
//will change the original jessica object because we have not done a deep clone
jessicaCopy.family.push = 'Mary';
jessicaCopy.family.push = 'John';

console.log(jessica2, jessicaCopy);
