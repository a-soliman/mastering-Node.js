const express		= require('express');
const serveStatic	= require('serve-static');


let app = express()
	.use(serveStatic(__dirname + '/public'))
	.listen(3000);