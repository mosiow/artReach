var data = require('../data.json');

exports.view = function(req, res){
  res.render('index');
}

exports.login = function(request, response){
	data['login'] = true;
	data['logged-in'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.register = function(request, response){
	data['login'] = false;
	data['register'] = true;
	response.render('index', data)
}

exports.forgotPassword = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = true;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}	

exports.projectHome = function(request, response){
	data['login'] = false;
	data['logged-in'] = true;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = true;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.wip = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = true;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.chat = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = true;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.chat2 = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = true;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.chat3 = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = true;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.chat4 = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = true;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.chat5 = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = true;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.archive = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = true;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.newProject = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = true;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.friends = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = true;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.friendProfile = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = true;
	data['notifs'] = false;
	response.render('index', data)
}

exports.notifs = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['project-chat2'] = false;
	data['project-chat3'] = false;
	data['project-chat4'] = false;
	data['project-chat5'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = true;
	response.render('index', data)
}



exports.defaultTheme = function(request, response){
	data['default-theme'] = true;
	data['alt-theme'] = false;
	data['light-theme'] = false;
	data['dark-theme'] = false;
	response.render('index', data)
}

exports.altTheme = function(request, response){
	data['default-theme'] = false;
	data['alt-theme'] = true;
	data['light-theme'] = false;
	data['dark-theme'] = false;
	response.render('index', data)
}

exports.lightTheme = function(request, response){
	data['default-theme'] = false;
	data['alt-theme'] = false;
	data['light-theme'] = true;
	data['dark-theme'] = false;
	response.render('index', data)
}

exports.darkTheme = function(request, response){
	data['default-theme'] = false;
	data['alt-theme'] = false;
	data['light-theme'] = false;
	data['dark-theme'] = true;
	response.render('index', data)
}


exports.createProject = function(request, response) { 
	// to fill in things from post in artreach.js,
	// use request.body.varName  
	var today = new Date();
	var createDate = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
	var createID = "project" + (data.projects.length + 1);
	console.log(createID);
	var notif = "You created a new project titled " + request.body.name;

	newProject = {
		name: request.body.name,
		description: request.body.description,
		people: ["Me"],
		date: createDate,
		ID: createID
	};
	newNotif = {
		title: "Project Created!",
		content: notif
	};
	data.projects.push(newProject);
	data.notifList.push(newNotif);
 }

exports.addFriend = function(request, response) {
	var notifFriend = request.body.name + " has been added as a friend!";
	newFriend = {
		name: request.body.name,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		description: "I hope you're ready to draw!"
	};
	newNotif = {
		title: "Friend added!",
		content: notifFriend
	};
	console.log(newFriend);
	data.friendList.push(newFriend);
	data.notifList.push(newNotif);
}

exports.sendUploadedFile = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		upload: request.body.imageContent
	};
	console.log(newMessage);
	data.projectMessages.push(newMessage);
}

exports.sendUploadedFile2 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		upload: request.body.imageContent
	};
	console.log(newMessage);
	data.projectMessages2.push(newMessage);
}

exports.sendUploadedFile3 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		upload: request.body.imageContent
	};
	console.log(newMessage);
	data.projectMessages3.push(newMessage);
}

exports.sendUploadedFile4 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		upload: request.body.imageContent
	};
	console.log(newMessage);
	data.projectMessages4.push(newMessage);
}

exports.sendUploadedFile5 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		upload: request.body.imageContent
	};
	console.log(newMessage);
	data.projectMessages5.push(newMessage);
}

exports.sendMessage = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: request.body.content
	};
	console.log(newMessage);
	data.projectMessages.push(newMessage);
}

exports.sendMessage2 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: request.body.content
	};
	console.log(newMessage);
	data.projectMessages2.push(newMessage);
}

exports.sendMessage3 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: request.body.content
	};
	console.log(newMessage);
	data.projectMessages3.push(newMessage);
}

exports.sendMessage4 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: request.body.content
	};
	console.log(newMessage);
	data.projectMessages4.push(newMessage);
}

exports.sendMessage5 = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: request.body.content
	};
	console.log(newMessage);
	data.projectMessages5.push(newMessage);
}

exports.inviteFriend = function(request, response) {
	newInvite = {
		name: request.body.name,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		content: request.body.name + " has entered the project."
	};
	data.projectMessages.push(newInvite);
}

exports.inviteFriend2 = function(request, response) {
	newInvite = {
		name: request.body.name,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		content: request.body.name + " has entered the project."
	};
	data.projectMessages2.push(newInvite);
}

exports.inviteFriend3 = function(request, response) {
	newInvite = {
		name: request.body.name,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		content: request.body.name + " has entered the project."
	};
	data.projectMessages3.push(newInvite);
}

exports.inviteFriend4 = function(request, response) {
	newInvite = {
		name: request.body.name,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		content: request.body.name + " has entered the project."
	};
	data.projectMessages4.push(newInvite);
}

exports.inviteFriend5 = function(request, response) {
	newInvite = {
		name: request.body.name,
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		content: request.body.name + " has entered the project."
	};
	data.projectMessages5.push(newInvite);
}