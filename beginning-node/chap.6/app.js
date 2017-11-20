const http = require('http');

let server = http.createServer((req, res) => {
	console.log('requesting headers...');
	console.log(req.headers);

	// respond
	res.write('hello client!');
	res.end();
})

server.listen(3000);
console.log('server is running at http://127.0.0.1:3000');