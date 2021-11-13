const express = require("express");
const app = express();
const path = require("path")
const routeProd  = require("./routes/routeprod");

require("./database/db") //DATA BASE


//CONFIGURACION
const PORT = process.env.PORT || 8080;

//MIDDLEWARES
app.use(express.json());

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname,'public')))

//RUTAS
app.use("/products",routeProd)


app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});