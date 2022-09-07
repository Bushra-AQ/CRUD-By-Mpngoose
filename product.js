const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    pname:String,
    price :Number,
    Description:String,
    qty:Number
});

module.exports= mongoose.model("product",productSchema);