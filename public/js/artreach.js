'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//only goes back and forth once?
	$('#project-list').click(showWIPS);
	$('#project-button').click(goHome);
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
  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Project 1</h5><small>Me + Miranda</small></div></a>
  <a href="#" class="list-group-item list-group-item-action"><div class="d-flex justify-content-between"><h5>Project 1</h5><small>Me + 2 others</small></div></a>
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