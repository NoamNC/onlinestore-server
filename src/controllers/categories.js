const Category = require('../models/category');

module.exports = {
  all: (req, res) => {
    Category.find()
    .then(Categories => res.json(Categories))
    .catch(err=>res.status(500).json(err));
  },
  create: (req, res) => {
    console.log(req.body);
      const category = new Category(req.body);
      category.save()
      .then(category => res.status(201).json(category))
      .catch(err=>res.status(400).json(err));
  }
};