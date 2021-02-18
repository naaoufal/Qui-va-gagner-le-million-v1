const express = require("express");
const mongoose = require("mongoose");
const app = express();




// use routes
app.use("/api/participants", require("./routes/participants.js"))

// start the server
app.listen(4000, () => console.log("the server is started"));