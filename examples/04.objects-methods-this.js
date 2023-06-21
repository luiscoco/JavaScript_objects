'use strict';

// @if level === 'basic'
// # methods
{
	const user = {
		sayHi: function () {
			console.log('Hi!');
		},

		sayHiShort() {
			// functionally the same as above"
			console.log('Hi');
		},
	};

	user.sayHi();
	user.sayHiShort();
}
// @endif

// # `this` keyword
{
	// ~ `this` allows object's methods to 'communicate' and have access to objects properties
	{
		let student = {
			name: 'John',
			age: 30,

			sayHi() {
				console.log('Hi, my name is...' + this.name);
			},

			sayBye() {
				console.log('See you' + this.name);
			},
		};

		// -> 🕮 <ltc> 98b2ffe4-327c-46e5-947e-c1b51e61d3af.md

		student.sayHi();
	}

	// ~ `this` as a context
	{
		// ^ 'this' value equals to whatever stands before the dot (or before the square brackets)
		/* It's not bound to the place where function was declared, it gives it access to the context, in which it is called (executed) */

		// here we use the same function as a method in two objects that allows us to re-use this code
		// we can get different results from the same function,  because 'this' values will be different dependign on thw way the function will be called
		// this is a powerful way to write universal functions

		function sayHi(greeting) {
			console.log(`${greeting} ${this.name}, my age is ${this.age}`);
		}

		const mary = {
			name: 'Mary',
			age: 22,
		};

		const john = {
			name: 'John',
			age: 30,
			sayHi,
		};

		const admin = {
			name: 'Admin',
			age: 35,
			sayHi,
		};

		// ~ context loss problem
		// If we call the function simply as sayHi(), and not as object method, then we call it without context - 'this' will be undefined.
		// sayHi('Hi'); // Error! - `this` value was not passed to sayHi function

		// = using 'call' or 'apply' to explicitly pass 'this' value
		sayHi.call(mary, 'Hi');
		sayHi.apply(mary, ['Hi']);

		// = .bind allows to create a function with optionally fixed context (and arguments) that can be then re-used in this form
		const boundSayHi = sayHi.bind(mary, 'Hello');
		boundSayHi();

		// internally 'bind' function works like this (returns a 'wrapper' function):
		function bind(fn, thisValue, arg1, arg2) {
			return function () {
				fn.call(thisValue, arg1, arg2);
			};
		}
	}

	// @if level === 'basic'
	// # compare using closure and context
	// ~ closure factory example
	{
		function closureFactory(name, surname) {
			return {
				name,
				surname,
				sayHi() {
					return `${name}, ${surname}`;
					// name and surname are taken from closure!
				},
			};
		}

		const user = closureFactory('John', 'Doe');

		console.log(user.sayHi());

		user.name = 'Mary';
		// changing user name won't change the output, cause name and surname are taken from closure!
		console.log(user.sayHi());

		function thisFactory(name, surname) {
			return {
				name,
				surname,
				sayHi() {
					return `${this.name}, ${this.surname}`;
				},
			};
		}

		const user2 = thisFactory('John', 'Doe');
		console.log(user2.sayHi());
		user2.name = 'Mary';
		// changing user name changes the output, cause name and surname are taken from context
		console.log(user2.sayHi());
	}
}

// @endif
// reg bind 🕮 <ltc> c8e1b476-2aa5-4cd8-b1f3-50d91f3bf992.md
