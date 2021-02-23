'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//only goes back and forth once?
	//$('#project-list').click(showWIPS);
	//$('#project-button').click(goHome);
	//$('#new-button').click(createProject);
	//$('#friend-button').click(listFriends);
	//$('#notif-button').click(listNotifications);
	//$('#archive-list').click(showArchivedProjects);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function showWIPS(e) {
	e.preventDefault();

	//this line hides the button all together :"D
	//$('#project-button').toggle();


	// ` marks make it all one string
	$('#main-content').html(`<h2>Work In Progress</h2>
  <ul class="list-group">
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark"><h5>+ New project</h5></a>
  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Project 1</h5><small>Me + Arshay</small></div></a>
  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Project 2</h5><small>Me + Miranda</small></div></a>
  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Project 3</h5><small>Me + 2 others</small></div></a>
  </ul>`);

	//actually getting info from url to be implemented later
	//$.get("http://localhost:3000/wip", callback);
}

//to be implemented later
function callback(result){
	
	$('#main-content').html(result);
	console.log(result);
}

function goHome(e)
{
	e.preventDefault();
	$('#main-content').html(`<h1>ArtReach</h1>
		<div class="container d-flex align-content-center flex-wrap">
			<div class="btn-group-lg" id="landing-buttons">
				<button id="project-list" type="button" class="btn btn-outline-dark btn-block">Project List</button>
				<button id="archive-list" type="button" class="btn btn-outline-dark btn-block">Archived Projects</button>
			</div>
		</div>`);
}

function createProject(e)
{
	e.preventDefault();
	$('#main-content').html(`<h1>Create a New Project</h1> 
		<form action="/action_page.php">
		 	<input type="text" id="mytextbox" value="Enter your project name" />
		 	<input type="text" id="mytextbox" value="Enter your project description" />
  			<input type="submit">
		</form>`);
	var test = document.getElementById("mytextbox");
	alert(textbox.value)
}

function listFriends(e)
{
	e.preventDefault();
	$('#main-content').html(`<h1>Friends list</h1> 
		<ul class="list-group">
	  	<li class="list-group-item">user3483 <span class="badge">X</span></li>
	  	<li class="list-group-item">iloveart42 <span class="badge">X</span></li>
	  	<li class="list-group-item">designexpert57 <span class="badge">X</span></li>
		</ul>
		<form action="/action_page.php">
		 	<input type="text" id="mytextbox" value="Search for a friend's ID" />
  			<input type="submit">
		</form>`);


}

function listNotifications(e)
{
	e.preventDefault();
	$('#main-content').html(`<h1>Friends list</h1> 
		<li class="list-group-item">You have no notifications <span class="badge">X</span></li>`);

}

function showArchivedProjects(e)
{
	e.preventDefault();
	$('#main-content').html(`<h2>Archived</h2>
	  <ul class="list-group">
	  <a href="#" class="list-group-item list-group-item-action list-group-item-dark"><h5>+ Projects</h5></a>
	  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Old Project 1</h5><small>Archived on 2/15/21 Me + Arshay</small></div></a>
	  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Old Project 2</h5><small>Archived on 2/16/21 Me + Miranda</small></div></a>
	  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Old Project 3</h5><small>Archived on 2/17/21 Me + 2 others</small></div></a>
	  </ul>`);


}