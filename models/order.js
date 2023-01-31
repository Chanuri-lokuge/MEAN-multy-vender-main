const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  cusid: {
    type: String,
    required: true,
  },
  productid:{
    type:String,
    required: true,
  },
  
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema); 
module.exports = Order;