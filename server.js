const express = require("express")
require("dotenv").config()
const connectDB = require("./config/mongodb")
const app = express()

connectDB()

app.use(express.json());

// use routes
app.use("/api/participants", require("./routes/participants.js"))
app.use("/api/admins", require("./routes/admins.js"))
app.use("/api/questions", require("./routes/questions.js"))
app.use("/api/groups", require("./routes/groups.js"))


// start the server
app.listen(4000, () => console.log("the server is started"));