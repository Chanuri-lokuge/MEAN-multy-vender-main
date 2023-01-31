const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  productid: {
    type: String,
    required: true,
  },
  level:{
    type:String,
    required: true,
  },
  
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema); 
module.exports = Rating;