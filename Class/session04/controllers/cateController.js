const {Category} = require("../models")

async function getAllCate(req,res){
    const cates = await Category.findAll();
    res.status(200).json(cates)
}
async function createCate(req,res){
    const cate = await Category.create(req.body);
    res.status(201).json(cate)
}

async function updateCate(req,res){
    const cate = await Category.findByPK((req.param,satisfies.id));
    if(!cate){
        return res.status(404).json("cate noit found")
    }
  await cate.update(req.body)
    res.status(201).json(cate)
}
module.exports = {
    getAllCate,
    createCate,
    updateCate
}
