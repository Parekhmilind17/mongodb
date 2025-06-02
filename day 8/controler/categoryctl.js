const schema = require("../model/catschema");



module.exports.addcat=(req,res)=>{
    res.render("addCat")
}
module.exports.addcatdata=async(req,res)=>{
     req.body.img = req.file.path
     await schema.create(req.body).then(()=>{
         res.redirect("/category/addCat");
    })
} 
module.exports.viewcat=async(req,res)=>{
    await schema.find({}).then((Data)=>{
        res.render("viewcat",{Data})
    })
}