const Rooms = require("../models/roomModel");

exports.createRoom = async (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const roomCover = req.body.roomCover;
  const features = req.body.features;
  const locationName = req.body.locationName;

  const room = await Rooms.create({
    title,
    price,
    description,
    roomCover,
    features,
    locationName,
  });

  res.status(200).json({
    status: "success",
    room,
  });
  next();
};

exports.getAllRooms = async (req, res, next) => {
  const rooms = await Rooms.find();

  res.status(200).json({
    status: "success",
    length: rooms.length,
    rooms,
  });

  next();
};

exports.getRoom = async (req, res, next) => {
  const roomId = req.params.id;

  const room = await Rooms.findById(roomId);

  res.status(200).json({
    status: "success",
    room,
  });
  next();
};

exports.updateRoom = async (req, res, next) => {
  const roomId = req.params.id;

  try {
    await Rooms.findByIdAndUpdate(roomId, req.body);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({
    status: "success",
    message: "room updated succefully",
  });

  next();
};

exports.deleteRoom = async (req, res, next) => {
  const roomId = req.params.id;

  try {
    await Rooms.deleteOne({ _id: roomId });
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    status: "success",
    message: "Room deleted",
  });

  next();
};
