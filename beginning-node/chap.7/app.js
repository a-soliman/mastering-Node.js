const express		= require('express');
const bodyParser	= require('body-parser');

let app = express()
	.use((req, res) => {
		res.cookie({'name': 'foo'});
		res.end(req.cookie);
	})
	.listen(3001, () => {
		console.log('Server is running at 3000.')
	})