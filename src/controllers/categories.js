const Category = require("../models/category");
const Product = require("../models/product");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  all: (req, res) => {
    Category.find()
      .then(Categories => res.json(Categories))
      .catch(err => res.status(500).json(err));
  },

  create: (req, res) => {
    const category = new Category(req.body);
    category.image = req.file.filename;
    category
      .save()
      .then(category => res.status(201).json(category))
      .catch(err => res.status(400).json(err));
  },

  products: (req, res) => {
    Product.find({
      categoryId: req.params.id
    })
      .then(products => res.json(products))
      .catch(err => res.status(500).json(err));
  },

  getById: (req, res) => {
    Category.findOne({
      _id: req.params.id
    })
      .then(Categories => res.json(Categories))
      .catch(err => res.status(500).json(err));
  },

  edit: (req, res) => {
    if (req.body.changeImage == "true") {
      req.body.image = req.file.filename;
      delete req.body.changeImage;
    } else {
      delete req.body.changeImage;
    }
    Category.findOneAndUpdate({ _id: new ObjectId(req.params.id) }, req.body, {
      new: true
    })
      .then(category => {
        res.status(201).json(category);
      })
      .catch(err => res.status(418).json(err));
  },

  delete: (req, res) => {
    Category.findOneAndDelete({ _id: new ObjectId(req.params.id) })
      .then(() => {
        res.status(200).send();
      })
      .catch(err => res.status(418).json(err));
  }
};
