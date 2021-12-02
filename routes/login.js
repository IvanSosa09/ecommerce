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
        "mongodb+srv://ivansosa:ivancoder123@clustercoder.uppwp.mongodb.net/ivandb?retryWrites=true&w=majority",
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
  })

route.post("/",(req,res)=>{
  console.log(req.body);
})

module.exports = route;