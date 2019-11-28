const arr = [ 1, 2 ];

console.log(arr.indexOf(1));

/* w konsoli przeglądarki:
dir(arr)

*/

arr.indexOf = function() {
	return false;
};

/* w konsoli przeglądarki:
dir(arr)
arr.indexOf

*/

const arr2 = [ 3, 4 ];

console.log(arr2.indexOf(4));

/* w konsoli przeglądarki:
dir(arr2)
dir(arr)

Array()
typeof Array
Array.prototype
dir(Array.prototype)

arr.constructor
arr.constructor === Array
dir(arr.constructor.prototype)

({}).constructor  // - nowy obiekt

dir(Array.prototype)

*/

console.log(arr2.valueOf());

/* w konsoli przeglądarki:
dir(Array.prototype)
dir(Object.prototype)

([]).__proto__  // - dunder proto - odwpłanie do prototypu utworzonego obiektu

([]).__proto__ === Array.prototype
true
*/
