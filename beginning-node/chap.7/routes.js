const express 	= require('express');

let app = express();

// app.all('/', (req, res, next) => {
// 	res.write('all\n');
// 	next();
// });

// app.get('/', (req, res, next) => {
// 	res.end('get');
// });

// app.post('/', (req, res, next) => {
// 	res.end('post')
// });

// app.put('/', (req, res, next) => {
// 	res.end('put')
// });

// app.delete('/', (req, res, next) => {
// 	res.end('delete')
// });



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


app.listen(3000, () => {
	console.log('server is runing on 3000.')
})