
function checkIfUserHasEnteredANameThenDoStuff() {

	//if the user has already entered their name, and it is now in localStorage
	if (localStorage.getItem('name')) {
		
		//change input value to the new name so that it doesn't disappear.
		//otherwise the input field would go blank after the user presses enter.
		document.getElementById('nameform').value = localStorage.getItem('name');
		
		//reveals the welcome message
		document.getElementById('welcome').style.display = 'block';
		
		//for each element with the id 'name', change inner html to user's chosen name
		var nameFields = document.getElementsByClassName('name');
		for (var i = 0; i < nameFields.length; i++) {
			nameFields[i].innerHTML = localStorage.getItem('name');
		}
	}
	else {
		//don't show the welcome message until user enters a name
		document.getElementById('welcome').style.display = 'none';
	}
}

checkIfUserHasEnteredANameThenDoStuff();

function populateStorageWithName() {
	localStorage.setItem('name', document.getElementById('nameform').value);
}

//when the user enters a name, put that name in localStorage
document.getElementById('nameform').onchange = populateStorageWithName;