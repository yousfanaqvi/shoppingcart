const mongoose= require("mongoose");
var Register = require('./dbSchema.js');

function registerCustomer(props){


      Register.findOne({email:props.email},function(err,result){
      if(err)
      console.log("error");
      else if(result)
      console.log(result);
      else{
        const newCustomer= new Register({
          fname:props.fname,
          lname:props.lname,
          password:props.password,
          email:props.email,
          
          
        });
      
        newCustomer.save();
      }
  });
    
    

   }

module.exports={registerCustomer}