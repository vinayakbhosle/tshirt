const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        trim :true,
        required : true,
        maxlength :32,
        unique :true
         }
        },
        { timestamps:true } //when we insert a new record it will record the date and time
);

module.exports= mongoose.model("Category",categorySchema);