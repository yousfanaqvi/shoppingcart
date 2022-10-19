// shipment form schema
const mongoose= require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,

  // remove poolSize or set according to your need
  // read docs before setting poolSize
  // default to 5
  poolSize: 1
})
// mongoose.connect(process.env.MONGO_URI);
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

