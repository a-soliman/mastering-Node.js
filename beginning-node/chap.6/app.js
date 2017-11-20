const http = require('http');

let server = http.createServer((request, response) => {
	console.log('request starting...');

	// respond
	response.write('hello client!');
	response.end();
})

server.listen(3000);
console.log('server is running at http://127.0.0.1:3000');