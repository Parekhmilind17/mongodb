const express = require("express");
const port = 2009;

const app = express();
const db = require("./config/db")

app.set("view engine" ,"ejs")
app.use(express.urlencoded({extended:true}))

let students = []



app.get("/",(req,res)=>{
    res.render("index",{students})
})

app.post("/addData",(req,res)=>{
    req.body.id = students.length + 1
    students.push(req.body);
    res.redirect("/");   
})
app.get("/deleteData",(req,res)=>{
        let newData = students.filter((item)=>item.id != req.query.id);
        students = newData;
        res.redirect("/")
})

app.get("/editData/:id",(req,res)=>{
    let singleData = students.find((item)=>item.id==req.params.id)
    res.render("editData",{singleData})
})

app.post("/updatedata",(req,res)=>{
    students.forEach((item)=>{
        if(item.id == req.body.id)
        {
            item.name = req.body.name,
            item.subject = req.body.subject,
            item.city = req.body.city
        }
        else
        {
            item
        }
        res.redirect("/")
    })
})
    
app.listen(port,(err)=>{
    err?console.log(err):console.log("server stated on port :: " + port);
       
})