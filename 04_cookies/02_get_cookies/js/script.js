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

function getCookie(name) {
	if (!document.cookie) {
		return null;
	}

	let arr = document.cookie.split(/; */);
	let cookies = {};

	arr.forEach(function(cookie) {
		cookie = cookie.split('=');
		cookies[cookie[0]] = decodeURIComponent(cookie[1]);
	});

	return cookies[name] || null;
}
