function Person(firstName, lastName) {
	this.fName = firstName;
	this.lName = lastName;
}

Person.prototype.sayHello = function sayHello() {
	return this.fName + ' ' + this.lName;
};

// Object.prototype.sayHello = function sayHello() {
// 	return this.fName + ' ' + this.lName;
// };

const person1 = new Person('Jan', 'Misiaczek');
const person2 = new Person('Pjeter', 'Januszak');

person1.sayHello = function() {
	return this.fName.toUpperCase() + ' ' + this.lName.toUpperCase();
};

const arr = [];

arr.fName = 'Tablica';
arr.lName = 'Tablicowska';
