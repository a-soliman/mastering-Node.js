let foo = {
	a: 1,
	b: 'a string',
	c: true
}

let json = JSON.stringify(foo);

console.log(typeof(json));

let backToJS = JSON.parse(json);

console.log(typeof(backToJS))