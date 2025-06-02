const subcatschema = require("../model/subcatschema");
const catschema = require("../model/catschema");
const schema = require("../model/proschema");


module.exports.addproduct = async(req,res)=>{
    
    await subcatschema.find({}).then((Data)=>{
        res.render("addproduct",{ Data })
    })    
}
module.exports.fproduct = async (req,res)=>{
     await schema.create(req.body).then(()=>{
        res.render("addproduct")
     })
}
