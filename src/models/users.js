const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},{timestamps: true}, {collection: 'users'})

export const Users = mongoose.models.Users || mongoose.model("Users", userSchema, 'users')