const mongoose = require('mongoose');
const customerSchema= mongoose.Schema({
    cname:String,
    lname:String,
    email:String, 
    address:String,
});

module.exports= mongoose.model("customer",customerSchema);