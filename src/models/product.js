const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categoryId: {
    type: ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: ''
  }
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
