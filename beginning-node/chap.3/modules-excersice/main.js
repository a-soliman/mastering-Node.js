const index = require('./something/index');

index.foo.foo();
index.bas.bas();
index.qux.qux();

//Location
const location = require('./location');
console.log('Filename: ', location.location.filename());
console.log('Dirname: ', location.location.dirname());

//buffer 
let str = require('./buffer').buffer.str;
console.log(str);


// from str to buffer.
let buffer = new Buffer(str, 'utf-8');
console.log('BUFFER: ', buffer);

// from buffer to str.
let roundTrip = buffer.toString('utf-8')
console.log(roundTrip)