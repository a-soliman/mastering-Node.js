const express =require('express');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

let sessionStore = new MongoStore({
	host: '127.0.0.1',
	port: '27017',
	db: 'session'
});

let app = express();

app.use(session({
	secret: 'my super secret sign key.'
}));
// app.use(session({
// 	secret: 'my super secret sign key',
// 	store: sessionStore
// }));

app.use('/home', (req, res) => {
	if(req.session.views) {
		req.session.views++;
	}
	else {
		req.session.views = 1;
	};
	res.end('Total views for you ' + req.session.views);
});

app.use('/reset', (req, res) => {
	delete req.session.views;
	res.end('Cleared all your views');
});

app.listen(3000, () => {
	console.log('server is on at port 3000.');
})
/*
// express session example

let app = express();

app.use(session({
	secret: 'my super secret sign key.'
}));

app.use('/home', (req, res) => {
	if(req.session.views) {
		req.session.views++;
	}
	else {
		req.session.views = 1;
	}
	res.end('Total views for you ' + req.session.views);
});

app.use('/reset', (req, res) => {
	delete req.session.views;
	res.end('Cleared all your views.');
});

app.listen(3000, ()  => {
	console.log('Server is on at port 3000.')
});

*/