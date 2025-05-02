const express = require("express");
const { firstctl, secondctl } = require("../controler/ctl");
const route = express.Router();

route.get("/",firstctl);
route.post("/adddata",secondctl)

module.exports = route