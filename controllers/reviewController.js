const Review = require("../models/reviewModel");

exports.createReview = async (req, res, next) => {
  const newReview = await Review.create(req.body);
  res.status(200).json({ status: "success", review: newReview });
  next();
};

exports.getAllReviews = async (req, res, next) => {
  const reviews = await Review.find();
  res
    .status(200)
    .json({ status: "success", length: reviews.length, reviews: reviews });
  next();
};

exports.getReview = async (req, res, next) => {
  const reviewId = req.params.id;
  const review = await Review.findById(reviewId);
  res.status(200).json({ status: "success", review: review });
  next();
};

exports.updateReview = async (req, res, next) => {
  const reviewId = req.params.id;
  const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body);
  res.status(200).json({ status: "success", review: updatedReview });
  next();
};

exports.deleteReview = async (req, res, next) => {
  const reviewId = req.params.id;
  await Review.findOneAndDelete(reviewId);
  res
    .status(200)
    .json({ status: "success", message: "review deleted successfully" });
  next();
};
