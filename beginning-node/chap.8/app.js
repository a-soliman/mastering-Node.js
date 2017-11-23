const MongoClient = require('mongodb').MongoClient;

let demoPerson = { name: 'Ahmed', lastName: 'Soliman'};
let findKey = { name : 'Ahmed'};

let mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';

MongoClient.connect(mongoUrl, (err, db) => {
	if(err) throw err;
	console.log('successfully connected');

	let collection = db.collection('people');

	// Add
	collection.insert(demoPerson, (err, docs) => {
		console.log('inserted', docs[0]);
		console.log(docs.ops[0]);
		console.log('ID: ', demoPerson._id)
	});

	// Find
	collection.find(findKey).toArray((err, results) => {
		console.log('Found results : ' , results)
	})


})