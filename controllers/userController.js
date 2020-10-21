const User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  const user = req.body;
  try {
    if (user) {
      await User.create(user);
    }
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({
    status: "success",
    data: user,
  });
  next();
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      length: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    if (userId) {
      const user = await User.findById(userId);
      res.status(200).json({
        status: "success",
        data: user,
      });
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    if (userId) {
      await User.findByIdAndUpdate(userId, req.body);
      res.status(200).json({
        status: "success",
        data: "User updated",
      });
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    if (userId) {
      await User.findByIdAndDelete(userId);
      res.status(200).json({
        status: "success",
        data: "user deleted",
      });
    }
  } catch (err) {
    console.log(err);
  }
  next();
};
