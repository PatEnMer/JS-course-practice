function AJAX(config) {
	if (!(this instanceof AJAX)) {
		return new AJAX(config);
	}

	this._xhr = new XMLHttpRequest();
	this._config = this._extendOptions(config);

	this._assigneEvents();

	this._open();
	this._assigneUserHeaders();

	this._send();
}

AJAX.prototype._extendOptions = function(config) {
	let defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));
	// console.log(defaultConfig);
	for (let key in defaultConfig) {
		// console.log(key);
		if (key in config) {
			defaultConfig[key] = config[key];
		}
	}
	return defaultConfig;
};

AJAX.prototype._assigneEvents = function() {
	this._xhr.addEventListener('readystatechange', this._handleResponse.bind(this), false);
	this._xhr.addEventListener('abort', this._handleError.bind(this), false);
	this._xhr.addEventListener('error', this._handleError.bind(this), false);
	this._xhr.addEventListener('timeout', this._handleError.bind(this), false);
};

AJAX.prototype._assigneUserHeaders = function() {
	if (Object.keys(this._config.headers).length) {
		for (let key in this._config.headers) {
			this._xhr.setRequestHeader(key, this._config.headers[key]);
		}
	}
};

AJAX.prototype._open = function() {
	this._xhr.open(
		this._config.type,
		this._config.url,
		this._config.options.async,
		this._config.options.username,
		this._config.options.password
	);

	this._xhr.timeout = this._config.timeout;
};

AJAX.prototype._send = function() {
	this._xhr.send();
};

AJAX.prototype._handleResponse = function(e) {
	if (this._xhr.readyState === 4 && this._xhr.status === 200) {
		console.log('jest odpowiedź');
	}
};

AJAX.prototype._handleError = function(e) {};

AJAX.prototype._defaultConfig = {
	type: 'GET',
	url: window.location.href,
	data: {},
	options: {
		async: true,
		timeout: 0,
		username: null,
		password: null
	},
	headers: {}
};

AJAX({
	type: 'POST',
	url: 'odbierz.php',
	data: {
		firstName: 'Piotr',
		lastName: 'Piotrowicz'
	},
	headers: {
		'X-My-Header': '123#asdqwe'
	},
	success: function(response, xhr) {
		console.log('Udało się! Status: ' + xhr.status);
	},
	faliure: function(xhr) {
		console.log('Wystąpił błąd. Status: ' + xhr.status);
	}
});
