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
	$('#project1').click(projectPage1);
	$('#project2').click(projectPage2);
	$('#project3').click(projectPage3);
	$('#project4').click(projectPage4);
	$('#project5').click(projectPage5);

	//each project page
	//NEED A WAY TO DIFFERENTIATE WIP AND ARCHIVE PAGES
	$('#chat-back-button').click(wip);

	$('#send-button').click(sendMessage);
	$('#invite-button').click(inviteFriend);
	$('#upload-button').click(sendUploadedFile);

	$('#send-button2').click(sendMessage2);
	$('#invite-button2').click(inviteFriend2);
	$('#upload-button2').click(sendUploadedFile2);

	$('#send-button3').click(sendMessage3);
	$('#invite-button3').click(inviteFriend3);
	$('#upload-button3').click(sendUploadedFile3);

	$('#send-button4').click(sendMessage4);
	$('#invite-button4').click(inviteFriend4);
	$('#upload-button4').click(sendUploadedFile4);

	$('#send-button5').click(sendMessage5);
	$('#invite-button5').click(inviteFriend5);
	$('#upload-button5').click(sendUploadedFile5);


	//archive
	//$('#archive-project').click(projectPage1);

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

function projectPage1(e)
{
	e.preventDefault(e);
	$.get('/project1', loadPage);
}

function projectPage2(e)
{
	e.preventDefault(e);
	$.get('/project2', loadPage);
}

function projectPage3(e)
{
	e.preventDefault(e);
	$.get('/project3', loadPage);
}

function projectPage4(e)
{
	e.preventDefault(e);
	$.get('/project4', loadPage);
}

function projectPage5(e)
{
	e.preventDefault(e);
	$.get('/project5', loadPage);
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

function sendUploadedFile(e)
{
	e.preventDefault();
	var file = $('#file-contents').val();

	$.post('/upload', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		imageContent: file});
	$.get('/project1', loadPage);
}

function sendUploadedFile2(e)
{
	e.preventDefault();
	var file = $('#file-contents2').val();

	$.post('/upload2', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		imageContent: file});
	$.get('/project2', loadPage);
}

function sendUploadedFile3(e)
{
	e.preventDefault();
	var file = $('#file-contents3').val();

	$.post('/upload3', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		imageContent: file});
	$.get('/project3', loadPage);
}

function sendUploadedFile4(e)
{
	e.preventDefault();
	var file = $('#file-contents4').val();

	$.post('/upload4', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		imageContent: file});
	$.get('/project4', loadPage);
}

function sendUploadedFile5(e)
{
	e.preventDefault();
	var file = $('#file-contents5').val();

	$.post('/upload5', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		imageContent: file});
	$.get('/project5', loadPage);
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

function sendMessage2(e)
{
	e.preventDefault();
	var chatMessage = $('#message2').val();

	$.post('/chatMessage2', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: chatMessage});
	$.get('/project2', loadPage);
}

function sendMessage3(e)
{
	e.preventDefault();
	var chatMessage = $('#message3').val();

	$.post('/chatMessage3', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: chatMessage});
	$.get('/project3', loadPage);
}

function sendMessage4(e)
{
	e.preventDefault();
	var chatMessage = $('#message4').val();

	$.post('/chatMessage4', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: chatMessage});
	$.get('/project4', loadPage);
}

function sendMessage5(e)
{
	e.preventDefault();
	var chatMessage = $('#message5').val();

	$.post('/chatMessage5', {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: chatMessage});
	$.get('/project5', loadPage);
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

function inviteFriend2(e)
{
	e.preventDefault();
	var friendName = $('#invite-name2').val();

	$.post('/inviteFriend2', {
		name: friendName,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
	});
	$.get('/project2', loadPage);
}

function inviteFriend3(e)
{
	e.preventDefault();
	var friendName = $('#invite-name3').val();

	$.post('/inviteFriend3', {
		name: friendName,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
	});
	$.get('/project3', loadPage);
}

function inviteFriend4(e)
{
	e.preventDefault();
	var friendName = $('#invite-name4').val();

	$.post('/inviteFriend4', {
		name: friendName,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
	});
	$.get('/project4', loadPage);
}

function inviteFriend5(e)
{
	e.preventDefault();
	var friendName = $('#invite-name5').val();

	$.post('/inviteFriend5', {
		name: friendName,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
	});
	$.get('/project5', loadPage);
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