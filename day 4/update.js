const express = require("express");
const port = 2009;

const app = express();
const db = require("./config/db")
const schema = require("./model/firstschema")
const multer = require("./Middlewear/multer")
const path = require('path');
const fs = require("fs");

app.set("view engine" ,"ejs")
app.use(express.urlencoded({extended:true}))
app.use("/uploads", express.static(path.join(__dirname  ,"uploads")))


    
app.get("/",async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("index",{data})
    })    
})

app.post("/addData",multer, async(req,res)=>{
    req.body.image = req.file.path
    await schema.create(req.body).then(()=>{
       
        res.redirect("/");
    })
       
})
app.get("/deleteData", async(req,res)=>{
    let singleData =await schema.findById(req.query.id);
    fs.unlinkSync(singleData.image)

    console.log(singleData);
    
       
    await schema.findByIdAndDelete(req.query.id).then(()=>{

        res.redirect("/")
    })
})

app.get("/editData/:id",async(req,res)=>{
    let singleData = await schema.findById(req.params.id)
    // await schema.findById(req.params.id).then((singleData)=>{
    // res.render("editData",{singleData})
    // console.log(singleData);
    res.render("editData",{singleData});
    
   })


app.post("/updatedata",async(req,res)=>{
    
    let singleData = await schema.create.findById(req.body.id);
    let img="";
    req.file ? img = req.file.path : img = singleData.image
    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img;
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
       
    })

    
app.listen(port,(err)=>{
    err?console.log(err):console.log("server stated on port :: " + port);
       
})