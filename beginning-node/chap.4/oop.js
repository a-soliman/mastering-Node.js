function Animal(name) {
	this.name = name;
};

Animal.prototype.walk = function(dest) {
	console.log(`${this.name} is walking to ${dest}`);
};

function Bird(name) {
	this.name = name;
};




bird.walk('some where')

// .call 

let foo = {};
let bar = {};

function func(val) {
	this.val = val;
};

func.call(foo, 123);
func.call(bar, 456);

console.log(foo);
console.log(bar);
