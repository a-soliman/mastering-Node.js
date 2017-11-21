const express		= require('express');
const bodyParser	= require('body-parser');
const cookieParser	= require('cookie-parser');

let app = express()
	.use(cookieParser())
	.use('/toggle', (req, res) => {
		console.log(req.cookies);
		if(req.cookies.message) {
			res.clearCookie('message');
			res.end('cleared the message cookie! was: ' + req.cookies.message);
		}
		else {
			res.cookie('message', 'some message');
			res.end('message cookie was set!')
		}
	})
	.listen(3000, () => {
		console.log('Server is running on port 3000;')
	})