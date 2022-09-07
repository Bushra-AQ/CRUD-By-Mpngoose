const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const orderSchema= mongoose.Schema({


customer : {
           type: mongoose.Schema.Types.ObjectId,
           ref : 'customer' },

// product : {
//            type: mongoose.Schema.Types.ObjectId,
//            ref : 'product' },
tprice : Number

});

module.exports= mongoose.model("order",orderSchema);