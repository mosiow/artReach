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
	data['forgotPassword'] = false;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
	data['archive'] = false;
	data['new-project'] = false;
	data['friends'] = false;
	data['friend-profile'] = false;
	data['notifs'] = false;
	response.render('index', data)
}

exports.forgotPassword = function(request, response){
	data['login'] = false;
	data['register'] = false;
	data['forgotPassword'] = true;
	data['project-home'] = false;
	data['wip-projects'] = false;
	data['project-chat'] = false;
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
	newProject = {
		name: "Project 1",
		description: "this project is a test",
		people: "Me",
		date: "March 3 2021"
	};
	console.log(newProject);
	data.projects.push(newProject);
	response.send(newProject);
 }

exports.addFriend = function(request, response) {
	newFriend = {
		name: "design-fan22",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		description: "I hope you're ready to draw!"
	};
	console.log(newFriend);
	data.friendList.push(newFriend);
	response.render('index', data);
}

exports.sendMessage = function(request, response) {
	newMessage = {
		name: "cogs120student",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308111795388442/Seo_Smile.png",
		content: "Hello! This is a test of the chat message feature. We will be expanding upon this soon!"
	};
	console.log(newMessage);
	data.projectMessages.push(newMessage);
	response.render('index', data);
}

exports.inviteFriend = function(request, response) {
	newInvite = {
		name: "design-fan22",
		thumbnail: "https://media.discordapp.net/attachments/570802038422765572/665308113133633537/Blitz_Smug.png",
		content: "design-fan22 has entered the project."
	};
	data.projectMessages.push(newInvite);
	response.render('index', data);
}