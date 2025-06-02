const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productName : {
        type:String,
        required:true
    },
    productPrice :{
        type :String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    subcategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subcategory',
        required:true
    }

})

const productschema = mongoose.model("product",schema);

module.exports = productschema;