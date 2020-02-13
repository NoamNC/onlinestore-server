const express = require("express");
const users = require("../controllers/users");
const products = require("../controllers/products");
const categories = require("../controllers/categories");
const apiRouter = express.Router();
const authorization = require("./middlewares/authorization");
const multerProducts = require("./multer/products");
const multerCategories = require("./multer/categories");

apiRouter.get("/user", users.all);
apiRouter.put("/user", users.create);
apiRouter.post("/user/login", users.login);
apiRouter.get("/user/me", authorization, users.me);
apiRouter.post("/user/:id", users.edit);

apiRouter.get("/product", products.all);
apiRouter.get("/product/:id", products.getById);
apiRouter.put("/product", multerProducts.single("image"), products.create);
apiRouter.post("/product/bulk", products.getByIds);
apiRouter.post("/product/:id", multerProducts.single("image"), products.edit);
apiRouter.delete("/product/:id", products.delete);

apiRouter.get("/category", categories.all);
apiRouter.get("/category/:id", categories.getById);
apiRouter.put("/category", multerCategories.single("image"), categories.create);
apiRouter.get("/category/:id/product", categories.products);
apiRouter.post("/category/:id", multerCategories.single("image"),categories.edit);
apiRouter.delete("/category/:id", products.deleteAll, categories.delete);

module.exports = apiRouter;
