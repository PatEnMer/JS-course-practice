const files = [
	'pictrue-thumb-150x150.jpg',
	'source-thumb-150x150.jpg',
	'town-thumb-150x150.jpg',
	'sport-thumb-300x220.jpg'
];

const regex = /-thumb-\d{1,4}x\d{1,4}/;

// let search = files[0].search(regex);

files.forEach(function(file, i) {
	let index = file.search(regex);

	if (index > -1) {
		files[i] = file.substring(0, index);
	}
});

function stringContains(string, pattern) {
	let regex = new RegExp(pattern);
	let index = string.search(regex);
	return index > -1;
}
