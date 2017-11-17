const events	= require('events');
const util 		= require('util');

let eventEmitter	= events.EventEmitter;
let inherits 		= util.inherits;

function Person(name) {
	this.name = name;
};

inherits(Person, eventEmitter)


let ahmed 	= new Person('Ahmed');
let mark 	= new Person('Mark');
let john 	= new Person('John');

let people = [ahmed, mark, john];

people.forEach(function(person) {
	person.on('speak' , function(message) {
		console.log(person.name + ' says ' + message);
	});
});


ahmed.emit('speak', "What's up");
mark.emit('speak', 'How is it?')