const connect 	= require('connect');
const http 		= require('http');
const fs		= require('fs');
const path		= require('path');


function send404(response) {
	response.writeHead(404, {'Content-Type' : 'text/plain'});
	response.write('Error 404: Resource not found.');
	response.end();
};

const mimeLookup = {
	'.js' : 'application/javascript',
	'.html': 'text/html'
};


let server = http.createServer((req, res) => {
	if(req.method == 'GET') {

		//resolve file path to file system path
		var fileurl;

		if(req.url == '/') {
			fileurl = './index.html';
		} else {
			fileurl = req.url;
		}
		var filepath = path.resolve('./public/' + fileurl);

		// lookup mimetype
		var fileExt = path.extname(filepath);
		var mimeType = mimeLookup[fileExt];

		if(!mimeType) {
			send404(res);
			return;
		}

		// see if we have that file
		fs.exists(filepath, function(exists) {
			// if not 
			if(!exists) {
				send404(res);
				return;
			};

			// finally stream the file
			res.writeHead(200, {'Content-Type': mimeType});
			fs.createReadStream(filepath).pipe(res);
		});
	}
	else {
		send404(res);
	}
})

server.listen(3000);
console.log('server is running at http://127.0.0.1:3000');