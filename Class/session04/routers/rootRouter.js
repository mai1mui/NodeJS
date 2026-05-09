const express = require("express");
const cateRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const rootRouter = express.Router()

rootRouter.use("/cate",cateRouter)
rootRouter.use("/pro",productRouter)
module.exports = rootRouter;