'use strict';

function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		const output = `You are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			let string = `You are a millenial, ${firstName}`;
			console.log(string);
		} else {
			let string = `You are not a millenial, ${firstName}`;
			console.log(string);
		}
	}
	printAge();
	return age;
}

const firstName = 'Mary';
calcAge(1982);
calcAge(1997);
