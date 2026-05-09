const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    age: {
        type: Number
    },
    status: {
        type: Boolean
    }
})
const User = mongoose.model("User", userSchema)
module.exports = User;