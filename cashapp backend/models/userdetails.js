var mongoose = require('mongoose');

var Schema =mongoose.Schema;

//user schema has been created.. Blueprint of the table.
var userdetailsSchema = new Schema({
email_address:{
    type :String,
    required:true,
    unique:true
},
Name:String,
Phone_Number:Number,
About_me:String,
skills:String
});

//first arg:name of the model
//second arg: schema used
//third arg: collections to which schema has to be applied
module.exports =mongoose.model('user_details',userdetailsSchema,'user_details');