// shipment form schema
const mongoose= require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.dburl);
const customerSchema=new mongoose.Schema({
    fname:{
      type:String,
      required:[true,"why no name ?"]  // can not be left blank
    },
    lname:{
      type:String,
      required:[true,"why no name ?"]  // can not be left blank
    },
    telephone:{
      type:Number,
      required:[true]
     
    },
    email:String,
    address:String,
    country:String,
    state:String,
    zip:Number,
    cartTotalItems:Number,
    cartTotalAmount:Number

  });

module.exports = mongoose.model('Customer', customerSchema);          

