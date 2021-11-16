const express = require("express");
const app = express();
const path = require("path");
const routeProd  = require("./routes/routeprod"); // ====> ruta de mongo
const routeCart = require("./routes/routecart");  // ====> ruta de mongo
const prodfirebase = require("./routes/prodfirebase"); // ====> ruta de firebase
require("./database/mongodb"); //DATA BASE


//CONFIGURACION
const PORT = process.env.PORT || 8080;

//MIDDLEWARES
app.use(express.json());

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname,'public')));

//RUTAS MONGO
app.use("/products",routeProd);
app.use("/cart",routeCart);
//RUTAS FIREBASE
app.use("/productfb",prodfirebase);



app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});
