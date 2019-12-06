function sayHello(text) {
	console.log(text + ' ' + this.firstName + ' ' + this.lastName);
}

const person = {
	firstName: 'Piter',
	lastName: 'Kowalik'
};

const hello = sayHello.bind(person, 'Cześć');

function bind(fn, obj) {
	let args = Array.prototype.slice.call(arguments, 2);
	// console.log(args);
	return function() {
		fn.apply(obj, args);
	};
}

const hello2 = bind(sayHello, person, 'Hej');
