const array = new Array();

function Preson(firstName, lastName) {
	this.fName = firstName;
	this.lName = lastName;

	this.sayHello = function sayHello() {
		return this.fName + ' ' + this.lName;
	};
}

const person1 = new Preson('Jan', 'Misiaczek');
const person2 = new Preson('Pjeter', 'Januszak');
