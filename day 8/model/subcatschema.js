const mongoose = require("mongoose");

const subcatschema = mongoose.Schema({

    subcatname : {
        type : String,
        required:true,
    },
    

    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'categoryyy',
        required : true,
    }
});

const Subcattschema = mongoose.model("subcategory",subcatschema);

module.exports = Subcattschema; 