const index = require('./something/index');

index.foo.foo();
index.bas.bas();
index.qux.qux();

//Location
const location = require('./location');
console.log('Filename: ', location.location.filename());
console.log('Dirname: ', location.location.dirname());