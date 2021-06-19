

if (localStorage.getItem('name')) {
	setAdventurersname();
}

function setAdventurersname() {
	document.getElementById('nameform').value = localStorage.getItem('name');
	document.getElementById('adventurersname').innerHTML = localStorage.getItem('name');
}

function populateStorage() {
	localStorage.setItem('name', document.getElementById('nameform').value);
	setAdventurersname();
}

document.getElementById('nameform').onchange = populateStorage;

document.getElementsByClassName('name').innerHTML = localStorage.getItem('name');