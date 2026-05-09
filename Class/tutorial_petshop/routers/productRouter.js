//khai bao module
const express=require("express");
const upload=require("../middlewares/uploadFiles");

const{
    getAllProduct,
    getFormProduct,
    createProduct,
    deleteProduct,
    getEditFormProduct,
    getEditProduct
}=require("../controllers/productController");

//khoi tao router
const productRouter=express.Router()

//read
productRouter.get("/",getAllProduct)
//create
    //form create
    productRouter.get("/add",getFormProduct)
    //handle create
    productRouter.post("/add",upload.single("image"),createProduct);
//update
    //display form edit
    productRouter.get("/edit/:_id",getEditFormProduct);
    //su dung cung duong dan nhung method post, ap dung middleware upload
    productRouter.post("/edit/:_id",upload.single("image"),getEditProduct);
//delete
productRouter.get("/delete/:_id",deleteProduct)//van đúng nhung khong chuan
//co the thay:
    // Tùy chọn chuyển sang DELETE (chuẩn RESTful hơn)
    // Bạn cần dùng form hoặc JavaScript/AJAX ở phía client để gửi yêu cầu DELETE
    //productRouter.delete("/delete/:_id", deleteProduct);

//xuat module
module.exports=productRouter;