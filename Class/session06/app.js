//install npm init-y
//install npm i express ejs nodemon mongoose
const express=require("express");
const mongoose = require("mongoose");
const app=express();
const path=require("path")
//middleware static uploadFile
app.use(express.static(path.join(__dirname,"public")));
const rootRouter = require("./routers/rootRouter");

app.use(express.urlencoded({extended:true}));//tai sao lai .urlencoded , . cai khac dc k
//cau hinh view
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs")
//router
app.use("/", rootRouter);   // rootRouter phải là function (router)
//lien ket mongodb
mongoose.connect("mongodb://localhost:27017/prodb")
.then(()=>console.log("connect thanh cong"))
.catch(err=>console.log("connect that bai",err))


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running in http://localhost:${PORT}`);
})