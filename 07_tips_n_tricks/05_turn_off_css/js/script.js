const redTheme = document.querySelector('#redTheme');
const button = document.querySelector('#disableTheme');

button.onclick = function() {
	// redTheme.setAttribute('disabled', 'disabled');
	redTheme.setAttribute('media', 'none');
};
