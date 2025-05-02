const express = require("express")

const port = 2006 ;

const app = express();
const db = require("./config/db");
const route = require("./Routes/Routes")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use("/",require("./Routes/Routes"));



app.listen(port,(err)=>{
    err?console.log(err):console.log("Server Started on the :: " + port);     

})

