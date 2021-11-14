const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const carrito = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = model("cart", carrito);
