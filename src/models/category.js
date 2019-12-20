const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
},{
  collection: 'catagories',
  toJSON:{
    transform: (doc, ret)=>{
      ret.id = ret._id;
      delete ret._id;
      return ret; 
      }
  }
});

const Category = mongoose.model("category", CategorySchema);
module.exports = Category;
