const Product = require("../models/Product")
const fs = require("fs")
//read
const getAllProduct = async (req, res) => {
    const products = await Product.find();
    const { msg } = req.query;

    res.render("list", { products, msg });
}
//create
const getFormProduct = async (req, res) => {
    res.render("add")
}

const createProduct = async (req, res) => {
    const data = req.body;
    if (req.file) {
        data.image = req.file.filename;
    }
    await Product.create(data)
    res.redirect("/products?msg=add-success")
}
//edit
//display form edit
const getEditFormProduct = async (req, res) => {
    const { _id } = req.params;
    //find product =id
    const product = await Product.findById(_id);
    if (!product) {
        return res.redirect("/products?msg=not-found");
    }
    //render form edit-> truyen du lieu sp hien tai
    res.render("edit", { product });
}
//handle update
const updateProduct = async (req, res) => {
    const { _id } = req.params;
    const data = req.body;

    // Lấy thông tin sản phẩm cũ để kiểm tra ảnh
    const oldProduct = await Product.findById(_id);

    // Kiểm tra nếu có file ảnh mới được upload
    if (req.file) {
        data.image = req.file.filename; // Lưu tên ảnh mới

        // Xóa file ảnh cũ (nếu tồn tại)
        if (oldProduct.image) {
            const oldImagePath = `./public/uploads/${oldProduct.image}`;
            // Sử dụng fs.unlink để xóa file
            fs.unlink(oldImagePath, (err) => {
                if (err) console.error("Error deleting old image:", err);
            });
        }
    } else {
        // Nếu không có ảnh mới, giữ lại tên ảnh cũ
        data.image = oldProduct.image;
    }

    // Cập nhật sản phẩm trong CSDL
    await Product.findByIdAndUpdate(_id, data, { new: true })
        .then(result => {
            res.redirect("/products?msg=update-success");
        })
        .catch(err => {
            res.redirect("/products?msg=update-failed");
        });
}
//delete
const deleteProduct = async (req, res) => {
    const { _id } = req.params;
    await Product.findByIdAndDelete(_id)
        .then(result => {
            res.redirect("/products?msg=delete-success")
        })
        .catch(err => {
            res.redirect("/products?msg=delete-failed")
        })
}
module.exports = {
    getAllProduct,
    getFormProduct,
    createProduct,
    getEditFormProduct,
    updateProduct,
    deleteProduct
}