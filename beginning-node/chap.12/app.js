const assert = require('assert');

const List = require('./list');


let list = new List();

console.log('testing list.count');

assert.equal(list.count(), 0)