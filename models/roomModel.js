const mongoose = require("mongoose");
const slugify = require("slugify");

const roomSchema = new mongoose.Schema({
  title: { type: String, required: [true, "This field is required!"] },
  slug: String,
  price: { type: Number, required: [true, "Please Enter a price"] },
  description: {
    type: String,
    required: [true, "Please Enter a description"],
    minlength: 6,
    maxlength: 255,
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating should be between 1 to 5"],
    max: [5, "Rating should be between 1 to 5"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  addedBy: String,
  roomCover: String,
  bathRooms: Number,
  bedRooms: Number,
  floorSize: Number,
  locationName: { type: String, required: [true, "Please add a location"] },
  features: [String],
  images: [String],
  createdAt: { type: Date, default: Date.now() },
});

roomSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});
// roomSchema.pre(/^find/, function (next) {
//   this.slug = slugify(this.title, { lower: true });
//   next();
// });

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
