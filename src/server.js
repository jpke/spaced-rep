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
app.use(express.static( '../build'));
var jsonParser = bodyParser.json();

// passport.use(new GoogleStrategy({
//     clientID: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     callbackURL: "http://localhost:3090/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//   	console.log('accessToken & refreshToken:::', accessToken, refreshToken)
//     User.findOne({ googleId: profile.id }, function (err, user) {
// 		if (!err) {
// 			if (!user) {
// 				user = new User()
// 				user.googleId = profile.id
// 			}
// 			user.save(function(err) {
// 				if (!err) {
// 					console.log('user created')
// 				}
// 			}).then(function() {
// 				return cb(err, user);
// 			})
// 		}
//     });
//   }
// ));

passport.serializeUser(function(user, done) {
	done(null, user)
})

passport.deserializeUser(function(user, done) {
	done(null, user);
})

passport.use(new Strategy(
  function(token, done) {
  	console.log('TOKEN:::', token)
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }
));

app.use(passport.initialize());

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//   	// var url = 'https://www.googleapis.com/oauth2/v4/token?code=' + req.queryStringParameters.code +;
//   	// this.get('')
//   	console.log('GET RESPONSE:::', req.query)
//     // Successful authentication, redirect home.
//     //res.redirect('/');
//     res.status(200).json('hello world')
//   });




app.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
	res.send('hello');
})



var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'http://localhost:3090/auth/google/callback'
);

app.get('/auth/google', function(req, res) {
	var url = oauth2Client.generateAuthUrl({
	  // If you only need one scope you can pass it as string
	  scope: 'profile'
	});
	res.redirect(url);
});

app.get('/auth/google/callback', function(req, res) {
	oauth2Client.getToken(req.query.code, function (err, tokens) {
	  // Now tokens contains an access_token and an optional refresh_token. Save them.
	  	if (!err) {
		  	console.log('TOKENS:::', tokens)
		    //oauth2Client.setCredentials(tokens);
  		}
  		res.cookie("hello", "world").redirect("/");
	});
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


