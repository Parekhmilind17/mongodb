const path = require("path")
const schema = require("../model/firstschema")
const fs = require("fs")


module.exports.loginData = (req,res)=>{
    res.render("login")
}

module.exports.loginadmin = async(req,res)=>{

    let admin = await schema.findOne({email:req.body.email});

    if(!admin)
    {
        return res.redirect("/")
        
    }
    if(req.body.password==admin.password)
    {
        res.cookie("admin",admin);
        res.redirect("dashbord")
    }
    else
    {
        res.redirect("/")
    }
    
}



module.exports.dashbord=(req,res)=>{
    if(req.cookies.admin)
    {
        res.render("dashbord")
    }
    else
    {
        res.redirect("/")
    }
}
module.exports.addadmin=(req,res)=>{
    if(req.cookies.admin)
        {
            res.render("addAdmin")
        }
        else
        {
            res.redirect("/")
        }
    
}
module.exports.viewadmin=async(req,res)=>{
    await schema.find({}).then((Data)=>{

        if(req.cookies.admin)
            {
                res.render("viewAdmin",{Data})
            }
            else
            {
                res.redirect("/")
            }

    })
}
module.exports.adddata=async(req,res)=>{
    req.body.img = req.file.path
    await schema.create(req.body).then(()=>{

        if(req.cookies.admin)
            {
                res.render("/addAdmin")

            }
            else
            {
                res.redirect("/")
            }

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

