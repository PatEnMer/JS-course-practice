function notify(text) {
	let title = document.title;
	let interval = setInterval(function() {
		if (document.title === title) {
			document.title = text + ' ' + document.title;
		} else {
			document.title = title;
		}
	}, 1000);

	return {
		interval: interval,
		title: title
	};
}

function stopNotify(notyfication) {
	clearInterval(notyfication.interval);
	document.title = notyfication.title;
}

let notyfication = notify('(1)');
