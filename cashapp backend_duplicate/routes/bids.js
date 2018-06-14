var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var users= require('./users.js');
const nodemailer = require('nodemailer');
//database connection
var mongoose = require('mongoose');
var assignproject=require('../models/assignproject.js')
var bid1=require('../models/bid.js')

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

router.get('/', function(req, res, next) {
    res.send('willing to post a bid on the project');
  });


  //Project Bid API called  
  router.post('/projectbid',function(req,res)
{
 
  console.log("Post bid API called");
   console.log(req.body);
  var newbid=new bid1();
  newbid.proj_id=req.body.id;
  newbid.email_address=req.session.email;
  //newbid.proj_name=req.body.proj_name;
  newbid.bid_amt=req.body.bid_amt;
  newbid.bid_days=req.body.bid_days;
  
  //var upper=req.body.upper;
  //var lower=req.body.lower;

    newbid.save(function(err, insertedbid)
{
  if(err)
  {
    var result="Bid post failed";
    res.json(result);
    console.log(result);
    console.log(err);
  }
  else
  {
    
     var result="Bid posted successfully";
    res.json("Bid posted successfully");
    console.log(result);
  }
})
});

  //Retreive open projects API
  router.post('/getBidData',function(req,res)
  {
    console.log('Retreive Bid Data on particular project request API called');
    console.log(req.body);
    console.log(req.body.id);
  
   if(req.session.email)
   {
  
    
     console.log(req.session.email);
     newbid=new bid1();
    //newproj.email_address=req.body.email_address;
     console.log(newproj.email_address);
  
    
    bid1.find({'proj_id':req.body.id})
    .exec(function(err,proj)
  {
    if(err)
    {
      console.log("error in finding data from the bids collection");
    }
    console.log(proj);
      res.json(proj);
  })
   }
  
  else
  {
  res.json("Login First");
  }
  });


  //Test Retreive open projects API
  router.get('/getbids',function(req,res)
  {
    console.log('Retreive Bid Data on particular project request API called');
    console.log(req.body);
    console.log(req.body.id);
  
   
   
  
    
     console.log(req.session.email);
     newbid=new bid1();
    //newproj.email_address=req.body.email_address;
     //console.log(newproj.email_address);
  
    
    bid1.find({'email_address':req.session.email})
    .exec(function(err,proj)
  {
    if(err)
    {
      console.log("error in finding data from the bids collection");
    }
    console.log(proj);
      res.json(proj);
  })
   });

//Assign project API
router.post('/assignproject',function(req,res)
{
    console.log('Assign project API');

 if(req.session.email)
 {
    console.log(req.body);
    
    
    
   console.log(req.session.email);
   assignproject1=new assignproject();
   assignproject1.proj_id=req.body.id;
   assignproject1.proj_name=req.body.proj_name;
   //assignproject.proj_name=req.body.proj_name;
   assignproject1.employer=req.session.email;
   assignproject1.freelancer=req.body.email;
   assignproject1.bid_amt=req.body.bid_amt;
   assignproject1.bid_days=req.body.bid_days;
  //newproj.email_address=req.body.email_address;
   //console.log(newproj.email_address);

  
   assignproject1.save(function(err, insertedbid)
   {
     if(err)
     {
       var result="Bid post failed";
       res.json(result);
       console.log(result);
       console.log(err);
     }
     else
     {
      nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          service:'gmail',
          auth: {
              user: req.session.email,
              pass: '9920440046'
          }
      });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: req.session.email, // sender address
            to: req.body.email, // list of receivers
            subject: 'Hired Freelancer', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>I am happy to say you that you have been hired by </b> '+req.session.email+" <b> and would look to work with you to create great solution.</br>Contact me anytime for any clarification required on the project details.</br</br></br>Thanks,</br>"+req.session.email+"</b>" // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
    console.log("Email sent");
       console.log(insertedbid);
        var result="Bid posted successfully";
       res.json(insertedbid);
       console.log(result);
     }
   })
 }
else
{
res.json("Login First");
}
});



module.exports = router; 