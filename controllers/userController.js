const User = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }

  next();
};

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    length: users.length,
    data: users,
  });

  next();
};

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }

  next();
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body);

    res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }

  next();
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    res.status(200).json({
      status: "success",
      data: "user deleted",
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }

  next();
};
