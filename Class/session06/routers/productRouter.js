const express = require("express")
const upload =require("../middlewares/uploadFiles");

const {
    getAllProduct,
    getFormProduct,
    createProduct,
    getEditFormProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const productRouter = express.Router()

//display list
productRouter.get("/", getAllProduct)
//form create new
productRouter.get("/add", getFormProduct)
//control create new
productRouter.post("/add",upload.single("image"), createProduct);
//Hiển thị form chỉnh sửa (GET)
productRouter.get("/edit/:_id", getEditFormProduct);
    // Sử dụng cùng đường dẫn nhưng phương thức POST, và áp dụng middleware upload
    productRouter.post("/edit/:_id", upload.single("image"), updateProduct);
//delete
productRouter.get("/delete/:_id", deleteProduct)

module.exports = productRouter;