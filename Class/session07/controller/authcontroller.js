const User = require("../models/User");

function getFormLogin(req, res) {
    res.render("login")
}
async function checkLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password })
    if (user) {
        req.session.user = user;
        if (user.role == "USER") {
            return res.redirect("/user/add");
        } else {
            return res.redirect("/user");
        }
    } else {
        res.render("login")
    }
}
function logOut(req, res) {
    req.session.destroy()
    res.redirect("/auth/login")
}
module.exports = {
    getFormLogin,
    checkLogin,
    logOut
}