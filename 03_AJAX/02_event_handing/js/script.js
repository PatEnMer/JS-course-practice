const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

xhr.open('GET', 'about-us.html', true);

// console.log(xhr.readyState);

xhr.onreadystatechange = function(e) {
	if (this.readyState === 4 && this.status === 200) {
		console.log(this.response);
	}
};

function logType(e) {
	console.log(e.type);
}

xhr.timeout = 1;

xhr.onloadstart = logType;
xhr.onprogress = logType;
xhr.onabort = logType;
xhr.onerror = logType;
xhr.onload = logType;
xhr.ontimeout = logType;
xhr.onloadend = logType;

xhr.send(null);

// xhr.abort();

// console.log(xhr.response);

// 0 - Unsent
// 1 - Opened
// 2 - Headers_recived
// 3 - Loading
// 4 - Done
