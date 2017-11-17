function Animal(name) {
	this.name = name;
};

Animal.prototype.walk = function(dest) {
	console.log(`${this.name} is walking to ${dest}`);
};

// ======
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


// ======

function Bird(name) {
	Animal.call(this, name);
}

Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function(dest) {
	console.log(this.name + ' is flying to ' + dest);
};

let bird = new Bird('some bird');

