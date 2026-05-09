//install 
// 1.npm init -y
// 2.npm install nodemon
// 3.npm install express
// 4.npm install ejs

//imp thu vien
const express = require("express")
const path = require("path")
const app = express()

//chuyển dữ liệu thành đối tượng
app.use(express.urlencoded({ extended: true }))
//lấy dữ liệu demo trên chatgpt
let phones = [
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: 1000 },
    { id: 2, name: "Samsung S24 Ultra", brand: "Samsung", price: 950 },
    { id: 3, name: "Google Pixel 8 Pro", brand: "Google", price: 900 },
    { id: 4, name: "Xiaomi 14", brand: "Xiaomi", price: 750 },
    { id: 5, name: "OnePlus 12", brand: "OnePlus", price: 850 }
];


//khai báo thư mục chưa view và engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

//read view
app.get("/", (req, res) => {
    res.render("read", { phones })
})
//create view
app.get("/create", (req, res) => {
    res.render("create")
})
app.post("/create", (req, res) => {
    const data = req.body;
    console.log("data: ", data);
    const newPhone = {
        ...data,
        id: phones[phones.length - 1].id + 1
    }
    phones.push(newPhone)
    res.redirect("/")
});
//update view
app.get("/update/:id", (req, res) => {
    const { id } = req.params;
    let phone = phones.find(item => item.id == id)
    res.render("update", { phone })
})
app.post("/update/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    //find index of phone
    const index = phones.findIndex(item => item.id == id);
    if (index != -1) {
        //update data
        phones[index] = {
            ...phones[index],
            ...data,
            id: Number(id)
        };
    }
    res.redirect("/")
});
//delete
app.get("/delete/:id", (req, res) => {
    const { id } = req.params;
    phones = phones.filter(item => item.id != id)
    res.redirect("/")
});
//app.listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})