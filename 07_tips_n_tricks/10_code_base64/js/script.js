let person = {
	firstName: 'Jan',
	lastName: 'Janowski',
	age: 44,
	hobbies: [ 'IT', 'boxing' ]
};

let str = JSON.stringify(person);

// console.log(str);

let encoded = window.btoa(str);

let decoded = window.atob(encoded);

window.location.hash = '?data=' + encodeURIComponent(encoded);
