const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    categoryId: {
      type: ObjectId,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    added: {
      type: Date
    },
    description: {
      type: String,
      default: ""
    }
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
      }
    }
  }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
