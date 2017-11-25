const mongoose = require('mongoose');


// all together

//Schema
let tankSchema = new mongoose.Schema({ name: String, size: String});
tankSchema.methods.print = function() {
	console.log(`I'm ${this.name} the ${this.size}`);
};

let Tank = mongoose.model('Tank', tankSchema);

//create the connection
const mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';

mongoose.connect(mongoUrl);
let db = mongoose.connection;
db.once('open', () => {
	console.log('connected!');
});

// use the model
let tony = new Tank({ name: 'Tony', size: 'small'});
tony.print()

// save 
tony.save((err) => {
	if(err) throw err;

	console.log('Saved!')
});

//find



// // Schema
// let tankSchema = new mongoose.Schema({ name: String, size: String});
// tankSchema.methods.print = function() {
// 	console.log(`Hello, I'm ${this.name}, of size ${this.size}`);
// };

// let Tank = mongoose.model('Tank', tankSchema);


// let tony = new Tank({ name: 'Tony', size: 'small'});
// let dz = new Tank({ name: 'DZ', size: 'meduim'});

// // tony.save((err) => {
// // 	if(err) throw err;

// // 	//saved
// // })
// Tank.findOne({name: 'DZ'})
// 	.exec((err, tank) => {
// 		if(err) throw err;

// 		tank.print();
// 	})


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