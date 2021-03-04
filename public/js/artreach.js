'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	//starts on login page the first time
	$('#go-button').click(projectLogin);
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
	$('#go-button').click(projectLogin);
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
	$('#send-button').click(sendMessage);
	$('#invite-button').click(inviteFriend);

	//archive
	$('#archive-project').click(projectPage);

	//new project
	$('#make-new').click(createNew);
	//receiveProject();

	//friend list
	//$('#friend').click(friendPage); //page doesn't exist yet
	$('#friends-list a').hover(friendToggle,friendToggle); //select only 1 list item
	$('#search-button').click(addFriend);

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

function sendMessage(e)
{
	e.preventDefault();
	var chatMessage = $('#message').val();

	$.post('/chatMessage', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: chatMessage});
	$.get('/project1', loadPage);
}

function inviteFriend(e)
{
	e.preventDefault();
	var friendName = $('#invite-name').val();

	$.post('/inviteFriend', {
		name: friendName,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
	});
	$.get('/project1', loadPage);
}

function createNew(e)
{
	e.preventDefault();

	//set variables for values currently contained in form items
	var projectName = $('#project-name').val();
	var projectDesc = $('#project-description').val();

	$.post('/createProject', { 
		name: projectName,
		description: projectDesc });
	$.get('/wip', loadPage);
}

function friendList(e)
{
	e.preventDefault();
	$.get('/friends', loadPage);
}

function addFriend(e)
{
	e.preventDefault();
	var friendName = $('#friend-name').val();

	$.post('/addFriend', {
		name: friendName, 
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		description: "I hope you're ready to draw!" });
	$.get('/friends', loadPage);

}

function friendToggle()
{
	//find description in list item
	var desc = $(this).find("small");
	$(desc).toggle();
}

function viewNotif(e)
{
	e.preventDefault();
	$.get('/notif', loadPage);
}

function receiveProject()
{
	$('#projectForm').submit(function(e){
		e.preventDefault();
		var newProject = $('#newProject').val();
		$.post('createProject', { newProject: newProject}, postCallback);

	});

	function postCallback(res)
	{
		alert("It worked");
		$('#newProject').val('');
	}
}

function projectLogin(e){
	e.preventDefault();
	var email = $('#email').val();
	var password = $('#password').val();
	console.log(email + " " + password);

	var actualEmail = "cogs120student@ucsd.edu"
	var actualPassword = "readyfortesting1"


	if(actualEmail === email && actualPassword === password){
		console.log("SUCCESS");
		$.get('/project-home', loadPage);
	}else{
		console.log("FAILED LOGIN");
	}
	
}