
const express = require('express');
const users = require('../controllers/users');
const products = require('../controllers/products');
const categories = require('../controllers/categories');
const apiRouter = express.Router();

apiRouter.get('/user', users.all);
apiRouter.put('/user', users.create);

apiRouter.get('/product', products.all);
apiRouter.put('/product', products.create);

apiRouter.get('/category', categories.all);
apiRouter.put('/category', categories.create);

module.exports = apiRouter;