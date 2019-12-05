// NodeList.prototype.forEach = function(callback) {
// 	for (let i = 0; i < this.length; i++) {
// 		callback(this[i]);
// 	}
// };

const elems = document.querySelectorAll('#list li'); //new NodeList()

elems.forEach(function(elem) {
	elem.style.color = '#ff0000';
});

// domyślnego rozszerzania nie powinniśmy stosować. nie jest to dobra praktyka, jednak potrzebna w przypadku starych przeglądarek, do których były pisane polifile.
