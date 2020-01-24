const img = document.querySelector('img');
const p = document.querySelector('p');

//if SVG isn't supported

img.src = img.src.replace('.svg', '.png');

// p.innerHTML = p.textContent.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

p.innerHTML = p.textContent.replace(/\*\*(.+?)\*\*/g, function(match, p1, offset, string) {
	let captured = [].slice.call(arguments, 1, -2);
	console.log(captured);
	console.log(arguments);
	return '<b>' + captured[0].toUpperCase() + '</b>';
});
