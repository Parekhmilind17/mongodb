const catschema = require("../model/catschema");
const subcatschema = require("../model/subcatschema");

module.exports.addsubcat=async(req,res)=>{      
    await catschema.find({}).then((Data)=>{
          res.render("addsubcat",{Data})  
    })

}

module.exports.addsubcatdata = async(req,res)=>{
        await subcatschema.create(req.body).then(()=>{
            res.redirect("/subcategory/addsubcat");
        })
}


module.exports.viewsubcat = async(req,res)=>{
    await subcatschema.find({}).populate("categoryId").then((Data)=>{
        res.render("viewsubcat",{Data})
        // console.log(Data);
    })
}
