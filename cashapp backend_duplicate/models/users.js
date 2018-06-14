var mongoose = require('mongoose');
var bcrypt=require('bcryptjs');

var Schema =mongoose.Schema;

//user schema has been created.. Blueprint of the table.
var userSchema = new Schema({
email_address:{
    type :String,
    required:true,
    unique:true
},
username:String,
password:String,
debitcard:String
});

//first arg:name of the model
//second arg: schema used
//third arg: collections to which schema has to be applied
var users=module.exports =mongoose.model('users',userSchema,'users');

module.exports.createUser=(users,callback)=>{
    console.log("CreateUser method entered");
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(users.password, salt, function(err, hash) {
            users.password=hash;
            users.save(callback); 
        });
    });

}

module.exports.getUserByEmail=function(username,callback){
    console.log("In getUserByEmail method");
    console.log(username);
    
    var query={'email_address':username};
    
    console.log(query);
    //console.log(users.findOne(query));
    //console.log(users);
    var result=users.findOne(query)
    .exec(function(err,users)
{
  if(err)
  {
    console.log("error in finding data from the users");
    res.json("Please enter correct credentials");
  }
  
  else if(users.password===req.body.password)
  {
    console.log(users);
    console.log("Login Successful")
    req.session.email=newusers1.email_address;
    res.json("Login Successful");
   
    console.log(req.session.email);
  }
  
})
}
        
    
   

module.exports.comparePassword=function(password,hash,callback){
    bcrypt.compare(password,hash,function(err,isMatch)
{
    if(err) throw err;
    callback(null,isMatch);
})
    
}

module.exports.getUserById=function(id,callback){
    //var query={username:req.body.email_address};
    users.findById(id,callback);

}