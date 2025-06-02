const express = require("express");
const { dashbord, addadmin, viewadmin, adddata, deletedata, editdata, updatedata, loginData, loginadmin, profile, changepass, changepassword } = require("../controler/ctl");
const multer = require("../Middlewear/multer");
const passport = require("../Middlewear/passportST");

const route = express.Router()

route.get("/",loginData)
route.post("/loginAdmin",passport.authenticate("local",{failureRedirect:"/"}),loginadmin)
route.get("/dashbord",passport.checkAuth,dashbord);
route.get("/addAdmin",passport.checkAuth,addadmin)
route.get("/viewAdmin",passport.checkAuth,viewadmin)
route.post("/addData",multer,adddata)
route.get("/DeleteData",deletedata)
route.get("/EditData",editdata)
route.post("/updateData",multer,updatedata)
route.get("/profile",passport.checkAuth,profile)
route.get("/changepass",passport.checkAuth,changepass)
route.post("/ChangePassWord",passport.checkAuth,changepassword)

module.exports=route