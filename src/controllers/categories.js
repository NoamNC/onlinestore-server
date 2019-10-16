const Category = require('../models/category');
const Product = require('../models/product');

module.exports = {
  all: (req, res) => {
    Category.find()
    .then(Categories => res.json(Categories))
    .catch(err=>res.status(500).json(err));
  },
  // create: (req, res) => {
  //     const category = new Category(req.body);
  //     category.save()
  //     .then(category => res.status(201).json(category))
  //     .catch(err=>res.status(400).json(err));
  // },

  create: (req, res) => {
      const category = new Category(req.body);
      category.image = req.file.filename;
      category.save()
      .then(category => res.status(201).json(category))
      .catch(err=>res.status(400).json(err));
  },

  products:(req, res)=>{
    Product.find({
      categoryId: req.params.id
    }).then(products=>res.json(products))
    .catch((err)=>res.status(500).json(err));
  }
};