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
},{timestamps: true})

const locationSchema = new mongoose.Schema({
    place_name: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 40
    },
    location: {
        type: String,
        required: true,
        max: 50
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        min: 3,
        max: 20
    },
    description: {
        type: String,
        max: 100
    }
},{timestamps: true})

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Location = mongoose.models.Location || mongoose.model("Location", locationSchema)