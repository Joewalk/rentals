const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("listening on port: " + port);
});
