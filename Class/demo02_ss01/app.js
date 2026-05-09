//install
//npm init -y
//npm install nodemon --save-dev or npm install -g nodemon
//npm install express
//npm install ejs
const express=require("express")
const path=require("path")
const app=express()

//chuyển dữ liệu thành đối tượng
app.use(express.urlencoded({extended:true}))
let users=[
    {id:1, name:"Mikami",email:"mikami99@gmail.com",age:26},
    {id:2, name:"Fukuda",email:"fukuda99@gmail.com",age:99}
]

//Khai báo thư mục chứa view và engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")

//read
app.get("/",(req,res)=>{
    res.render("read",{users})
})

///create
app.get("/create",(req,res)=>{
    res.render("create")
})
app.post("/create",(req,res)=>{
    const data=req.body;
    console.log("data: ",data);
    const newUser={
        ...data,
        id:users[users.length-1].id+1
    }
    users.push(newUser)
    res.redirect("/")
});

//update
app.get("/update/:id",(req,res)=>{
    const {id}=req.params;
    let user=users.find(item=>item.id==id)
    res.render("update",{user})
})
app.post("/update/:id",(req,res)=>{
    const {id}=req.params;
    const data=req.body;
   //tìm index của user cần update
   const index=users.findIndex(item=>item.id==id);
   if(index!=-1){
    //cập nhật lại data
    users[index]={
        ...users[index],//giữ nguyên id cũ
        ...data,
        id:Number(id)
    };
   }
    res.redirect("/")
});
//delete
app.get("/delete/:id",(req,res)=>{
    const{id}=req.params;
    users=users.filter(item=>item.id!=id)
    res.redirect("/")

});
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})