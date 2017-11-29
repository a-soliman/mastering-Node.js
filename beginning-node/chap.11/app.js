
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