const assert = require('assert');

const List = require('./list');


let list = new List();

console.log('testing list.count');

//assert.equal(list.count(), 0)

console.log('testing list.add');

list.add({
	id: 'some id',
	value: 'some value'
});

assert.equal(list.count(), 1)