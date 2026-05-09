const Product = require("../models/product")
const fs = require("fs")
const getAllProduct = async (req, res) => {
    const products = await Product.find();
    res.render("list", { products })
}
const getFormProduct = (req, res) => {
    res.render("add")
}
const createProduct = async (req, res) => {
    const data = req.body;
    let imageUrl = req.file ? `/upload/${req.file.filename}` : "";
    const dataSubmit = {
        ...data,
        image: imageUrl
    }
    await Product.create(dataSubmit)
        .then(result => {
            req.session.message = "Them san pham thanh cong";
            res.redirect("/products")
        })
        .catch(err => {
            res.render("/products/add")
        })


}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
        .then(result => {
            fs.unlinkSync('./public'+result.image);
            res.redirect("/products")
        })
        .catch(err => {
            res.redirect("/products")
        })

}
module.exports = {
    getAllProduct,
    getFormProduct,
    createProduct,
    deleteProduct
}