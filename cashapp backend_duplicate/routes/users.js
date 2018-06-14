var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt');
const saltRounds = 5;
var axios = require('axios');
//const redis = require('redis');
//var cors = require('cors');
var mongoose = require('mongoose');
//require('./passport')(passport);
//var passport=require('passport');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

var users = require('../models/users.js');
var user_details = require('../models/userdetails.js');
var mongoSessionURL = 'mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';
var db = 'mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';
var gourlArr = ["http://52.53.246.181:3000", "http://54.153.111.222:3000", "http://54.153.99.181:3000", "http://54.183.179.172:3000", "http://52.53.126.123:3000"];
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.log("Error" + err);
    }
    else {
        console.log("Connected to Mongodb");
    }
});

//get method to get all user details 
router.get('/userdetails', function (req, res) {
        if (req.session.email) {
            console.log(req.session.email);
            console.log('User details request API called');
            user_details.findOne({'email_address': req.session.email})
                .exec(function (err, users) {
                    if (err) {
                        console.log("error in finding data from the users");
                    }
                    console.log(users);
                    res.json(users);
                })

        }
        else {
            res.json("Session not implemented");
        }
    }
);


//signup API
router.post('/signup', function (req, res) {
    console.log("Signup API called");

    let apiPayload = {
        Key: req.body.email_address,
        Value: {
            password: req.body.password,
            username: req.body.username,
            debitcard: req.body.debitcard,
            balance: 0

        }
    };
    console.log(apiPayload.Value);

    let regex1 = RegExp("[a-f]");
    let regex2 = RegExp("[g-l]");
    let regex3 = RegExp("[m-s]");
    let regex4 = RegExp("[t-z]");
    let testString = req.body.email_address.toString().toLowerCase()[0];
    let goApiToUse = "";

    if (regex1.test(testString)) {
        goApiToUse = gourlArr[1];
    } else if (regex2.test(testString)) {
        goApiToUse = gourlArr[2];
    } else if (regex3.test(testString)) {
        goApiToUse = gourlArr[3];
    } else if (regex4.test(testString)) {
        goApiToUse = gourlArr[4];
    } else {
        res.json("Signup Unsuccessful");
    }

    if (goApiToUse === "") {
        res.json("Signup Unsuccessful");
    }
    let GoUrl = "http://52.53.126.123:3000/redis_set";

    let clusterShardData = {
        Key: req.body.email_address,
        Value: {
            cluster: goApiToUse
        }
    };

    console.log("cluster where value is stored");
    console.log(clusterShardData.Value);

    axios.post(gourlArr[0] + "/redis_set", clusterShardData)
        .then((result) => {
            console.log("shard info hit, result: ");
            console.log(result.data);

            axios.post(goApiToUse + "/redis_set", apiPayload)
                .then((result) => {
                    console.log("Go API hit");
                    console.log(result.data);

                    res.json("Signup Successful");
                })
                .catch(err => {
                    console.log(err.Error);
                    res.json("Signup Unsuccessful");

                });
        });
});

//login API
router.post('/login', function (req, res) {
        console.log("Login API called");
        var newusers1 = new users;
        newusers1.email_address = req.body.email_address;

        newusers1.password = req.body.password;
        console.log(req.body.email_address);
        console.log(req.body.password);

        if (!req.body.email_address || !req.body.password) {
            console.log("Please fill out fields");
            res.json("Please fill out fields");
        }
        else {

            let apiPayload = {
                Key: req.body.email_address
            };
            let shardInfoGet = {
                Key: req.body.email_address
            };

            console.log(apiPayload);
            console.log(shardInfoGet);
            let GoUrl = "http://52.53.126.123:3000/redis_get";

            axios.post(gourlArr[0] + "/redis_get", shardInfoGet)
                .then((result) => {
                    console.log("shard info get: ");
                    console.log(result.data);

                    axios.post(result.data.Value.cluster + "/redis_get", apiPayload)
                        .then((result) => {
                            console.log("Go API hit");
                            console.log(result.data);

                            if (result.data.Value.password === req.body.password) {
                                req.session.email = req.body.email_address;
                                res.json("Login Successful");
                            } else {
                                res.json("Please enter correct credentials");
                            }

                        })
                        .catch(err => {
                            console.log(err.Error);
                            res.json("Login Unsuccessful");

                        });
                }).catch(err => {
                console.log(err.Error);
                res.json("Login Unsuccessful");
            });
        }

    }
);

router.post('/logout', function (req, res) {

    req.session.destroy();
    console.log('Session destroyed');
    res.json("Logged out successfully");


})


module.exports = router;