const express = require("express")
const path = require("path");
const rootRouter = require("./router/rootRouter");
const app = express();
const session = require("express-session");
const { default: mongoose } = require("mongoose");
app.use(express.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
mongoose.connect("mongodb://localhost:27017/userdb")
    .then(() => console.log("connect db thanh cong"))
    .catch(err => console.log("connect that bai", err))
app.use(session({
    secret: "nammoadidaphat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1200000 }
}))
app.use((req,res,next)=>{
    res.locals.user = req.session.user;
    next()
})
app.use(rootRouter)


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);

})