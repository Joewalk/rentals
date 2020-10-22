const express = require("express");

const userRouter = require("./routes/userRoutes");
const roomRouter = require("./routes/roomRoutes");
const reviewRouter = require("./routes/reviewRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/reviews", reviewRouter);

module.exports = app;
