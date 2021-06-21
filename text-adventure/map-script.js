
function areYouSureText() {
	var areyousure = document.getElementsByClassName('areyousure');
	for (var i = 0; i < areyousure.length; i++) {
		areyousure[i].style.display = 'block';
	}
}

function clearLocalStorage() {
	localStorage.clear();
}