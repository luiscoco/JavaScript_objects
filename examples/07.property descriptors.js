'use strict';
// # property descriptors
{
	const user = {
		name: 'Fred',
	};

	const nameDescriptor = Object.getOwnPropertyDescriptor(user, 'name');

	// descriptor contains property value and 3 flags

	// by default all flags are set to true
	console.log(nameDescriptor);

	// Object.defineProperty method allows to change any flag as well as value
	Object.defineProperty(user, 'name', {
		value: 'Joe',
	});

		console.log(user);

	Object.defineProperty(user, 'name', {
		writable: false,
	});
	console.log(Object.getOwnPropertyDescriptor(user, 'name'));
}

// # creating non-existing property
{
	const user = {};
	// if property doesn't exist, it will be created with all flags set to false by default
	Object.defineProperty(user, 'name', {
		value: 'Ron',
	});

	console.log(Object.getOwnPropertyDescriptor(user, 'name'));
}

// # flags
// ~ writable
{
	// if set to false
	// = we cannot assign a new value to the property
	const user = {
		name: 'Fred',
	};

	Object.defineProperty(user, 'name', {
		writable: false,
	});

	// user.name = 'Ron'; // Error!

	// but we can still change the value using Object.defineProperty, because the property is still configurable
	Object.defineProperty(user, 'name', {
		value: 'Ron',
	});

	console.log(user);
}

// ~ enumerable
{
	// if set to false
	// = property is not visible to Object.keys and for... in loop
	const user = {
		name: 'Fred',
	};

	console.log(Object.keys(user));

	Object.defineProperty(user, 'name', {
		enumerable: false,
	});

	console.log(Object.keys(user));
}

// ~ configurable
{
	const user = {
		name: 'Fred',
	};

	Object.defineProperty(user, 'name', {
		configurable: false,
	});

	// if set to false
	// = we cannot delete property
	// delete user.name; // error!

	// = we cannot change property flags (including 'configurable' flag itself)
	// Object.defineProperty(user, 'name', {
	// 	configurable: true,
	// });

	// but we can still change and assign value!
	Object.defineProperty(user, 'name', {
		value: 'Ron',
	});

	console.log(user);
	user.name = 'Harry';
	console.log(user);
}

// ~ freezing the property
{
	const user = {
		name: 'Fred',
	};

	// to fully forbid any property changes, we need to set both flags
	Object.defineProperty(user, 'name', {
		configurable: false,
		writable: false,
	});

	// = some properties of built-in objects are non-readable, non-enumerable, non-configurable by default
	const descriptor = Object.getOwnPropertyDescriptor(
		Number,
		'MAX_SAFE_INTEGER'
	);
	console.log(descriptor);
	// Мы не сможем отменить это действие, потому что defineProperty не работает с неконфигурируемыми свойствами.
}

// # 'batch' methods
{
	const user = {
		name: 'Fred',
		age: 35,
	};

	// gets the descriptors for all properties
	const descriptors = Object.getOwnPropertyDescriptors(user);
	console.log(descriptors);

	// sets descriptors for multiple properties
	Object.defineProperties(user, {
		name: {
			value: 'Ron',
			writable: false,
		},
		age: {
			value: 22,
		},
	});
}

// # access to the whole object:
{
	// ~ preventExtensions
	// = forbids to add new properties
	const user = {
		name: 'Fred',
		age: 35,
	};
	Object.preventExtensions(user);

	// user.surname = 'Cruger';

	// check
	console.log(Object.isExtensible(user));
}

{
	// ~ seal
	// = forbids to add new properties
	// = sets configurable: false for all properties (forbids to change flags)

	const user = {
		name: 'Fred',
		age: 35,
	};
	Object.seal(user);

	// Object.defineProperty(user, 'name', {
	// 	configurable: true,
	// });

	console.log(Object.getOwnPropertyDescriptors(user));

	// check
	console.log(Object.isSealed(user));
}

{
	// ~ freeze
	// = forbids to add new properties
	// = sets configurable: false for all properties (forbids to change flags)
	// = sets writable: false   for all properties.
	const user = {
		name: 'Fred',
		age: 35,
	};
	Object.freeze(user);

	// Object.defineProperty(user, 'name', { value: 'Ron' }); // Error
	// user.name = 'Ron' // Error

	// check
	console.log(Object.isFrozen(user));
}

// # accessor properties; getters / setters
{
	const user = {
		name: 'Tom',
		surname: 'Soyer',
		age: 16,

		get fullname() {
			return `${this.name} ${this.surname}`;
		},
	};
	// note that fullname is a getter:
	console.log(user);

	// ^ for accessor properties (set / get) descriptor contains get / set properties instead of 'value' and 'writable' flag.
	console.log(Object.getOwnPropertyDescriptor(user, 'fullname'));

	// this will turn property into 'normal property instead of accessor
	Object.defineProperty(user, 'fullname', {
		value: 'Ron',
	});
	console.log(Object.getOwnPropertyDescriptor(user, 'fullname'));
	// note that fullname is now a normal property:
	console.log(user);

	// this will create accessor property with setter and getter
	Object.defineProperty(user, 'fullname', {
		get() {
			return `${this.name} ${this.surname}`;
		},

		set(value) {
			[this.name, this.surname] = value.split(' ');
		},
	});

	// note that fullname is now a Getter/Setter:
	console.log(user);

	// ! you cannot set 'value' and 'get' in one descriptor, those belong to different kinds of properties
}
