const { default: mongoose } = require("mongoose");

const locationSchema = new mongoose.Schema({
    created_by: { 
        type: String, 
        required: true,
        min: 3,
        max: 40
    },
    categories: { 
        type: [String], 
        required: true,
    },
    place_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        min: 3,
        max: 40
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        max: 100
    },
    img: {
        type: String
    },
    rating: {
        type: Number,
    },
    reviews_by_id: [String]
},{ timestamps: true }, { collection: 'locations' });


export const Locations = mongoose.models.Locations || mongoose.model("Locations", locationSchema, 'locations')