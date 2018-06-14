var mongoose= require('mongoose');

var Schema=mongoose.Schema

var bidSchema =new Schema({
    proj_id:{
        type :String,
        required:true
    },
    bid_amt:{
        type:Number,
        required:true
    },
    bid_days:{
        type:Number,
        required:true
    },
    email_address:{
        type:String,
        required:true
    }
    
    });

    module.exports =mongoose.model('bid1',bidSchema,'bid');


