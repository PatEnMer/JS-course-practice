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

console.log(arr.indexOf(4));

/* w konsoli przeglądarki:
dir(arr)

*/
