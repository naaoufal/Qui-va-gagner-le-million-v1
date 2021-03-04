const express = require('express')
const routerGroups = express.Router()
const access = require('../midlleware/groupauth')
const groupCon = require('../controllers/groups')

routerGroups.get("/all", groupCon.all)

routerGroups.post("/add", groupCon.add)

routerGroups.post("/joinGroup", groupCon.joinGroup)


module.exports = routerGroups