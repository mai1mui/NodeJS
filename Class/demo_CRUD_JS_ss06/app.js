//install npm init -y
//install npm i express nodemon ejs mongoose multer
//1.khai báo module
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const path=require("path");
//2.thiết lập middleware
//middleware static uploadFile
app.use(express.static(path.join(__dirname,"public")));
//body parser middleware
app.use(express.urlencoded({extended:true}));
//3.thiết lập view engine EJS
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
//4.định tuyến routing
const rootRouter=require("./routers/productRouter");
//router
app.use("/",rootRouter);
//5.kết nối mongodb
mongoose.connect("mongodb://localhost:27017/prodb")
.then(()=>console.log("Connect successfully"))
.catch(err=>console.log("mongodbConnection failed",err))
//6.khởi chạy server
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running in http:///localhost:${PORT}`);
})
