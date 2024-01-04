const { default: mongoose } = require("mongoose");

const locationSchema = new mongoose.Schema(
    {
        place_name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 40
        },
        address: {
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
        categories: {
            type: Array,
            min: 3,
            max: 20
        },
        description: {
            type: String,
            max: 100
        },
        img: {
            type: String
        },
        rating: {
            type: Number
        },
        created_by: {
            type: String
        },
        date_created: {
            type: String
        }
    },
    { timestamps: true }, { collection: 'locations' })

export const Locations = mongoose.models.Locations || mongoose.model("Locations", locationSchema, 'locations')