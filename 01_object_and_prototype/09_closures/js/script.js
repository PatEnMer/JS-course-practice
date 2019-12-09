const firstName = 'Pieter';

(function() {
	const firstName = 'Kasia';
	function sayHello() {
		console.log(firstName);
	}
	// sayHello();
	window.hello = sayHello;
	// funkcje mają domknięcie - dostęp do danych, tam gdzie są zdefiniowane
})();

function fireXTimes(fn, x) {
	let counter = 0;
	return function() {
		if (++counter > x) {
			throw new Error('Przekroczony maksymalny limit ' + x);
		} else {
			fn(counter);
		}
	};
}

const fire3times = fireXTimes(function(c) {
	console.log('Wywołanie poraz ' + c);
}, 3);

// fire3Times()
