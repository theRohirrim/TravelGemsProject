const { default: mongoose } = require("mongoose");

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
    },
    img: {
        type: String
    }
},{timestamps: true})

export const Locations = mongoose.models.Locations || mongoose.model("Locations", locationSchema)