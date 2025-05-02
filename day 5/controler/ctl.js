const schema = require("../model/firstSchema");

module.exports.firstctl = async (req,res)=>{
    await res.render("index");
}
module.exports.secondctl = async (req,res)=>{
    await schema.create(req.body).then(()=>{
        res.redirect("/");
    })
}