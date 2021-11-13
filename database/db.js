const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/commerce");
mongoose.connection.on("open",()=>{
    console.log("database connected")
})
mongoose.connection.on("error",()=>{
    console.log("database not connected")
})

