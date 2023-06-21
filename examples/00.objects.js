'use strict';
// # declaring the object
{
	// = Literal notation
	const user = {
		name: 'Carl',
		age: 16,
		// key: value
	};

	// @if level !== 'basic'
	// = Object conctructor
	// rarely used
	const obj = new Object();
	const obj2 = Object();
	// 🕮 <ltc> 68fc50ae-7f1c-4f5d-bd89-186b88a810fd.md

	// = Object.create;
	// useful to create a 'bare' object without a prototype
	const obj3 = Object.create(null);
	// @endif
}

// # properties
/*
property = key/value pair (property key: property value)
properties are divided by commas
trailing comma is allowed, having it it's easier to changes properties order
*/

// ~ accessing properties
{
	// this ways can also be used to add properties to existing object or override them

	const user = {
		name: 'Carl',
	};

	// = dot notation
	console.log(user.name);
	user.sex = 'male';
	console.log(user.sex);

	// = square brackets notation
	console.log(user['name']);
	user['name'] = 'Donald';
	console.log(user.name);

	console.log(user);

	{
		// Why we need square brackets syntax?
		// It allows to create and access properties with names, that contain whitespaces
		const student = {
			name: 'Сarl',
			age: 16,
			'has hobby': true,
		};

		console.log(student['has hobby']);
		// console.log(user.has hobby) // ERROR!

		// also allows dynamic access (using variable in place of property name)
		const propertyName = 'age';
		// let propertyName = 'name';

		console.log(student[propertyName]);
		// console.log(student.propertyName);

		// Computed property
		const fruit = 'apple';
		const price = 10;

		const menu = {
			[fruit]: price, // property name will be taken from 'fruit' variable
		};

		console.log(menu.apple);
	}
}

// # key / value shorthand
{
	const teacher = 'Yaroslav';
	const coordinator = 'Alexandra';

	// In real code, we often use existing variables as values for property names.

	const group = {
		coordinator: coordinator,
		teacher,
	};

	// ->🕮 <ltc> 5c02d465-7a1d-421b-ac0f-47e4d5e09919.md

	console.log(group.coordinator);
	console.log(group.teacher);
}

function fn() {
	console.log('foo');
}

fn.prop = 'bar';
