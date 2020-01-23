const files = [
	'pictrue-150x150.jpg',
	'source-150x150.jpg',
	'town-150x150.jpg',
	'sport-300x220.jpg',
	'brazileo-2000x1500.jpg'
];

const regex = /150x150/;

let thumbs = files.filter(function(file) {
	return regex.test(file);
});
