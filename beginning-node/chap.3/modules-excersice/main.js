const index = require('./something/index');

index.foo.foo();
index.bas.bas();
index.qux.qux();

// //Location
// const location = require('./location');
// console.log('Filename: ', location.location.filename());
// console.log('Dirname: ', location.location.dirname());

// //buffer 
// let str = require('./buffer').buffer.str;
// console.log(str);


// // from str to buffer.
// let buffer = new Buffer(str, 'utf-8');
// console.log('BUFFER: ', buffer);

// // from buffer to str.
// let roundTrip = buffer.toString('utf-8')
// console.log(roundTrip)

// // === CORE MODULES ===
// // 1. path module
// const path = require('path');
// console.log(path.normalize('/foo//bar/..'))

// console.log(path.join('foo', '/bar', 'bas'));

// const complatePath = '/foo/bar/path.html';
// console.log('Dirname: ', path.dirname(complatePath));
// console.log('Basename: ', path.basename(complatePath));
// console.log('Extname: ', path.extname(complatePath));

// // 2. fs
// const fs = require('fs');

// // write 
// fs.writeFileSync('fs/test.txt', 'Hello fs!');

// // read
// console.log(fs.readFileSync('fs/test.txt').toString())

// // delete
// fs.unlink('./fs/test.txt', function(err) {
// 	if(err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log('text.txt successfully deleted!')
// 	}
// });

// 3. util
const util = require('util');
util.log('Sample message')

// util format function
let name = 'Ahmed';
let age = 30;

console.log(util.format('%s is %d years old!', name, age))


// util testing
console.log(util.isArray([]));
console.log(util.isArray({name: ['ahmed']}))
console.log(util.isDate(new Date()))
console.log(util.isError(new Error('This is an error')))
console.log(util.isError({message: 'This is not an error'}))























