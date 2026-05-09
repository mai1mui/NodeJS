const { Product } = require("../models");

// Eager loading + Lazy loading
async function getAllPros(req, res) {
    try {
        // Lazy loading (lấy tất cả product)
        const products = await Product.findAll();
        res.status(200).json(products);

        // eager loading thì dùng mẫu sau:
        // const products = await Product.findAll({
        //     include: "category"   // name trong associations
        // });
        // res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function createPro(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllPros,
    createPro
};
