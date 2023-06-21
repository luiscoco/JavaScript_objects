//  array is a special type of object

// ~ pseudo-array
const arrayLike = {
	0: 'apple',
	1: 'orange',
	2: 'cabbage',
	length: 3,
};

console.log(arrayLike[0]);
console.log(arrayLike[2]);
console.log(arrayLike.length);

// ~ real array
const array = ['apple', 'orange', 'cabbage', 'pineapple', 'cucumber'];

console.log(array[0]);
console.log(array[2]);
console.log(array.length); // in real arrays length is autocalculated

console.log(typeof arrayLike);
console.log(typeof array);

array.prop = 'bar';
console.log(array.prop);
