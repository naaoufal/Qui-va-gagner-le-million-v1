const express = require("express")
require("dotenv").config()
const connectDB = require("./back_end/config/mongodb")
const app = express()

connectDB()

app.use(express.json());

// use routes
app.use("/api/participants", require("./back_end/routes/participants.js"))
app.use("/api/admins", require("./back_end/routes/admins.js"))
app.use("/api/questions", require("./back_end/routes/questions.js"))
app.use("/api/groups", require("./back_end/routes/groups.js"))
app.use("/api/rounds", require("./back_end/routes/rounds.js"))
app.use("/api/questionTokens", require("./back_end/routes/questionTokens.js"))
app.use("/api/winners", require("./back_end/routes/winners.js"))


// start the server
app.listen(4000, () => console.log("the server is started"));