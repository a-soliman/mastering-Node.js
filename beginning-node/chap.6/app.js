const connect 	= require('connect');
const http 		= require('http');
const fs		= require('fs');
const path		= require('path');
const util		= require('util');

// a simple logging middleware
// function logit(req, res, next) {
// 	util.log(util.format('Request recieved: %s, %s', req.method, req.url));
// 	next();
// }

function echo(req, res, next) {
	req.pipe(res);
};


connect()
	.use(echo)
	.listen(3000)