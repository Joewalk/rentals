const express = require("express");

const roomRouter = require("./routes/roomRoutes");

const app = express();

app.use(express.json());

// app.use("/api/v1/users", userRouter);
app.use("/api/v1/rooms", roomRouter);

module.exports = app;
