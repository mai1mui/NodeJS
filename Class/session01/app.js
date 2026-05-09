//install
//npm install ejs
const express = require("express");
const path = require("path")
const app = express()
//middleware ->chuyển dữ liệu thành đối tượng
app.use(express.urlencoded({ extended: true }))
let users = [
    {
        id: 1,
        name: "Ngoc Trinh",
        email: "trinh@gmail.com",
        age: 33
    },
    {
        id: 2,
        name: "Tram Anh",
        email: "tramanh@gmail.com",
        age: 32 
    }
]

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("list", { users })
})
app.get("/add", (req, res) => {
    res.render("add")
})
app.post("/add", (req, res) => {
    const data = req.body;
    console.log("data: ", data);
    const newUser = {
        ...data,
        id: users[users.length - 1].id + 1
    }
    users.push(newUser)
    res.redirect("/")
})
app.get("/delete/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter(item => item.id != id)
    res.redirect("/")
})
app.get("/edit/:id", (req, res) => {
    const { id } = req.params;
    let user = users.find(item => item.id == id)
    res.render("edit", { user })
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

})