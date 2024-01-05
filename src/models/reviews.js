// reviews /rating /created at /  / ref to location id / references ot user id

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  location_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Locations',
    required: [true, 'Reviews must belong to a location'],
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
    required: [true, 'Reviews must belong to a user'],
  },
  username: {
    type: String,
  },
  votes: {
    type: Number,
  },
  place_name: {
    type: String,
  },
});

export const Reviews = mongoose.models.Reviews || mongoose.model("Reviews", reviewSchema, 'reviews')