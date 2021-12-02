const express = require("express");
const app = express();
const path = require("path");
const routeProd  = require("./routes/routeprod"); // ====> ruta de mongo
const routeCart = require("./routes/routecart");  // ====> ruta de mongo
const loginsession = require("./routes/login"); // ====> ruta de mongo
require("./database/mongodb"); //DATA BASE
const cors = require("cors");



//CONFIGURACION
const PORT = process.env.PORT || 8080;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname,'public')));

//RUTAS MONGO
app.use("/products",routeProd);
app.use("/cart",routeCart);
app.use("/session",loginsession);



app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});
