// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//Destructuring
// var user={name:'Andri', age:25};
// var {name} = user;
// console.log(name); 
//Output : Andri

MongoClient.connect('mongodb://localhost:27017/TodoApp',  { useNewUrlParser: true }, (err, client) => {
	if(err){
		return console.log('Unable to Connect to MongoDB Server');
	}
	console.log('Connected to MongoDB Server');
	const db = client.db('TodoApp')

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c553121ba2d016c1cd0586d')
	// 	}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// })

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// })

	db.collection('Users').find({
		name: 'Andri'
		}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch users', err);
	})

	// db.collection('Users').find().count().then((count) => {
	// 	console.log(`Users count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// })

	// client.close();
});