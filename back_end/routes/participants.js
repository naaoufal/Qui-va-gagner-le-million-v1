const express = require("express")
const routerParticipants = express.Router()
const partiCon = require("../controllers/participants")
const auth = require("../midlleware/auth")
const groupAuth = require("../midlleware/groupauth")



routerParticipants.get("/all", auth, partiCon.all)

routerParticipants.get("/PublicAll", partiCon.show)

routerParticipants.post("/register", partiCon.register)

routerParticipants.patch("/edit/:id", auth, partiCon.edit)

routerParticipants.post("/authGroup", partiCon.login)


module.exports = routerParticipants