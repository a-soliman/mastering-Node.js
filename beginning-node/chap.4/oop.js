//UTIL inhiritnce
const inherits = require('util').inherits;

function Human(name) {
	this.name = name;
};

Human.prototype.walk = function(dest) {
	console.log(this.name + ' is walking to ' + dest);
};

function SportsMan(name) {
	Human.call(this, name);
};

inherits(SportsMan, Human);

SportsMan.prototype.run = function(speed) {
	console.log(this.name + ' is running at speed of ' + speed);
};

let someOne = new SportsMan('someOne');

someOne.walk('the city.')
someOne.run(55);

// ===
// object.create

let foo = {};

let bar = Object.create(foo);

console.log(bar.__proto__ == foo)


// same teq.

function Animal (name) {
	this.name = name;
};

Animal.prototype.walk = function(dest) {
	console.log(this.name + ' is walking to ' + dest);
};

function Bird(name) {
	this.name = name
}

Bird.prototype = Object.create(Animal.prototype);

let bird = new Bird('bird');

bird.walk('somewhere')