const path = require("path")
const schema = require('../model/firstschema')
const fs = require("fs")
const passport = require("passport")


module.exports.loginData = (req,res)=>{
    res.render("login")
}

module.exports.loginadmin = async(req,res)=>{
    res.redirect("/dashbord")
}



module.exports.dashbord=(req,res)=>{
        res.render("dashbord")
}
module.exports.addadmin=(req,res)=>{
            res.render("addAdmin")
}
module.exports.viewadmin=async(req,res)=>{
    await schema.find({}).then((Data)=>{
    res.render("viewAdmin",{Data})            

    })
}
module.exports.adddata=async(req,res)=>{
    req.body.img = req.file.path
    await schema.create(req.body).then(()=>{
                res.render("/addAdmin")
    })   
}
module.exports.deletedata=async(req,res)=>{
    let singleData = await schema.findById(req.query.id);
    fs.unlinkSync(singleData.img);

    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
}

module.exports.editdata= async(req,res)=>{
       await schema.findById(req.query.id).then((singleData)=>{
            res.render("edit",{singleData})
       })      
}
module.exports.updatedata=async(req,res)=>{
    let singleData = await schema.findById(req.body.id);

    let img = '';

    req.file?img=req.file.path:img = singleData.img
    req.file && fs.unlinkSync(singleData.profile)
    req.body.img = img;

    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
   
}

module.exports.profile=(req,res)=>{
 
    res.render("profile")
}

module.exports.changepass=(req,res)=>{
    res.render("changepass")
}
module.exports.changepassword= async(req,res)=>{

  let admin= req.user;


  if(admin.password==req.body.old)
  {
        if(admin.password!=req.body.new)
        {
            if(req.body.confirm==req.body.new)
            {
                await schema.findByIdAndUpdate(admin.id,{password:req.body.confirm}).then(()=>{
                    res.redirect("/")
                })
            }
            else
            {
                res.write("<h1>confirm is incorrrect</h1>")    
            }
        }
        else
        {
            res.write("<h1>new is incorrrect</h1>")         
        }
  }
  else
  {
    res.write("<h1>old is incorrrect</h1>")
  }
   
    
}