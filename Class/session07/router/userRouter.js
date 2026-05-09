const express = require("express");
const { getAllUser, getFormAddUser, createUser } = require("../controller/userController");
const userRouter = express.Router()

userRouter.get("/", getAllUser);
userRouter.get("/add", getFormAddUser);
userRouter.post("/add", createUser);

module.exports = userRouter;