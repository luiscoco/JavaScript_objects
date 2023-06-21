'use strict';

// # ways to iterate over object

const colors = {
	red: '#ff0000',
	blue: '#0000f',
	green: '#008000',
};

const parent = {
	black: '000000',
};

Object.setPrototypeOf(colors, parent);

// = old way: for - in
for (const key in colors) {
	console.log(key);
	console.log(colors[key]);
}

console.log(Object.keys(colors));
console.log(Object.values(colors));
console.log(Object.entries(colors));

// = new way: for - of
for (const key of Object.keys(colors)) {
	console.log(key);
}

for (const value of Object.values(colors)) {
	console.log(value);
}

for (const [key, value] of Object.entries(colors)) {
	console.log(key);
	console.log(value);
}
