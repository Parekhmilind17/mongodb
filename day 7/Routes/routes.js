const express = require("express");
const { dashbord, addadmin, viewadmin, adddata, deletedata, editdata, updatedata, loginData, loginadmin } = require("../controler/ctl");
const multer = require("../Middlewear/multer")

const route = express.Router()

route.get("/",loginData)
route.post("/loginAdmin",loginadmin)
route.get("/dashbord",dashbord)
route.get("/addAdmin",addadmin)
route.get("/viewAdmin",viewadmin)
route.post("/addData",multer,adddata)
route.get("/DeleteData",deletedata)
route.get("/EditData",editdata)
route.post("/updateData",multer,updatedata)

module.exports=route