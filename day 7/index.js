const express = require("express");
const port = 2006;

const app = express();
const db = require("./config/db")
const path = require('path')
          
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
const cokkie = require("cookie-parser");
app.use(cokkie())
app.use('/', require('./Routes/routes'))


app.listen(port,(err)=>{
    err?console.log(err):console.log("server started on the port :: " + port);

})