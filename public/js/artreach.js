'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//starts on login page the first time
	$('#go-button').click(projectHome);
	$('#signup-button').click(register);
	$('#forgot-button').click(forgotPassword);



	//NOTE!! If you use a link to go directly to a page,
	//		 it won't load the click listeners

	/*
	//click listeners for starting on project home
	//uncomment if using /project-home to skip login
	$('#project-list').click(wip);
	$('#archive-list').click(archive);

	$('#project-button').click(projectHome);
	$('#new-button').click(newProject);
	$('#friend-button').click(friendList);
	*/
}

function loadPage(result)
{
	//ajax load for next page
	//used in every page!!

	//needs to load main content
	//and bottom bar status too so... nearly the whole page
	$("html").html(result);


	//PUT ALL CLICK LISTENERS HERE

	//top bar
	$('#profile-function').hide(); //start hidden
	//first function is on hover, second is off hover
	$('#profile').hover(profileToggle, profileToggle);
	$('#your-profile').click(profilePage);
	$('#default-square').click(defaultTheme);
	$('#alt-square').click(altTheme);
	$('#light-square').click(lightTheme);
	$('#dark-square').click(darkTheme);

	//bottom bar
	$('#project-button').click(projectHome);
	$('#new-button').click(newProject);
	$('#friend-button').click(friendList);

	//register
	$('#signup-button').click(register);


	//forogtPassword
	$('#forgot-button').click(forgotPassword);

	//return to login screen
	$('#return-home').click(loginPage);


	//project-home
	$('#project-list').click(wip);
	$('#archive-list').click(archive);

	//wip
	$('#new-project-button').click(newProject);
	$('#project').click(projectPage);

	//project page
	//NEED A WAY TO DIFFERENTIATE WIP AND ARCHIVE PAGES
	$('#chat-back-button').click(wip);
	$('#send-button').click(projectPage);

	//archive
	$('#archive-project').click(projectPage);

	//new project
	$('#make-new').click(wip);

	//friend list
	//$('#friend').click(friendPage); //page doesn't exist yet
	$('#friend').hover(friendToggle,friendToggle);

	//notif
	$('#notif-button').click(viewNotif);
}

function profileToggle()
{
	$('#profile-function').toggle();
}

function profilePage(e)
{
	e.preventDefault(e);
	$.get('/profile', loadPage);
}

function defaultTheme(e)
{
	e.preventDefault(e);
	$.get('/defaultTheme', loadPage);
}

function altTheme(e)
{
	e.preventDefault(e);
	$.get('/altTheme', loadPage);
}

function lightTheme(e)
{
	e.preventDefault(e);
	$.get('/lightTheme', loadPage);
}

function darkTheme(e)
{
	e.preventDefault(e);
	$.get('/darkTheme', loadPage);
}

function loginPage(e)
{
	e.preventDefault(e);
	$.get('/', loadPage);
}

function forgotPassword(e)
{
	e.preventDefault(e);
	$.get('/forgotPassword', loadPage);
}

function register(e)
{
	e.preventDefault(e);
	$.get('/register', loadPage);
	console.log('hello im working!');
}

function projectHome(e)
{
	e.preventDefault(e);
	$.get('/project-home', loadPage);
}

function wip(e)
{
	e.preventDefault(e);
	$.get('/wip', loadPage);
}

function projectPage(e)
{
	e.preventDefault(e);
	$.get('/project1', loadPage);
}

function archive(e)
{
	e.preventDefault(e);
	$.get('/archive', loadPage);
}

function newProject(e)
{
	e.preventDefault();
	$.get('/new', loadPage);
}

/*
function createNew(e)
{
	//submit handler??
	e.preventDefault();
	wip();
}*/

function friendList(e)
{
	e.preventDefault();
	$.get('/friends', loadPage);
}

function friendToggle()
{
	//only works on first list item??
	//help me with selectors plz
	$('#friend-desc').toggle();
}

function viewNotif(e)
{
	e.preventDefault();
	$.get('/notif', loadPage);
}