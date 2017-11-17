function Animal(name) {
	this.name = name;
};

Animal.prototype.walk = function(dest) {
	console.log(`${this.name} is walking to ${dest}`);
};

function Bird(name) {
	this.name = name;
};


Bird.prototype = Animal.prototype;

let bird = new Bird('some bird');

bird.walk('some where')