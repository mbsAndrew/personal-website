
require("dotenv").config();
var express = require("express");

var app = express();
app.use("/api", require("./routes/index"));