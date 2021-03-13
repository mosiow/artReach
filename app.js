
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.login);
// Example route
// app.get('/users', user.list);
app.get('/project-home', index.projectHome);
app.get('/register', index.register);
app.get('/forgotPassword', index.forgotPassword);
app.get('/wip', index.wip);
app.post('/createProject', index.createProject); //make sure to use post!
app.get('/project1', index.chat);
app.get('/project2', index.chat2);
app.get('/project3', index.chat3);
app.get('/project4', index.chat4);
app.get('/project5', index.chat5);
app.get('/archive', index.archive);
app.get('/new', index.newProject);
app.get('/friends', index.friends);
app.post('/addFriend', index.addFriend);
app.get('/profile', index.friendProfile); //make it for you or friends?? idk
app.get('/notif', index.notifs);
app.post('/chatMessage', index.sendMessage);
app.post('/chatMessage2', index.sendMessage2);
app.post('/chatMessage3', index.sendMessage3);
app.post('/chatMessage4', index.sendMessage4);
app.post('/chatMessage5', index.sendMessage5);
app.post('/upload', index.sendUploadedFile);
app.post('/upload2', index.sendUploadedFile2);
app.post('/upload3', index.sendUploadedFile3);
app.post('/upload4', index.sendUploadedFile4);
app.post('/upload5', index.sendUploadedFile5);
app.post('/inviteFriend', index.inviteFriend);
app.post('/inviteFriend2', index.inviteFriend2);
app.post('/inviteFriend3', index.inviteFriend3);
app.post('/inviteFriend4', index.inviteFriend4);
app.post('/inviteFriend5', index.inviteFriend5);
app.get('/defaultTheme', index.defaultTheme);
app.get('/altTheme', index.altTheme);
app.get('/lightTheme', index.lightTheme);
app.get('/darkTheme', index.darkTheme);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
