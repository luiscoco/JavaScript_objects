'use strict';

const calculatedKeyNameVariable = 'calculatedKey';

const method = function () {
	return null;
};

const obj = {
	stringValue: 'Carl',
	numberValue: 16,
	booleanValue: true,
	undefinedValue: undefined,
	nullValue: null,
	//  prettier-ignore
	'1': 33,
	1: 33,
	'key with whitespace': true,
	$keyStartingWith$: true,
	_keyStartingWith_: true,
	[calculatedKeyNameVariable]: true,

	nestedObject: {
		key1: 182,
		key2: 50,
		key3: {},
	},

	arr: [],

	[Symbol('some key')]: true,

	propertyWithFunction: function () {
		return 'function was called';
	},

	methodName() {
		return 'method was called';
	},

	dynamicMethod: method,
};

// ~ check for property existence in object
{
	// cannot distinguish between existing property with value 'undefined' and non-existing property just by cheking a value:
	console.log(obj.undefinedValue);
	console.log(obj.doesNotExist);

	// the correct way:
	console.log('undefinedValue' in obj);
	console.log('doesNotExist' in obj);
}

// ~ calculated keys
console.log(obj[calculatedKeyNameVariable]);
console.log(obj.calculatedKey);

// ~ methods
console.log(obj.propertyWithFunction());
console.log(obj.methodName());

// ~ nested properties
console.log(obj.nestedObject.key1);

// # deleting properties
{
	const obj = {
		propertyToRemove: 0,
		undefinedProp: undefined,
	};

	console.log(obj);

	delete obj.propertyToRemove;

	console.log(obj);
}

// # accessing properties of potentially undefined things
{
	let obj = {
		property: 'access me!',
	};
	// no problem:
	console.log(obj.property);

	obj = undefined;
	// console.log(obj.property); // Error trying to access property of undefined, JS stops execution

	// = safe way with 'Elvis' operator
	console.log(obj?.property);

	// = old way:
	console.log(obj && obj.property);
}
