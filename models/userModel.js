const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please Enter a name"] },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter an email address"],
  },
  phone: Number,
  photo: String,
  password: {
    type: String,
    min: 6,
    max: 50,
    required: [true, "Please Enter a Password"],
  },
  confirmPassword: {
    type: String,
    min: 6,
    max: 50,
    required: [true, "Please Confirm Your Password"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
