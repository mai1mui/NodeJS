const User = require("../models/User")

async function getAllUser(req, res) {
    if (req.session.user && req.session.user.role == "ADMIN") {
        const users = await User.find()
        return res.render("list", { users })
    }
    res.redirect("/auth/login")
}

function getFormAddUser(req, res) {
    res.render("add")
}

async function createUser(req, res) {
    const data = req.body;
    await User.create(data)
        .then(result => {
            res.redirect("/user")
        })
        .catch(err => {
            res.render("add")
        })

}

module.exports = {
    getAllUser,
    getFormAddUser,
    createUser,
}