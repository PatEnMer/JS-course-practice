const arr = [ 1, 2 ];

console.log(arr.indexOf(1));

/* w konsoli przeglądarki:
dir(arr)

*/

arr.indexOf = function() {
	return false;
};

/* w konsoli przeglądarki:
arr.indexOf

*/
