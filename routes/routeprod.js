const express = require("express");
const { Router } = express;
const route = new Router();
const Model = require("../models/products");


route.get("/", async(req,res)=>{
    try{
        const read = await Model.find();
        res.json({products:read}).status(200);
    }catch{
        res.json({message:"read document failed!"}).status(500)
    }
})

route.get("/:id",async (req,res)=>{
    try{
        const read = await Model.findById(req.params.id);
        res.json({product:read})
    }catch{
        res.json({info:"error al encontrar el producto"})
    }
})

route.post("/", async (req,res)=>{
    try{
        let{name,description,price} = req.body;
        const guardar = new Model({name,description,price});
        await guardar.save()
        res.json({message:"product saved"}).status(200);
    }catch{
        res.json({info:"error don't save product"}).status(500);
    }
    
})

route.put("/:id", async (req,res)=>{
    try{
        console.log(req.params.id)
        const valueId = req.params.id;
        const {name,description,price} = req.body;
        const newObj = {name,description,price}
        await Model.findByIdAndUpdate(valueId,newObj)
        res.json({message:"product update!"}).status(200)
    }catch{
        res.json({info:"update product failed"}).status(500)
    }
})

route.delete("/:id", async (req,res)=>{
    try{
        const valueId = req.params.id;
        await Model.findByIdAndDelete(valueId);
        res.json({message:"product deleted!"}).status(200)
    }catch{ 
        res.json({info:"delete product failed!"}).status(500)
    }

})


module.exports = route;

