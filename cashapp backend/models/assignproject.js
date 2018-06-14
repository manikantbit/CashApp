var mongoose= require('mongoose');

var Schema=mongoose.Schema

var assignProjectSchema =new Schema({
    proj_id:{
        type :String,
        required:true,
        unique:true
    },
    proj_name:{
        type :String,
        required:true,

    },
   employer:{
        type :String,
        required:true
    },
    freelancer:{
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
    }
    });

    module.exports =mongoose.model('assignproject',assignProjectSchema,'assignProject');


