const myStorage = window.localStorage;

localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');
localStorage.removeItem('myCat');

localStorage.clear(); //clear if player restarts the game

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (!storageAvailable('localStorage')) {
	alert('localStorage not available; game will not work properly. '
		+ 'You might be in a private or incognito browsing mode, or your browser does not support localStorage.');
}

document.getElementById('adventurersname').innerHTML = 'still not yet';

if (!localStorage.getItem('name')) {
	localStorage.setItem('name', document.getElementById('name').value);
	alert('if');
}
else {
	name = localStorage.getItem('name');
	document.getElementById('adventurersname').innerHTML = name;
	alert('else');
}