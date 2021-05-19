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

const jonas = {
	year: 1991,
	name: 'Jonas',
	calcAge: function() {
		return 2021 - this.year;
	}
};

const mary = {
	year: 1982,
	name: 'Mary'
};

//can add method to mary object
mary.calcAge = jonas.calcAge;
console.log(jonas.calcAge());
console.log(mary.calcAge());
