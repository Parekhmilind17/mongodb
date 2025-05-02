const express = require("express");
const port = 2009;

const app = express();
const db = require("./config/db")
const schema = require("./model/firstschema")

app.set("view engine" ,"ejs")
app.use(express.urlencoded({extended:true}))

let students = []



app.get("/",async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("index",{data})
    })    
})

app.post("/addData", async(req,res)=>{
    await schema.create(req.body).then(()=>{
       
        res.redirect("/");
    })
       
})
app.get("/deleteData", async(req,res)=>{
       
    await schema.findByIdAndDelete(req.query.id).then(()=>{

        res.redirect("/")
    })
})

app.get("/editData/:id",async(req,res)=>{
    await schema.findById(req.params.id).then((singleData)=>{
    res.render("editData",{singleData})
   })
})

app.post("/updatedata",async(req,res)=>{
    
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
       
    })

    
app.listen(port,(err)=>{
    err?console.log(err):console.log("server stated on port :: " + port);
       
})