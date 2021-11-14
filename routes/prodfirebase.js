const express = require("express");
const {Router} = express;
const route = new Router;
const firebase = require("../database/firebase/firebasedb");
const { v4:uuid4 } = require("uuid");


route.get("/",async(req,res)=>{
    // let doc = firebase.doc(`${uuid4}`)
    const products = (await firebase.get()).docs
    const response = products.map(doc=>{
        return{
            id:doc.id,
            name:doc.data().name,
            price:doc.data().price
        }
    })
    res.json({products:response})
})


route.post("/",async(req,res)=>{
    let doc = firebase.doc(`${uuid4()}`)
    let {name,price} = req.body;
    let obj = {name,price};
    await doc.create(obj);
    res.json({info:"producto cargado correctamente!"})
})


route.put("/:id",async(req,res)=>{
    let id = req.params.id;
    let nuevodato = req.body;
    await firebase.doc(id).update(nuevodato);
    res.json({info:"datos actualizados"})
})

route.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    await firebase.doc(id).delete();
    res.json({info:"producto eliminado con exito!"})
    })


module.exports = route;