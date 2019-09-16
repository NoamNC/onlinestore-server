
const express = require('express');
const users = require('../controllers/users');
const products = require('../controllers/products');
const categories = require('../controllers/categories');
const apiRouter = express.Router();
const authorization = require('./middlewares/authorization');


apiRouter.get('/user', users.all);
apiRouter.put('/user', users.create);
apiRouter.post('/user/login', users.login);
apiRouter.get('/user/me', authorization, users.me);
apiRouter.post('/user/:id', users.edit);

apiRouter.get('/product', products.all);
apiRouter.get('/product/:id', products.getById);
apiRouter.put('/product', products.create);
apiRouter.post('/product/bulk', products.getByIds);

apiRouter.get('/category', categories.all);
apiRouter.put('/category', categories.create);
apiRouter.get('/category/:id/product', categories.products);

module.exports = apiRouter;