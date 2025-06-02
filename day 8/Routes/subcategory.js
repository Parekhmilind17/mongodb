const express = require("express");
const route = express.Router();
const passport = require("../Middlewear/passportST");
const { addsubcat, addsubcatdata, viewsubcat } = require("../controler/subcategoryctl");


route.get("/addsubcat",passport.checkAuth,addsubcat);
route.post("/addsubcatdata",passport.checkAuth,addsubcatdata)
route.get("/viewsubcat",passport.checkAuth,viewsubcat)




module.exports = route;