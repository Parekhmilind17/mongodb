const mongoose = require("mongoose");

const schema = mongoose.Schema({
    first:
    {
        type:String,
        required:true
    },
    last:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    img:
    {
        type:String,
        required:true
    }
    
    
})

const firstschema = mongoose.model("admin",schema);

module.exports = firstschema