const xhr = new XMLHttpRequest();
const data = new FormData();
const dProgress = document.querySelector('#download');
const uProgress = document.querySelector('#upload');

xhr.open('POST', 'odbierz.php', true);

xhr.onreadystatechange = function(e) {
	if (this.readyState === 4 && this.status === 200) {
		console.log(this.response);
	}
};

xhr.onprogress = function(e) {
	// console.log(e);

	if (e.lengthComputable) {
		let percent = e.loaded / e.total * 100;
		// console.log(percent);
		dProgress.value = percent;
	}
};

xhr.upload.onprogress = function(e) {
	if (e.lengthComputable) {
		let percent = e.loaded / e.total * 100;
		uProgress.value = percent;
	}
};

data.append('firstName', 'Pikuś');
data.append('lastName', 'Pikusiński');

// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(data);
