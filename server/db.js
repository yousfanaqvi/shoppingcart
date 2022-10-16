// shipment form
const mongoose= require("mongoose");
var Customer = require('./customerSchema.js');

function connectDB(props){

    console.log("in function:"+ props.fname);   
    const newCustomer= new Customer({
      fname:props.fname,
      lname:props.lname,
      telephone:props.telephone,
      email:props.email,
      address:props.address,
      country:"united states",
      state:"NJ",
      zip:45,
      cartTotalItems:4,
      cartTotalAmount:5630
    });
  
    newCustomer.save();
    
//     // Customer.deleteMany({fname:"aria"},function(err){  // empty {} to delete all rows
//     //     if(err)
//     //       console.log("error");
//     //       else
//     //       console.log("deleted");
//     //   });
      
  //   Customer.find(function(err,result){
  //     if(err)
  //   console.log("error");
  //   else
  //   console.log(result);
  // });
  }

module.exports={connectDB}