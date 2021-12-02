const express = require("express");
const { Router } = express;
const route = new Router();

//configuracion session con Mongo
const session = require("express-session");
const MongoStore = require("connect-mongo");
const advancedOptions = { useUnifiedTopology: true };


route.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ivansosa:ivancoder123@clustercoder.uppwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      mongoOptions: advancedOptions,
    }),
    secret: "abcd1234",
    resave: true,
    saveUninitialized: true,
    // cookie:{
    //     maxAge:3000
    // }
  })
);



route.get("/",(req,res)=>{
  // return res.json({info:req.session})
  req.session.user = "ivan"
  })

route.post("/",(req,res)=>{
  // const {user, pass} = req.body
  // user && pass ? (req.session.user = user) && (req.session.pass = pass) : res.json("ERROR FALTAN DATOS")
  let user = req.body.user
  let pass = req.body.pass
  req.session.pass = pass
  req.session.user = user
  console.log(pass)
}
)

module.exports = route;