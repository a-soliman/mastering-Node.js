const _ = require('underscore');

console.log(_)

console.log(_.min([5,3,1,9]))

// filter
let arr = [20,200,210,390,300,5,90,99];

let results = _.filter(arr, (item) => {
	return item > 100 });

console.log(results)

// reject
var arr2 = [1,2,3,4,5,6,7];

let odds = _.reject(arr2, (num) => {
	return num % 2 == 0;
})

console.log(odds)

/*
// JSON
let foo = {
	a: 1,
	b: 'a string',
	c: true
}

let json = JSON.stringify(foo);

console.log(typeof(json));

let backToJS = JSON.parse(json);

console.log(typeof(backToJS))
*/