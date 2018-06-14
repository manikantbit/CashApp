var passport1 = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoURL = 'mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';
//var kafka = require('./kafka/client');

module.exports = function(passport) {
    console.log("Entered passport");
    passport1.use('login', new LocalStrategy(function(username, password, done) {
        console.log('in passport');
        users.getUserByEmail(req.body.email_address,function(err,user)
    {
        if(err) throw err;
        if(!user){
            return done(null,false);

        }
        users.comparePassword(req.body.password,users.password,function(err,isMatch){
            if(err) throw err;
            if(isMatch)
        {
            return done(null,user);
        }
        else{
            return done(null,false);
        }
        })
    })

    }));
};


