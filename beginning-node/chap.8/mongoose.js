const mongoose = require('mongoose');


// Schema
let tankSchema = new mongoose.Schema({ name: String, size: String});
tankSchema.methods.print = function() {
	console.log(`Hello, I'm ${this.name}, of size ${this.size}`);
};

let Tank = mongoose.model('Tank', tankSchema);


let tony = new Tank({ name: 'Tony', size: 'small'});

tony.save((err) => {
	if(err) throw err;

	//saved
})


// // connecting via mongoose
// const mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';

// mongoose.connect(mongoUrl);

// let db = mongoose.connection;
// db.on('error', (err) => {
// 	throw err;
// });

// db.once('open', () => {
// 	console.log('connected');
// 	db.close();
// })