const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/commerce");
mongoose.connect("mongodb+srv://ivansosa:ivancoder123@clustercoder.uppwp.mongodb.net/coderdb?retryWrites=true&w=majority");

mongoose.connection.on("open",()=>{
    console.log("database connected")
})
mongoose.connection.on("error",()=>{
    console.log("database not connected")
})

