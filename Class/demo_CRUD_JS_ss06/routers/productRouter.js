const express=require("express");
const upload=require("../middlewares/uploadFile");

const {
    getAllProduct
}=require("../controllers/productController");

const productRouter =express.Router();

//display list
productRouter.get("/",getAllProduct)
//create
    //form create new
    //control create new
//edit
//delete
//exports
module.exports=productRouter;