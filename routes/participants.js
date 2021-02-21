const express = require("express")
const routerParticipants = express.Router()
const partiCon = require("../controllers/participants")
const auth = require("../midlleware/auth")



routerParticipants.get("/all", auth, partiCon.all)

routerParticipants.post("/register", partiCon.register)

routerParticipants.patch("/edit/:id", auth, partiCon.edit)

routerParticipants.post("/authGroup", partiCon.login)


module.exports = routerParticipants