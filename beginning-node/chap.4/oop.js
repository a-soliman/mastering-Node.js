function Animal(name) {
	this.name = name;
};

Animal.prototype.walk = function(dest) {
	console.log(`${this.name} is walking to ${dest}`);
};

let animal = new Animal('elephant');

animal.walk('San Fran.')