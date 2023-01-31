const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  catagory:{
    type:String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true
  },
  dis: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema); 
module.exports = Product;