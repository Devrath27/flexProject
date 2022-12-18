const mongoose =require('mongoose')
const form=new mongoose.Schema({
    age:{
        type:Number
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    slot:{
        type:String
    }

});

// const schema=mongoose.Schema;
// const WishSchema= Schema({
//     wish:Object
// });
module.exports= Form =mongoose.model("form",form);