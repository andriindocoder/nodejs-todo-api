const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5c5577d2dfe58408d9185f07';

if(!ObjectID.isValid(id)){
	console.log('ID not Valid');
}

Todo.find({
	_id:id
}).then(() => {
	console.log('Todos',todos);
});

Todo.findOne({
	_id:id
}).then(() => {
	console.log('Todo',todo);
});

Todo.findById(id).then(() => {
	if(!todo){
		return console.log('ID not found');
	}
	console.log('Todo by Id',todo);
}).catch((e) => console.log(e));

User.findById('5c57744d0a8d2306fabc1389').then((user) => {
	if(!user){
		return console.log('Unable to find User');
	}

	console.log(JSON.stringify(user, undefined, 2));
},(e) => {

});
