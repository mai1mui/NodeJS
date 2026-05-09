const express = require("express");
const { getAllCate, createCate } = require("../controllers/cateController");
const cateRouter = express.Router()

cateRouter.get("/",getAllCate)
cateRouter.post("/",createCate)
module.exports = cateRouter;