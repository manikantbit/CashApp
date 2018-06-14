//Profile (Profile Image, Name, Email, Phone Number, About Me, skills)

var express = require('express');
var router = express.Router();
//var mysql = require('mysql');
var fs = require("fs");
//database connection
var mongoose = require('mongoose');
//var kafka = require('../kafka/client');
var users=require('../models/users.js');
var user_details=require('../models/userdetails.js');
var db='mongodb://cashapp:cashapp@ds215380.mlab.com:15380/cashapp';
mongoose.Promise=global.Promise;
mongoose.connect(db,function(err)
{
  if(err)
  {
    console.log("Error" +err);
  }
  else{
    console.log("Connected to Mongodb");
  }
})

//get method to get all user details 
router.get('/userdetails',function(req,res)
{
  if(req.session.email)
 {
   console.log(req.session.email);
   console.log('User details request API called');
   user_details.findOne({'email_address':req.session.email})
   .exec(function(err,users)
  {
    if(err)
    {
      console.log("error in finding data from the users");
    }
    console.log(users);
    res.json(users);
   
});
  

  }
  else{
    res.json("Session not implemented");
 }
}
)
router.post('/updateprofile', function(req,res)
{

  console.log(req.body);
  console.log("Update Profile Details API called");
  var newusers=new user_details;
  newusers.email_address = req.session.email;
  newusers.Name= req.body.name;
  newusers.Phone_Number= req.body.phone;
  newusers.About_me=req.body.about_me;
  newusers.skills=req.body.skills;
  //var length=newusers.password.length;
  newusers.save(function(err, updateduser)
{
  if(err)
  {
    console.log("Data not updated");
     res.json("Updation unsuccessful");
  }
  else{
    console.log(updateduser);
    res.json("Updated successfuly");
    
  }
  
})
});

router.put('/updateprofile', function(req,res)
{
  console.log("Update Profile Details API called");
  var newusers1=new user_details;
  newusers1.email_address = req.session.email;
  newusers1.Name= req.body.name;
  newusers1.Phone_Number= req.body.phone;
  newusers1.About_me=req.body.about_me;
  newusers1.skills=req.body.skills;
  //var length=newusers.password.length;
  user_details.findOneAndUpdate(
    {'email_address':req.session.email},
    {
      $set:
      {Name:req.body.name,Phone_Number:req.body.phone,About_me:req.body.about_me,skills:req.body.skills
      }
    },
    
    {
      new:true
      },
    
    function(err, updateduser)
{
  if(err)
  {
    console.log("Data not updated");
     res.json("Updation unsuccessful");
  }
  else{
    console.log("Updated successfuly");
    res.json("Updated successfuly");
  }
  
})
});


router.get('/getprofileimage', function(req, res, next) {

  if(req.session.email){
  pool.getConnection(function(err,con) {
    if (err){
      console.log("no connection");    // connection checking
  }
  else{
    console.log("Connected boss!");
   
    con.query('Select profile_image from profile_image where email_address="shahakshat609@gmail.com"',
function (err, result,fields) {
  if (err) throw err;
  console.log("Executed");
  res.json(result);
  console.log(result);
  //console.log(result);
  
  console.log(result);
  
  
  con.release();
  console.log("Executed Successfully")
});
    
  }
  });
}
else{
var result="Login First";
res.json(result);

}
  
});

router.post('/postprofileimage', function(req,res)
{
  console.log("hi");
var email =req.param('email_address');
var image =req.param('image');
//var file=req.param('file');
   
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Axtshah14",
      database:"mydb"
      });

    
    con.connect(function(err) {
      if (err){
        console.log("no connection");    // connection checking
    }
    else{
      console.log("Connected boss!");
    }
    });
    var dog={
     email_address :email, 
     profile_image:fs.readFileSync(image)
    
    }
    
    con.query('INSERT INTO profile_image SET ?', dog,
  function (err, result,fields) {
    if (err) throw err;
    console.log("Executed");
    console.log(result);
    res.send("Posted successfully");
    
    
  });
});





module.exports = router;