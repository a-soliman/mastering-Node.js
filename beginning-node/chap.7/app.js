const express		= require('express');
const bodyParser	= require('body-parser');

let app = express()
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use((req, res) => {
		console.log(req.body)
		if( req.body.foo ) {
			res.end('Body parsed! value of foo: ' + req.body.foo);
		}
		else {
			res.end('Body does not have foo!');
		}
	})
	.use((err, req, res, next) => {
		res.end('Invalid Body!')
	})
	.listen(3000, () => {
		console.log('Server is running on 3000...')
	})