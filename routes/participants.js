const express = require("express")
const routerParticipants = express.Router()

// // declare our routes
const { register, all } = require("../controllers/participants")



routerParticipants.get("/all", all)

routerParticipants.post("/register", register)


module.exports = routerParticipants