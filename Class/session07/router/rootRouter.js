const express = require("express");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const rootRouter = express.Router()

rootRouter.use("/user",userRouter)
rootRouter.use("/auth",authRouter)
module.exports = rootRouter;