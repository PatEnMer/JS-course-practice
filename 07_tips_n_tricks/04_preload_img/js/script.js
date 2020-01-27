const button = document.querySelector('#loadImages');

const imgs = [
	'https://cdn.pixabay.com/photo/2020/01/22/18/24/venice-4785972_960_720.jpg',
	'https://cdn.pixabay.com/photo/2020/01/21/13/23/freedom-4782870_960_720.jpg'
];

// function showImages() {
// 	let dc = document.createDocumentFragment();

// 	imgs.forEach(function(url) {
// 		let img = document.createElement('img');
// 		img.src = url;
// 		dc.appendChild(img);
// 	});

// 	document.body.appendChild(dc);
// }

function preloadImages(imgs, fn) {
	let conuter = 0;
	let length = imgs.length;
	let dc = document.createDocumentFragment();

	function conut() {
		if (++conuter === length) {
			fn(dc);
		}
	}

	imgs.forEach(function(url) {
		let img = document.createElement('img');

		img.onload = conut;
		img.src = url;
		dc.appendChild(img);
	});
}

function showImages() {
	preloadImages(imgs, function(dc) {
		document.body.appendChild(dc);
	});
}

button.onclick = showImages;
