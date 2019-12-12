const props = [ 'firstName', 'lastName' ];

const person = {
	_tempId: '24123',
	firstName: 'Pieter',
	lastName: 'Januszak',
	hobbies: [ 'BIEMWIU', 'Tate' ],
	married: false,
	birthdate: new Date(1999, 3, 2),
	salary: 1000,
	sayHello: () => {
		return this.firstName + ' ' + this.lastName;
	},
	zipCodePattern: /^\d{2}-\d{3}$/
};

RegExp.prototype.toJSON = function() {
	return this.source;
};

const personJSON = JSON.stringify(person, function(k, v) {
	// console.log(k);
	// console.log(v);
	// console.log('-----');
	// if (typeof v === 'string') {
	// 	return v.toUpperCase();
	// }
	// return v;
	// if (k[0] === '_') {
	// 	return undefined;
	// }
	// return v;
	// if (v instanceof RegExp) {
	// 	return v.source;
	// }
	return v;
});

const personAgain = JSON.parse(personJSON, function(k, v) {
	if (k === 'birthdate') {
		return new Date(Date.parse(v));
	}

	if (k === 'zipCodePattern') {
		return new RegExp(v);
	}
	return v;
});
