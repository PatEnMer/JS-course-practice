let person = {
	firstName: 'Jan',
	lastName: 'Janowski',
	age: 44,
	hobbies: [ 'IT', 'boxing' ]
};

function copyObject(obj) {
	return JSON.parse(JSON.stringify(obj));
}

let personCopy = copyObject(person);
