//install npm init -y //để có sẵn phần script trong package.json
//install express
//install nodemon --save-dev

const express = require("express")
const path =require("path")
const { getProduct } = require("../Session02/dbContext")
const app=express()

//chuyen du lieu thanh doi tuong
app.use(express.urlencoded({extended:true}))

//khoi tao views
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

function validateError(data){
    const errors ={}
    if(!data.name){
        errors.name="name is required"
    }
    if (!data.price) {
        errors.price = "price is required"
    }
    if (!data.des) {
        errors.des= "description is required"
    }
    return Object.keys(errors).length>0?errors:null;
}
//home
app.get("/",(req,res)=>{
    getProduct((err,result)=>{
        if(err){
            console.log("error get database: ",err);
            return;
        }
        res.render("list",{cars:result})
    })
    
})
//app.listen
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})