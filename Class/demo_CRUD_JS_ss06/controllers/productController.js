const Product =require("../models/Product")
const fs =require("fs")

//read
const getAllProduct=async(req,res)=>{
    const products=await Product.find();
    const {msg}=req.query;
    res.render("list",{products,msg});
}
//create

//edit
//delete

//exports
module.exports={
    getAllProduct
}