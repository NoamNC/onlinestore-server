const Product = require('../models/product');

module.exports = {
  all: (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err=>res.status(500).json(err));
  },
  create: (req, res) => {
    console.log(req.body);
      const product = new Product(req.body);
      product.save()
      .then(product => res.status(201).json(product))
      .catch(err=>res.status(400).json(err));
  },
  getById:(req,res)=>{
    Product.findById(req.params.id)
    .then(product=>{
      if(!product){
        res.status(404).send();
        return;
      }
      res.json(product);
    })
    .catch(err=>res.status(500).json(err));
  },

  getByIds:(req,res)=>{
    Product.find({
        _id: {$in: req.body.ids}
    })
    .then(products=>res.json(products))
    .catch(err=> res.status(500).json(err));
}
};
