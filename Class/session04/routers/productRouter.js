const express = require("express");
const { getAllPros } = require("../controllers/proController");
const productRouter = express.Router()

productRouter.get("/",getAllPros)
module.exports = productRouter;