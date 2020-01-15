(function() {
	function JSONP(url, callBackName) {
		let script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src = url + '?callback=' + callBackName;

		document.head.appendChild(script);
	}

	function showData(data) {
		let pre = document.createElement('pre');
		pre.textContent = JSON.stringify(data);
		document.body.appendChild(pre);
	}

	document.querySelector('#loadData').onclick = function(e) {
		JSONP('http://adres-zewnetrzengo-serwera-z.danymi', 'showData');
	};
})();
