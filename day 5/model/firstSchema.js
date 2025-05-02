const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name : 
    {
        type: String,
        required : true
    },
    city :
    {
        type :String,
        require :true
    }
})
const firstschema = mongoose.model("project",schema);

module.exports = firstschema