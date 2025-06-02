const mongoose = require("mongoose");


const schema = mongoose.Schema({
    catName : {
        type:String,
        required:true
    },
    img : {
        type:String,
        required:true
    }

    
})

const SecondSchema = mongoose.model("categoryyy",schema)

module.exports = SecondSchema;