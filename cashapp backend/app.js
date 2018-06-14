var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');
const saltRounds = 5;

var mongoose = require('mongoose');

//var expressSession = require('express-session');
var session= require('express-session');
var mongoStore = require("connect-mongo")(session);
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//var passport1=require('./routes/passport');
var mongoURL = 'mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';

var mongo=require('mongodb');
var mongoSessionURL = 'mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';

var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var index = require('./routes/index');
var users = require('./routes/users');
//var post = require('./routes/post_project');
var debitcard=require('./routes/debitcard');
var profile = require('./routes/profile');
var bids = require('./routes/bids');
var account = require('./routes/account');

var app = express();
//app.use(cors());
app.use(cors(corsOptions))



// view engine setup
// all environments
//configure the sessions with our application
app.use(session({   
  cookieName: 'session', 
  resave:true ,  
	secret: 'cmpe273_test_string',    
	duration: 30 * 60 * 1000,    //setting the time for active session
  activeDuration: 5 * 60 * 1000,
  store:new mongoStore({
    url:mongoSessionURL

  })
 
 
    
}));
app.use(passport.initialize());
app.use(passport.session()); // setting time for the session to be active when the window is open // 5 minutes set currently

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(expressSession({secret :"cmpe273_test_string", saveUninitialized: true , resave : false}))


app.use('/', index);
app.use('/users', users);
//app.use('/post', post);
app.use('/debitcard',debitcard);
app.use('/bids',bids);
app.use('/profile', profile);
app.use('/account', account);

passport.serializeUser(function(users, done) {
  done(null, users.email_address);
});

passport.deserializeUser(function(id, done) {
  users.getUserById(id, function(err, users) {
    done(err, users);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


  


module.exports = app;
