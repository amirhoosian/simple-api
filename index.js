const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const routerpost = require("./routes/post");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connect to db")
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running"));
