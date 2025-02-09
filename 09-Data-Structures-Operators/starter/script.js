'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
	starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
	mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
	order: function(starterIndex, mainIndex) {
		return [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ];
	},
	orderDelivery: function(obj) {
		console.log(obj);
	},
	//or can pass in object names as arguments
	// can also pass in default values like for the indexes below
	orderDelivery2: function({ starterIndex = 0, mainIndex = 0, time, address }) {
		console.log(
			`${this.starterMenu[starterIndex]} and ${this.mainMenu[
				mainIndex
			]} will be delivered to ${address} at ${time}`
		);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22
		},
		fri: {
			open: 11,
			close: 23
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24
		}
	}
};

//pass in an object of objects to a function
restaurant.orderDelivery2({ time: '22:30', address: 'via del Sole, 21', mainIndex: 2, starterIndex: 2 });

// destructuring an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // returns Classic Italiano, opening hours object, categories array

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags); //returns same as above

//give default values in case doesn't exist..?
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //returns empty array and starter menu array

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//change values of a and b to 23 and 7 respectively
({ a, b } = obj);
console.log(a, b); // 23 7

//nested objects
const { fri } = openingHours;
console.log(fri); // returns object with open and close times

const { fri: { open, close } } = openingHours;
console.log(`${restaurant.name} opens at ${open} and closes at ${close} on Fridays`);

// can take it further by renaming open and close like so:

const { thu: { open: o, close: c } } = openingHours;
console.log(o, c);

//********************************************** */

//destructuring an array

// const arr = [ 2, 3, 4 ];

// const a = arr[0];
// const b = arr[2];
// const c = arr[1];

// const [ x, y, z ] = arr;
// console.log(x, y, z); //returns 2 3 4
// console.log(arr); // returns [2, 3, 4]
// console.log(a + b + c); // returns 9

// let [ first, second, third ] = restaurant.categories;

// console.log(first, second, third); // returns Italian Pizzeria Vegetarian

// // switch order of variables with destructuring
// [ first, second, third ] = [ third, first, second ];
// //returns Vegetarian, Italian Pizzeria

// console.log(restaurant.order(2, 0));
// //receive two return values from a function
// const [ starter, mainCourse ] = restaurant.order(0, 2);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [ 2, 4, [ 5, 6 ] ];
// const [ i, j, k ] = nested;
// console.log(i, j, k[0], k[1]);

// //default values

// const [ p, q, r ] = [ 1, 2 ];
// console.log(p, q, r); //returns 1 2 undefined
// //BUT ..... can set default values
// const [ t = 1, w = 1, z = 1 ] = [ 1, 2 ];
// console.log(t, w, z); // returns 1 2 1
