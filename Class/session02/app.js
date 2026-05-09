//install : npm init -y
//install : npm install express

const express = require("express")
const path = require("path")
const { getProduct, addProduct, deleteOneProduct, getOneProduct, updateProduct } = require("./dbContext")
const app = express()
app.use(express.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

function validateError(data) {
    const errors = {}
    if (!data.name) {
        errors.name = "name is required"
    }
    if (!data.price) {
        errors.price = "price is required"
    }
    if (!data.description) {
        errors.description = "description is required"
    }
    return Object.keys(errors).length > 0 ? errors : null;
}
app.get("/", (req, res) => {
    getProduct((err, result) => {
        if (err) {
            console.log("error get database: ", err);
            return;
        }
        res.render("list", { products: result })
    })

})
app.get("/add", (req, res) => {
    res.render("add", { errors: null,data:null })
})
app.post("/add", (req, res) => {
    let data = req.body;
    let errors = validateError(data);
    if (errors != null) {
        return res.render("add", { errors,data })
    }
    addProduct(data, (err, result) => {
        if (err) {
            console.log("error add product into database: ", err);
            return;
        }

        res.redirect("/")
    })
})
app.get("/delete/:id", (req, res) => {
    let { id } = req.params;
    deleteOneProduct(id, (err, result) => {
        if (err) {
            console.log("error add product into database: ", err);
            return;
        }
        res.redirect("/")
    })

})
app.get("/edit/:id", (req, res) => {
    let { id } = req.params;
    getOneProduct(id, (err, product) => {
        if (err) {
            console.log("error get one product from database: ", err);
            return;
        }
        console.log("product: ", product);

        res.render("edit", { product: product[0] })
    })

})
app.post("/edit/:id", (req, res) => {
    let data = req.body;
    updateProduct(data, (err, result) => {
        if (err) {
            console.log("error update one product from database: ", err);
            return;
        }
        res.redirect("/")
    })

})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);

})