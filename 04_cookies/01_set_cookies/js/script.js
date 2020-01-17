function setCookie(name, value, days, path, domain, secure) {
	if (!navigator.cookieEnabled) return;

	let e = encodeURIComponent;

	let cookie = e(name) + '=' + e(value);

	if (typeof days === 'number') {
		let date = new Date();

		date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

		cookie += '; expires=' + date.toGMTString();
	}

	if (path) {
		cookie += '; path=' + path;
	}

	if (domain) {
		cookie += '; domain=' + domain;
	}

	if (secure) {
		cookie += '; secure=' + secure;
	}

	document.cookie = cookie;
}
