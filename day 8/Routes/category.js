const express = require("express");
const route = express.Router();
const multer = require("../Middlewear/multer")


const passport = require("../Middlewear/passportST");
const { addcat, addcatdata, viewcat } = require("../controler/categoryctl");


route.get("/addCat",passport.checkAuth,addcat);
route.post("/addcatdata",passport.checkAuth,multer,addcatdata)
route.get("/viewcat",passport.checkAuth,viewcat)

module.exports = route
