const mongoose = require('mongoose');

// connecting via mongoose
const mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';

mongoose.connect(mongoUrl);

let db = mongoose.connection;
db.on('error', (err) => {
	throw err;
});

db.once('open', () => {
	console.log('connected');
	db.close();
})