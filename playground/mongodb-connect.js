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

	db.collection('Todos').insertOne({
		text     : 'Something to do ',
		completed: false
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert to do',err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	})

	db.collection('Users').insertOne({
		name    : 'Andri',
		age     : 25,
		location: 'Jakarta'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert to do',err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	})

	client.close();
});