const category = require("./category");
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;  //this is used to refer the other schema object



const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        trime:true,
        required:true,
        maxlength:200
    },
    price:{
        type:Number,
        required:true,
        maxlength:32,
        trim:true
    },
    category:{          //refering from the category model like foreignkey before wwriting this " const {ObjectId} = mongoose.Schema; " add this
        type:ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        type:Number,
     },
     sold:{
         type:Number,
         default:0
     },
     photo:{
         data:Buffer,
         contentType:String
     }
},{timestamp:true}
);

module.exports = mongoose.model("Product",productSchema)