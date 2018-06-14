var mongoose= require('mongoose');

var Schema=mongoose.Schema

var addMoneySchema =new Schema({
    
   email_address:{
        type :String,
        required:true
    },
    
    Amount:{
        type:Number,
        required:true
    }
})
   

    module.exports =mongoose.model('addmoney',addMoneySchema,'AddMoney');


