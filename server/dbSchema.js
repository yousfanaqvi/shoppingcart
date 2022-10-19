// login page (register schema)
const mongoose= require("mongoose");

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
const registerSchema=new mongoose.Schema({
      fname:{
        type:String,
        required:[true,"why no name ?"]  // can not be left blank
      },
      lname:{
        type:String,
        required:[true,"why no name ?"]  // can not be left blank
      },
      email:String,
      password:String
      
    });

    module.exports = mongoose.model('Register', registerSchema);          

