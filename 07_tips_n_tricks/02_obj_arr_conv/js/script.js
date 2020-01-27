function sayHello(firstName, lastName) {
	console.log(Array.isArray(arguments));
	let args = Array.prototype.slice(arguments, 0);
	console.log(Array.isArray(args));
}

sayHello('Piotr', 'Kowal');
