const express = require("express")
const productRouter = require("./productRouter")
const rootRouter = express.Router()
rootRouter.use("/products",productRouter)
module.exports = rootRouter;