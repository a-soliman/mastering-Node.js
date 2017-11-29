
// == debugger statment ===
// console.log('Hello');
// debugger;
// console.log('world!')

for( let index = 0; index < 10; index++ ) {
	let message = `loop ${index}`;

	debugger;

	console.log(message);
};

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