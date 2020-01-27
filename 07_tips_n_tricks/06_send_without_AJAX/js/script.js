const resolution = window.screen.width + 'x' + window.screen.height;

// console.log(resolution);

function sendInfo(url, info) {
	let img = document.createElement('img');
	img.src = url + '?resolution=' + info;
}

sendInfo('http://localhost/info.info.php', resolution);
