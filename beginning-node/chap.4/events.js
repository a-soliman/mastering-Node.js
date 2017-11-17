const EventEmitter = require('events').EventEmitter;


let emitter = new EventEmitter();

// subscribe
emitter.on('foo', function() {
	console.log(' subscribe 1' );
});
// subscribe
emitter.on('foo', function() {
	console.log(' subscribe 2' );
});
// subscribe
emitter.on('bar', function() {
	console.log(' bar subscribed' );
});

// EMit
emitter.emit('bar')
