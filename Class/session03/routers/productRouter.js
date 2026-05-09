const express = require("express");
const { getAllProduct, createOneProduct, getOneProduct, updatedOneProduct, deleteOneProduct } = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/",getAllProduct)
productRouter.post("/",createOneProduct)
productRouter.get("/:id",getOneProduct)
productRouter.put("/:id",updatedOneProduct)
productRouter.delete("/:id",deleteOneProduct)
module.exports = productRouter;