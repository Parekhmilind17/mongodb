const mongoose = require("mongoose");
const { log } = require("node:console");

mongoose.connect("mongodb://127.0.0.1/test");

const db = mongoose.connection;

db.once("open",(err)=>{
    err?console.log(err):console.log("Database connected succesfully");    
})
module.exports = db