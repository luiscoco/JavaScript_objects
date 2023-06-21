'use strict';
// # Object references and copying

// ~ primitives are copied by value
{
	// Primitive values are copied by value (i.е., literally a copy is created, that occupies twice memory)
	const message = 'Hello!';
	let phrase = message; // copy 'message' value into 'phrase' value

	console.log(phrase); // same as message

	phrase = 'Goodbye!'; // change phrase

	console.log(message); // message haven't changed, because copies are fully independent
	console.log(phrase);
}

// ~ objects are copied by reference
{
	/* objects can be large, complicated and occupy lots of memory.
	when we assign the object to another variable, object is not duplicated,
	but the variable receives only a link (reference) to this object, that gives us access to it.
	so it's like an alias for the same person
	After this, there is only still only one object, but both variables have access to it. */

	let Everest = {
		type: 'mountain',
		height: 8_848.86,
		location: 'Himalayas',
		ascended: false,
		nested: {
			prop: 2,
		},
	};

	let Chomolungma = Everest;

	// Both links point to the same object
	console.log(Everest.height);
	console.log(Chomolungma.height);
	console.log(Chomolungma === Everest);

	// if we change this object, this is reflected for all 'aliases', no matter which one we use
	console.log(Everest.ascended);

	Chomolungma.ascended = true;
	console.log(Everest.ascended);
}

// @if false
// # cloning the objects
{
	// @if level !== 'basic'
	let Everest = {
		type: 'mountain',
		height: 8_848.86,
		location: 'Himalayas',
		ascended: false,
		nested: {
			prop: 2,
		},
	};

	// ~ shallow cloning

	// = object.assign
	// triggers setters (unlike spread clone)
	// 🕮 <ltc> deb133dd-4997-43f7-a052-f5d335e311f2.md
	const copy = Object.assign(
		{},
		{
			location: 'Europe',
			prop: 12,
		},
		Everest
	);

	console.log(copy.location);
	console.log(copy.type);
	console.log(Everest.type);

	// creates a shallow copy
	console.log(copy.nested.prop);
	console.log(Everest.nested.prop);
	copy.nested.prop = 3;
	console.log(Everest.nested.prop);

	// = using ...
	const spreadClone = { ...Everest };
	// creates shallow clone
	// 🕮 <ltc> 2d1fc09d-0ef3-4344-acc4-470c1930e196.md

	// ~ deep cloning
	// = structured clone
	const deepCopy = structuredClone(Everest);
	deepCopy.nested.prop = 4;
	console.log(Everest.nested.prop);
	// @endif

	// @if level !== 'basic'
	// = cloning with flags
	let cloneWithDescriptors = Object.defineProperties(
		{},
		Object.getOwnPropertyDescriptors(Everest)
	);

	// = shallow clone with prototype
	const clone = Object.create(
		Object.getPrototypeOf(Everest),
		Object.getOwnPropertyDescriptors(Everest)
	);
	// @endif
}
// @endif

// # objects comparison
{
	// Objects are equal, if it is the same object. I.e. only if two variables contain the links to the SAME object, comparison will return true

	let a = {};
	let b = {};

	// we have created 2 separate objects. So a !== b
	console.log(a === b); // false

	a = b;
	console.log(a === b);
}

// # objects modification
{
	// Object can be changed, even if is assigned to const variable.
	// const forbids reassignment, but we can change already assigned object's property (object still remains the same)

	const obj = {
		a: 1,
		b: 2,
	};

	obj.a = 3;
	// changed the object
	console.log(obj);

	// but we cannot re-assign another object to this constant
	obj = {
		c: 1,
		d: 2,
	}; // ERROR
}
