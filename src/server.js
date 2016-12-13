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

var app = express();
app.use(cors());
var jsonParser = bodyParser.json();

passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3090/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

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




var port = process.env.port || 3090;
var server = http.createServer(app);
server.listen(port);
console.log('Server listening on ', port);
