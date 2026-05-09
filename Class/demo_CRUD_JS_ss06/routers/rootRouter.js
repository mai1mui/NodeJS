const express=require("express");
const rootRouter=express.Router();

const productRouter=require("./productRouter");

module.exports=rootRouter;