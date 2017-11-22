const express 	= require('express');

let app = express();

/*

app.all('/', (req, res, next) => {
	res.write('all\n');
	next();
});

app.get('/', (req, res, next) => {
	res.end('get');
});

app.post('/', (req, res, next) => {
	res.end('post')
});

app.put('/', (req, res, next) => {
	res.end('put')
});

app.delete('/', (req, res, next) => {
	res.end('delete')
});

*/

// ==========   ==========   ==========

/*

// === routes object ===

app.route('/')
	.all((req, res, next) => {
		res.write('all\n');
		next();
	})
	.post((req, res, next) => {
		res.end('post');
	})
	.get((req, res, next) => {
		res.end('get');
	})
	.put((req, res, next) => {
		res.end('put');
	})
	.delete((req, res, next) => {
		res.end('delete');
	});

*/

// ==========   ==========   ==========

/*

// === PATH OPTIONS ===

app.get('/', (req, res) => {
	res.send('Nothing passed in!');
});

app.get(/^\/[0-9]+$/, (req, res) => {
	res.send('passed a number');
});

app.get('/*', (req, res) => {
	res.send('not a number!');
});

*/

// ==========   ==========   ==========

// === Parameter-Based Routing ===

let user1 = {
	id: '1',
	name: 'Ahmed',
	age: 30
};

let user2 = {
	id: '2',
	name: 'Mike',
	age: 24
};

let user3 = {
	id: '3',
	name: 'John',
	age: 35
};

let users = [user1, user2, user3];

let findUser = (userId) => {
	for( let i = 0; i < users.length; i++ ) {
		let user = users[i];

		if(user.id == userId) {
			return user;
		}
	}
	return false;
};

app.get('/user/:userId', (req, res) => {
	// res.send('user id: ' + req.params['userId'])
	let passedId = req.params['userId'];
	let user = findUser(passedId);
	if(!user) {
		res.send('user does not exist!');
	}
	else {
		res.send({'name': user.name})
	}
})



















































app.listen(3000, () => {
	console.log('server is runing on 3000.')
})