(function() {
	function TrollKiller(filed, restrictedWords) {
		this._field = filed;
		this._words = restrictedWords.split(/, */);
		this._regex = new RegExp('(' + this._words.join('|') + ')', 'igm');
		console.log(this._regex);

		this._assignEvents();
	}

	TrollKiller.prototype._assignEvents = function() {
		this._field.addEventListener('keyup', this._filterMessage.bind(this), false);
	};

	TrollKiller.prototype._filterMessage = function(e) {
		console.log(e);
	};

	let tk = new TrollKiller(
		document.querySelector('[name = "your-message"]'),
		'kurka, orzesz ty, psia kość, motyla noga'
	);
})();
