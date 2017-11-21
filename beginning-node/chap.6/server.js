const https = require('https');
const fs 	= require('fs');
const connect = require('connect');


let options = {
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
};

let app = connect()


https.createServer(options, app)
	.listen(3000, () => {
	console.log('server is running on 3000')
	});