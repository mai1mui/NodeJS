//install
//npm install ejs
//ket noi thu vien express framework
const express=require("express")
const app=express()

const path=require("path")
//chuyen du lieu thanh do tuong
app.use(express.urlencoded({extended:true}))
let cars = [
  { id: 1, name: "Vinfast VF3", brand: "Vinfast", year: 2024, price: 1000 },
  { id: 2, name: "Toyota Vios", brand: "Toyota", year: 2023, price: 20000 },
  { id: 3, name: "Honda Civic", brand: "Honda", year: 2022, price: 25000 },
  { id: 4, name: "Tesla Model 3", brand: "Tesla", year: 2025, price: 35000 }
];

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//list view
app.get("/",(req,res)=>{
    res.render("list",{cars})
})
//edit view
app.get("/edit/:id",(req,res)=>{
    const {id}=req.params;
    let car=cars.find(item=>item.id==id);
    res.render("edit",{car})
})
app.post("/edit/:id",(req,res)=>{
    const data=req.body;
    const{id}=req.params;
    //tim index cua car can edit
    const index=cars.findIndex(item=>item.id==id);
    if(index!=-1){
        //update data
        cars[index]={
            ...cars[index],//giu nguyen id cu
            ...data,
            id:Number(id)
        };
    }
    res.redirect("/")
});
//add view
app.get("/add",(req,res)=>{
    res.render("add")
})
app.post("/add",(req,res)=>{
    const data=req.body;
    console.log("data: ",data);
    const newCar={
        ...data,
        id:cars[cars.length-1].id+1
    }
    cars.push(newCar)
    res.redirect("/")
});
//delete view
app.get("/delete/:id",(req,res)=>{
    const {id}=req.params;
    cars=cars.filter(item=>item.id!=id)
    res.redirect("/")
})
//PORT
const PORT=3000;
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:3000");
    //neu muon lay gia tri PORT=3000
    console.log(`Server is running on http://localhost:${PORT}`);
})