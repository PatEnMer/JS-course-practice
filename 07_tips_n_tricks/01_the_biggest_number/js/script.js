let numbers = [ 3, 33, 44, 55, 23, 456, 1, 231, 90 ];

// let max = Math.max(3, 33, 44, 55, 23, 456, 1, 231, 90);

let max = Math.max.apply(Math, numbers);

console.log(max);
