const express=require('express');
const { json } = require('express')
const { join } = require('path')
const cors=require('cors')
const mongoose=require('mongoose')
const Form = require('./models/form');
const bodyParser=require('body-parser')
const connectDB=require('./db')
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));
//var porrt=process.env.PORT||8080;
//app.use(cors());
app.use(bodyParser.json());
connectDB();
app.post('/submit',async(req,res)=>{
  
  var name = req.body.name
  var email = req.body.email
  var age = req.body.age
  var slot = req.body.slot
  console.log(req.body);
  
        let user={};
        user.name=name;
        user.email=email;
        user.age=age;
        user.slot=slot;
        let userModel=new Form(user);
          userModel.save();
         console.log("saved");
         
   
         res.send({mes:true,message:"your slot "+slot+" is booked"});
         
        
 
});
app.listen(8080,()=>{
    console.log("server is running");
});