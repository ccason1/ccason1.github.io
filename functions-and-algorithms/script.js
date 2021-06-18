window.onload = function(){ 
	const btn = document.querySelector('#user-selection-btn');
	const sb = document.querySelector('#user-selection')
	btn.onclick = (event) => {
		event.preventDefault();
		document.getElementById('val-1').innerHTML = sb.value + " " + "&#8594;";
		document.getElementById('val-2').innerHTML = "&#8594;" + " " + (parseInt(sb.value) * 2 + 1).toString();
	}; 
};