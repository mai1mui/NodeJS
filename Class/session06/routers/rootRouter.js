const express = require("express");
const rootRouter = express.Router();

const productRouter = require("./productRouter");

rootRouter.use("/products", productRouter);

module.exports = rootRouter;
