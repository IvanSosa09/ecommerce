const { Schema, model } = require("mongoose");

const props = new Schema({
  name: {type: String,required: true,},
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = model("products",props)
