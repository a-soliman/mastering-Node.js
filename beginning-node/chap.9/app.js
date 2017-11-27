const express 		= require('express');
const bodyParser 	= require('body-parser');
const mongodb 		= require('mongodb')



let app = express();

// create MongoDB connection
const MongoClient = require('mongodb').MongoClient;
let db;
let itemsCollection;

const mongoUrl = 'mongodb://ahmed_soliman:abc123@ds119306.mlab.com:19306/beginning-node';
MongoClient.connect(mongoUrl, function(err, database) {
	if (err) throw err;

	//connected
	db = database;

	// 
	itemsCollection = db.collection('items');

	app.listen(3000, () => {
	console.log('server is running on port 3000');
	});
})

// Create a router than can accept json
const router = express.Router();
router.use(bodyParser.json())

// setup connection routes
router.route('/')
	.get(function (req, res, next) {
		itemsCollection.find().toArray(function(err, docs) {
			res.send({
				status: 'Items Found',
				items: docs
			});
		})
	})

	.post(function(req, res, next) {
		let item = req.body;
		itemsCollection.insert(item, function(err, docs) {
			res.send({
				status: 'Item Added',
				itemId: item._id
			});
		});
	})

// setup the item routes
router.route('/:id')
	.delete(function(req, res, next) {
		let id = req.params['id'];
		let lookup = { _id: new mongodb.ObjectID(id) };

		itemsCollection.remove(lookup, function(err, results) {
			res.send({ status: 'Item Cleared'})
		})
	})

app.use(express.static(__dirname + '/public'))
	.use('/todo', router)