var GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
var CLIENT_ID  = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var User = require('./user');

var app = express();
app.use(cors());
var jsonParser = bodyParser.json();

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3090/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ googleId: profile.id }, function (err, user) {
		if (!err) {
			if (!user) {
				user = new User()
				user.googleId = profile.id
			}
			user.save(function(err) {
				if (!err) {
					console.log('user created')
				}
			}).then(function() {
				return cb(err, user);
			})
		}
    });
  }
));

passport.serializeUser(function(user, done) {
	done(null, user)
})

passport.deserializeUser(function(user, done) {
	done(null, user);
})

app.use(passport.initialize());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


app.get('/', function(req, res) {
	res.send('hello');
})

var databaseURI = 'mongodb://ewok:ewok@ds133368.mlab.com:33368/ewokese';
mongoose.connect(databaseURI).then(function() {
	var port = process.env.port || 3090;
	var server = http.createServer(app);
	server.listen(port);
	console.log('Server listening on ', port);
}).catch(function(error) {
	console.log('Server error: ', error);
})


