const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const rootRouter = require("./routers/rootRouter");
const app = express();
const session = require("express-session")
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
mongoose.connect("mongodb://localhost:27017/prodb")
    .then(()=>console.log("connect db thanh cong"))
    .catch(err=>console.log("connect that bai",err))
app.use(session({
    secret:"nammoadidaphat",
    resave:false,
    saveUninitialized:false
}))
app.use((req,res,next)=>{
    res.locals.message = req.session.message
    delete req.session.message
    next()
})    
app.use(rootRouter)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`app is running http://localhost:${PORT}`);
    
})