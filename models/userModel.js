const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now() },
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 16, (err, hash) => {
    if (err) {
      return console.log(err);
    }
    this.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
