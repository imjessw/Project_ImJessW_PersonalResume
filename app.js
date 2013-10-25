
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
	user: "imjessw@gmail.com",
	password: "jlwaite2013",
	host: "smtp.gmail.com",
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
	server.send({
		text: "Hello", // this will become my input
		from: "Jess <imjessw@gmail.com>",
		to: "Jess <imjessw@gmail.com>",
		subject: "I\'m jessw"
	}, function(err, message){
		console.log(err);
		console.log(message);
	})
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
