const express = require("express");
const { Router } = express;
const route = new Router();

//configuracion session con Mongo
const session = require("express-session");
const MongoStore = require("connect-mongo")
const advancedOptions = { useUnifiedTopology: true };


route.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ivansosa:ivancoder123@clustercoder.uppwp.mongodb.net/coderdb?retryWrites=true&w=majority",
      mongoOptions: advancedOptions,
    }),
    secret: "abcd1234",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3000
    }
  })
);



route.get("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err)
    res.json({ info: "session eliminada" })
  })

})

route.post("/", (req, res) => {
  let { user, pass } = req.body;
  if (user && pass) {
    req.session.usuario = user
    req.session.contraseña = pass
  } else {
    res.json({ error: "error al obtener datos" })
  }
}
)

module.exports = route;