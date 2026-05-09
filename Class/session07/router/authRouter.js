const express = require("express");
const { getFormLogin, checkLogin, logOut } = require("../controller/authController");
const authRouter = express.Router()

authRouter.get("/login", getFormLogin);
authRouter.post("/login", checkLogin);
authRouter.get("/logout", logOut);

module.exports = authRouter;