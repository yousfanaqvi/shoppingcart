const f = require("./db")
const regFn = require("./registerDB")
const loginFn = require("./login")
var Register = require('./dbSchema.js');
var Customer = require('./customerSchema.js');
const cors= require("cors");
const exp = require('express');
const path= require("path");
const bodyParser=require("body-parser");
const https= require("https");
const { createProxyMiddleware } = require('http-proxy-middleware')

require('dotenv').config();

const stripe= require("stripe")(process.env.stripkey);
const app = exp();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(createProxyMiddleware('/', { target: 'https://shoppingcart-beta.vercel.app', "changeOrigin": true }))
app.use( cors());
var whitelist = ['https://shoppingcart-fwl2dz7n1-yousfanaqvi.vercel.app', 'https://shoppingcart-beta.vercel.app']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(exp.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

const port = process.env.PORT || 3000;
app.options('*', cors())
  app.use(exp.static(path.join(__dirname,"build")));
  app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "build","/index.html"));
 });


//create a customer

app.post("/payment", cors(corsOptions) ,  (req,res) => {
    const {product,token}=req.body;
    console.log("product", product);
    console.log("price", product.price);
    

    return stripe.customers
    .create({
      email:token.email,
      source:token.id
    })
    .then(customer =>{
      stripe.charges.create({
        amount:product.price,
        currency:"usd",
        customer:customer.id,
        receipt_email:token.email,
        description:`purchase of ${product.name}`,
        
        shipping:{
          name:token.card.name,
          address:{
            country:token.card.address_country
          }
        }

      })
    })
    .then(result => {
      res.status(200).json(result);
      
  }
    )
    .catch(err => console.log(err))


})



app.post("/storeData",cors(corsOptions), (req,res) => {
  const db=f.connectDB(req.body);
});

app.get("/getdata", cors(corsOptions),function(req,res){   
  // console.log(req.query.email);
  Register.find({email:req.query.email},function(err,result){
        if(err)
      console.log("error");
      else if(result)
       res.json(result);
       else{
        res.send("not found");
       }
    });
 })  

app.post("/registerUser",cors(corsOptions),(req,res) => {
  const reg=regFn.registerCustomer(req.body);
  Register.find({email:req.body.email},function(err,result){
    if(err)
    console.log("error");
    else if(result.length!==0)
    {
      res.statusMessage = "found";
      res.status(200).end();
      console.log(result);
    }
    else{
      res.statusMessage = "Not found";
      res.status(400).end();
      
    }
      
  });
  
    
});

app.post("/loginUser",cors(corsOptions), (req,res) => {
  // Register.findOne({email:req.body.email,password:req.body.password},function(err,result){
  //   if(err)
  //   console.log("error");
  //   else if(result)
  //   {
  //     res.statusMessage = "found";
  //     res.status(200).end();

  //   }
  //   else{
  //     res.statusMessage = "Not found";
  //     res.status(400).end();
  //   }
      
  // });
  res.send("hello");
  console.log("check route");
});


app.listen(port,function(err){
    if(err)
    console.log(err);
    else
    console.log("server is running.....");

});