const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: { type: String, required: [true, "Please enter a review"] },
  rating: { type: Number, min: 1, max: 5 },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must have a user"],
  },
  room: {
    type: mongoose.Schema.ObjectId,
    ref: "Room",
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
