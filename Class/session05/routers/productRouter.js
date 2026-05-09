const express = require("express")
const { getAllProduct, getFormProduct, createProduct, deleteProduct } = require("../controllers/productController")
const upload = require("../middlewares/uploadFile")
const productRouter = express.Router()

productRouter.get("/",getAllProduct)
productRouter.get("/add",getFormProduct)
productRouter.post("/add",upload.single("image"),createProduct)
productRouter.get("/delete/:id",deleteProduct)
module.exports = productRouter;