const express = require("express");
const route = express.Router();
const passport = require("../Middlewear/passportST");
const { addproduct, fproduct } = require("../controler/productctl");
const multer = require("../Middlewear/multer");

route.get("/addproduct",passport.checkAuth,addproduct)
route.post("/fproduct",passport.checkAuth,fproduct)


module.exports = route;
