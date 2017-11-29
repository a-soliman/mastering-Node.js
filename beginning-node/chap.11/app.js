

let person = { name: 'Ahmed' }

person.age = 30;

debugger;
person.name = 'Mike'

console.log(person)



// == debugger statment ===

// === ex.4 ===
// const http = require('http');
// let server = http.createServer((req, res) => {
// 	console.log('Request srarted');

// 	// res
// 	res.write('Hello Client');
// 	res.end()
// });

// server.listen(3000, () => {
// 	console.log('server is on at 3000');
// });



// === ex.1 ===
// console.log('Hello');
// debugger;
// console.log('world!')


// === ex.2 ===
// for( let index = 0; index < 10; index++ ) {
// 	let message = `loop ${index}`;

// 	debugger;

// 	console.log(message);
// };


// === ex.3 ===
// function foo(index)  {
// 	index++;
// 	debugger;
// 	console.log('index')
// };

// function bar(index) {
// 	index++;
// 	foo(index);
// };

// var index = 0;
// bar(0);






/*

// === trace ===
function foo() {
	console.trace('trace at foo');

	//excution continues
	console.log('Stack trace printed');
};

function bar() {
	foo();
};

bar()

*/

/*

// === TIME ===
console.time();
setTimeout(() => {
	console.timeEnd()
}, 700);

console.time('first');
setTimeout(() => {
	console.timeEnd('first');
}, 1000);

console.time('second');
setTimeout(() => {
	console.timeEnd('second');
}, 320);

*/