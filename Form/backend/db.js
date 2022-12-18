const mongoose=require('mongoose');

const uri="mongodb+srv://devrath27:Parveen%40123@cluster0.ek7qz.mongodb.net/forms?retryWrites=true&w=majority"

const connectDB=async()=>{
   await mongoose.connect(uri,{
        useUnifiedTopology:true,
        useNewUrlParser: true
    });
    console.log("connect");
    };
    module.exports=connectDB;