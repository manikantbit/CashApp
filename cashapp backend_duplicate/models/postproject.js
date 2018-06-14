var mongoose= require('mongoose');

var Schema=mongoose.Schema

var projectSchema =new Schema({
    proj_name:{
        type :String,
        required:true,
        unique:true
    },
    proj_details:String,
    skill1:String,
    skill2:String,
    skill3:String,
    pay:String,
    upper:{
        type:Number,
        required:true
    },
    lower:{
        type:Number,
        required:true
    },
    email_address:{
        type:String,
        required:true
    },
    status:String
    });

    module.exports =mongoose.model('proj',projectSchema,'projectpost');


