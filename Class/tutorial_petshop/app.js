//install npm init -y
//install npm i express nodemon
//npm install mongoose ejs
//npm install body-parser
//npm install multer

//khai bao thu vien
const express=require("express");
const mongoose =require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const Pet=require("./models/products")

const path=require("path")

//thiet lap middleware
    //middleware static cho file public
    app.use(express.static(path.join(__dirname,"public")));
    //body oarser middleware
    app.use(express.urlencoded({extended:true}));
//thiet lap views engine EJS
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//dinh tuyen routing
const rootRouter=require("./routers/rootRouter")
//router
app.use("/",rootRouter);
//ket noi mongodb
mongoose.connect("mongodb://localhost:27017/petdb")
.then(()=>{
    console.log("Connect successfully")
})
.catch(err=>console.log("conection failed!",err))
//khoi chay server
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
})