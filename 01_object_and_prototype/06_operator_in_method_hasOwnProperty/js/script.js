function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

Person.prototype.sayHello = function() {
	return this.firstName + ' ' + this.lastName;
};

const person = {
	firstName: 'Janek',
	lastName: 'Kowalkiewicz',
	age: 34
};

const person2 = new Person('Jola', 'Jolańska', 17);

// if ('age' in person) {
// 	console.log(person.age);
// }

for (let key in person2) {
	if (person2.hasOwnProperty(key)) {
		console.log(key);
	}
}
