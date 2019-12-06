function Shape(sideLengths) {
	if (!(this instanceof Shape)) {
		return new Shape(sideLengths);
	}

	this.sideLengths = sideLengths;
}

function sayHello() {
	return this.firstName + ' ' + this.lastName;
}

// var firstName = 'Jan';
// var lastName = 'Jankowski';

var person = {
	firstName: 'Jan',
	lastName: 'kowalski',
	sayHello: sayHello
};

var person2 = {
	firstName: 'Kasia',
	lastName: 'Nowak',
	sayHello: sayHello
};

var shape = Shape([ 20, 20, 20, 20 ]);
