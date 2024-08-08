const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const auth = require("./routes/auth");

const app = express();

dotenv.config();

////  moddlee ware
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", auth);

mongoose
  .connect(process.env.DATABASE)
  .then((e) => {
    app.listen(8800, () => {
      console.log("backend server is fired");
    });
  })
  .catch((err) => {
    console.log("🚀 ~ mongoose.connect ~ err:", err);
  });
