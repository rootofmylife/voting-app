'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var morgan = require("morgan");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);
dotenv.config({verbose: true});

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));


routes(app, passport);

app.get('*', function(req, res, err){
	if(err){
		console.log(err);
	}
	//https://github.com/Mozar10/voteR
	res.sendFile(__dirname + '/public/loginpoll.html');
	//mongod --smallfiles
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
