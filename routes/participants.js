const express = require("express")
const routerParticipants = express.Router()

// // declare our routes
const { register, participants } = require("../controllers/participants")



routerParticipants.get("/all", participants)

routerParticipants.post("/register", register)

// router.get("/all" , (req, res, next) => {
//     res.send("this is a get test")
// })

// router.post("/register", (req, res, next) => {
//     res.send("this is a register test")
// })


module.exports = routerParticipants