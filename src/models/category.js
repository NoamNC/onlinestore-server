const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
},{collection: 'catagories'});

const Category = mongoose.model("category", CategorySchema);
module.exports = Category;
