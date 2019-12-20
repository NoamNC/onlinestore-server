const Product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  all: (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err=>res.status(500).json(err));
  },
  create: (req, res) => {
      const product = new Product(req.body);
      product.image = req.file.filename;
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
},

edit:(req,res)=>{
  if(req.body.changeImage=="true"){
    req.body.image = req.file.filename;
    delete req.body.changeImage;
  }
  else{
    delete req.body.changeImage;
  }
  
  Product.findOneAndUpdate({_id: new ObjectId(req.params.id)}, req.body, {new: true})
  .then(product =>{
    res.status(201).json(product);
  } )
  .catch(err => res.status(418).json(err));
},

delete:(req,res)=>{
  Product.findOneAndDelete({_id: new ObjectId(req.params.id)})
    .then(() =>{
      res.status(200).send();
    } )
    .catch(err => res.status(418).json(err));
},

deleteAll:(req,res, next)=>{
  Product.deleteMany({categoryId: new ObjectId(req.params.id)})
    .then(() =>{
      res.status(200).send();
      next();
    } )
    .catch(err => res.status(418).json(err));
},

};
