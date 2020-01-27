const article = document.querySelector('#article');
const paragraphs = article.querySelectorAll('p');

// function changeColor(e) {
// 	e.target.style.color = '#ff0000';
// }

// [].forEach.call(paragraphs, function(p) {
// 	p.onclick = changeColor;
// });

function changeColor(e) {
	if (e.target.nodeName === 'P') {
		e.target.style.color = '#ff0000';
	}
}

article.onclick = changeColor;

function addPara() {
	let p = document.createElement('p');
	p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	article.appendChild(p);
}
