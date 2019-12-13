const xhr = new XMLHttpRequest();

const data = new FormData();

xhr.open('POST', 'odbierz.php', true);

xhr.onreadystatechange = function(e) {
	if (this.readyState === 4 && this.status === 200) {
		console.log(this.response);
	}
};

data.append('firstName', 'Pikuś');
data.append('lastName', 'Pikusiński');

// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(data);
