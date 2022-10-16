const mongoose= require("mongoose");
var Register = require('./dbSchema.js');
var x=true;
function loginCustomer(props){


      Register.findOne({email:props.email},{password:props.password},function(err,result){
      if(err)
      console.log("error");
      else if(result)
      {
        x=false;
      }
    });
}
module.exports={loginCustomer,x}