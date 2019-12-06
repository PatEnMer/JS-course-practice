// function sayHello() {
// 	console.log('siema');
// }

// sayHello.call();

function sayHello(text) {
	console.log(text + ' ' + this.firstName + ' ' + this.lastName);
}

const person = {
	firstName: 'Pieter',
	lastName: 'Januszak'
	// say: sayHello
};

sayHello.call(person, 'Siemka');

const elems = document.querySelectorAll('#list li');

elems.forEach((elem) => {
	elem.style.color = 'red';
});

function sum(first, second, third) {
	console.log(first + second + third);
}

sum.apply(this, [ 2, 3, 4 ]);
// apply przyjmuje jako drugi parametr tablice
