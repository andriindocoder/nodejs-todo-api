// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true }, (err, client) => {
	if(err){
		return console.log('Unable to Connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp')

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	db.collection('Users').findOneAndDelete({_id: new ObjectID('5c553d11ba2d016c1cd05a74')}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});

	// client.close();
});