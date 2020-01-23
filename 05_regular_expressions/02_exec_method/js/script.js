const p = document.querySelector('p');

// const regex = new RegExp('\\w+@(\\w+\\.\\w{2,4})', 'g');
const regex = /\w+@(\w+\.\w{2,4})/g;

// const search = regex.exec(p.textContent);
// const search2 = regex.exec(p.textContent);

let search;
let domains = [];

while ((search = regex.exec(p.textContent))) {
	domains.push(search[1]);
}
