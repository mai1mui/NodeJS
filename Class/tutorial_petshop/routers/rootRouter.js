const express=require("express");
const productRouter = require("./productRouter");
const rootRouter=express.Router();

//gan bo dinh tuyen
rootRouter.use("/",productRouter)//-/:su dung duong dan goc
//xuat module
module.exports=rootRouter;