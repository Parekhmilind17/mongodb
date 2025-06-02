const express = require("express");
const port = 2006;

const app = express();
const db = require("./config/db")
const path = require('path')
const session = require("express-session");
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}));


app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
const passport = require("passport")
const cokkie = require("cookie-parser");
const connectflash = require("connect-flash");
const flash =require("./Middlewear/flash")
app.use(cokkie())


app.use(
    session({
      name: "local",
      secret: "rnw",
      resave: true,
      saveUninitialized: false,
      cookie: { maxAge: 100 * 100 * 60},
    })
  );

app.use(passport.initialize());
app.use(passport.session());

// app.use(connectflash())
// app.use(flash.setFlash)


app.use('/', require('./Routes/routes'))
app.use('/category', require('./Routes/category'))
app.use("/subcategory",require('./Routes/subcategory'))
app.use("/product",require('./Routes/product')) 


app.listen(port,(err)=>{
    err?console.log(err):console.log("server started on the port :: " + port);

})