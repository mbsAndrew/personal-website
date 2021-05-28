
require("dotenv").config();
var express = require("express");
var cors = require("cors");
var app = express();
const { PORT } = process.env;
app.use(cors());
app.use("/api", require("./routes/index"));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});