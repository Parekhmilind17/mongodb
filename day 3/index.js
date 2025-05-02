const express = require("express");
const path = require("path"); 
const port = 2009;

const app = express();
const db =  require("./config/db")
const schema = require("./model/firstschema")
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));


app.get("/",async(req,res)=>{
    await res.render("index")
})

app.get("/EnterYourBooks",(req,res)=>{
    res.render("EnterYourBooks")
})
app.post("/EnterBooks", async(req,res)=>{
    await schema.create(req.body).then
    (()=>{
        res.redirect("/")
    })
})
app.listen(port,(err)=>{
   err?console.log(err):console.log("Server started on the port :: " + port);
    
})