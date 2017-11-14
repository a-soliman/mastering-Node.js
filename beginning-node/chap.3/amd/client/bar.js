define(['exports'], (exports) => {
	let bar = exports.log = function() {
		console.log('bar was used!')
	};
	return bar;
})