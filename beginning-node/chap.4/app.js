

// MOMENT
const moment = require('moment');

// from date to moment
let wrapped = moment(new Date())
console.log('Moment : ', wrapped);


// from moment to date
let date = wrapped.toDate();
console.log('DATE : ', date);

//=============================

/*

// Date and moment
let now = new Date();

console.log(now);

let milliseconds = now.getMilliseconds();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
let date = now.getDate();
let month =  now.getMonth();
let year = now.getFullYear();

let day = now.getDay();

// detailed constructor for the date;
let dateCopy = new Date(year, month, day, hours, minutes, seconds, milliseconds);
console.log(dateCopy)

*/


//=============================

/*

// optimist

const argv = require('optimist').argv;
delete argv['$0'];
console.log(argv);

*/

//=============================

/*
const _ = require('underscore');

console.log(_)

console.log(_.min([5,3,1,9]))

// filter
let arr = [20,200,210,390,300,5,90,99];

let results = _.filter(arr, (item) => {
	return item > 100 });

console.log(results)

// reject
var arr2 = [1,2,3,4,5,6,7];

let odds = _.reject(arr2, (num) => {
	return num % 2 == 0;
})

console.log(odds)
*/
//=============================
/*
// JSON
let foo = {
	a: 1,
	b: 'a string',
	c: true
}

let json = JSON.stringify(foo);

console.log(typeof(json));

let backToJS = JSON.parse(json);

console.log(typeof(backToJS))
*/