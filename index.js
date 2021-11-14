const express = require("express");
const app = express();
const path = require("path")
const routeProd  = require("./routes/routeprod");
const routeCart = require("./routes/routecart");

require("./database/db") //DATA BASE


//CONFIGURACION
const PORT = process.env.PORT || 8080;

//MIDDLEWARES
app.use(express.json());

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname,'public')))

//RUTAS
app.use("/products",routeProd)
app.use("/cart",routeCart);


app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});
