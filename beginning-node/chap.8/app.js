const MongoClient = require('mongodb').MongoClient;

// make connection;
const mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';

let person = {name: 'Ahmed', age: 30};


MongoClient.connect(mongoUrl, (err, db) => {
	if(err) throw err;

	console.log('Connected to Db ')
	// Create a collection
	let collection = db.collection('people');


	// insert Documetn
	
	collection.insert(person, (err, docs) => {
		if(err) throw err;
		console.log('inserted.');
	})
});

var updatePerson = function() {
	person.name = 'John';
	console.log(person);
} 
updatePerson()


// const MongoClient = require('mongodb').MongoClient;

// let demoPerson = { name: 'Ahmed', lastName: 'Soliman'};
// let findKey = { name : 'Ahmed'};

// let mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';

// MongoClient.connect(mongoUrl, (err, db) => {
// 	if(err) throw err;
// 	console.log('successfully connected');

// 	let collection = db.collection('people');

// 	// Add
// 	collection.insert(demoPerson, (err, docs) => {
// 		console.log('inserted', docs[0]);
// 		console.log(docs.ops[0]);
// 		console.log('ID: ', demoPerson._id)
// 	});

// 	// Find
// 	collection.find(findKey).toArray((err, results) => {
// 		console.log('Found results : ' , results)
// 	})

// 	// Remove
// 	collection.remove(findKey, (err, results) => {
// 		console.log('Removed person');
// 	})


// })