const express = require("express");
const {Router} = express;
const route = new Router;
const ModelCart = require("../models/carrito");

route.get("/",async(req,res)=>{
    let obtener = await ModelCart.find();
    res.json({cart:obtener});
})

route.post("/",async(req,res)=>{
    let {name,description,price} = req.body;
    let guardar = new ModelCart({name,description,price});
    await guardar.save();
    res.json({info:"producto añadido al carrito!"})
})

route.delete("/:id",async(req,res)=>{
    let param = req.params.id;
    await ModelCart.findByIdAndDelete(param)
    res.json({info:"producto eliminado del carrito"})
})


module.exports = route;