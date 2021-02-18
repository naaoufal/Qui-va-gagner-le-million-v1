const express = require("express");
const mongoose = require("mongoose");
const app = express();


// connect our database:
mongoose.connect("mongodb://localhost/million", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to DataBase !!!"))

app.use(express.json())


// use routes
const participantsroute = require("./routes/participants.js");
app.use("/api/participants", participantsroute)


// start the server
app.listen(4000, () => console.log("the server is started"));