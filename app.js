
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var email= require ('emailjs/email');
var server= email.server.connect({
	user: "app19024585@heroku.com",
	password: "wpecniz9",
	host: "smtp.sendgrid.net",
	ssl: true

})


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/sendEmail', function(req, res){
	var appData=req.body;
	console.log(appData)
	console.log(appData.first+" "+ appData.lastName+" "+ appData.email+" "+appData.message);
	res.send("hello")
	
	server.send({
		text: appData.first+" "+ appData.lastName+" "+ appData.email+" "+appData.message, // this will become my input
		from: "Jess <app19024585@heroku.com>",
		to: "Jess <imjessw@gmail.com>",
		subject: "I\'m JessW Site Intro"
	}, function(err, message){
		console.log(err);
		console.log(message);
	})

})

	// first:appData.first
	// last:appData.lastName
	// email:appData.email
	// message:appData.message



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
