const { Product } = require("../models")
const responseApi = require("../ultils/responseApi")
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        responseApi.success(res, "get products successfully", products)
    } catch (error) {
        responseApi.error(res, "Error server")
    }
}
const createOneProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        responseApi.success(res, "create product successfully", product, 201)
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            return responseApi.fail(res, error)
        }
        responseApi.error(res, "Error server")
    }
}
const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id)
        if (!product) {
            return responseApi.notFound(res, "create product successfully")
        }
        responseApi.success(res, "get product successfully", product)
    } catch (error) {
        responseApi.error(res, "Error server")
    }
}
const updatedOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json("Product not found")
        }
        await product.update(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const deleteOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json("Product not found")
        }
        await product.destroy()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = {
    getAllProduct,
    createOneProduct,
    getOneProduct,
    updatedOneProduct,
    deleteOneProduct
}