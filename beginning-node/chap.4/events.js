const EventEmitter = require('events').EventEmitter;
console.log(EventEmitter);

let emitter = new EventEmitter();

// subscribe
emitter.on('foo', function(arg1, arg2) {
	console.log('foo raised, Args : ', arg1, arg2);
});

// EMit
emitter.emit('foo', { a: 123 }, { b: 456 })
