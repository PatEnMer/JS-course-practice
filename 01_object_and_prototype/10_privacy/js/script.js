// const person = {
// 	_firstName: 'Janek',
// 	_lastName: 'Kowalik',
// 	_age: 24,
// 	getName: () => {
// 		return this._firstName + ' ' + this._lastName;
// 	},
// 	getAge: () => {
// 		return this._age;
// 	},
// 	setName: (firstName, lastName) => {
// 		this._firstName = firstName || this._firstName;
// 		this._lastName = lastName || this._lastName;
// 	},
// 	setAge: (age) => {
// 		this._age = age > 0 ? age : this._age;
// 	}
// };

const person = (() => {
	let _firstName = 'Janek';
	let _lastName = 'Kowalik';
	let _age = 24;
	return {
		getName: () => {
			return _firstName + ' ' + _lastName;
		},
		getAge: () => {
			return _age;
		},
		setName: (firstName, lastName) => {
			_firstName = firstName || _firstName;
			_lastName = lastName || _lastName;
		},
		setAge: (age) => {
			_age = age > 0 ? age : _age;
		}
	};
})();

function Person(firstName, lastName) {
	let _firstName = firstName;
	let _lastName = lastName;

	this.getName = () => {
		return _firstName + ' ' + _lastName;
	};
}

const person2 = new Person('Kasia', 'Kowalik');
