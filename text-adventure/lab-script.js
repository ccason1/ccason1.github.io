
if (!localStorage.getItem('visited')) {
	var visited = document.getElementsByClassName('visited');
	for (var i = 0; i < visited.length; i++) {
		visited[i].style.display = 'none';
	}
	
	var notyetvisited = document.getElementsByClassName('notyetvisited');
	for (var i = 0; i < notyetvisited.length; i++) {
		notyetvisited[i].style.display = 'block';
	}
}