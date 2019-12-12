const person = {
	firstName: 'Jan',
	lastName: 'Janowski',
	hobbies: [ 'boks', 'gry', 'technologie' ],
	birthdate: new Date(1978, 4, 12),
	married: true,
	salary: 3000,
	sayHello: () => {
		return this.firstName + ' ' + this.lastName;
	}
};

// console.log(person.birthdate.getDate());

const personJSON = JSON.stringify(person, null, 4);

const personAgain = JSON.parse(personJSON);
