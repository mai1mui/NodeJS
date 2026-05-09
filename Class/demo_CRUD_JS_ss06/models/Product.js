const{Schema,default:mongoose}=require("mongoose");
const productSchema=new Schema({
    name:{type:String},
    price:{type:Number},
    image:{type:String}
})

const Product=mongoose.model("Product",productSchema)
module.exports=Product;