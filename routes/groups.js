const express = require('express')
const routerGroups = express.Router()
const access = require('../midlleware/groupauth')
const groupCon = require('../controllers/groups')

routerGroups.get('/all', access, groupCon.all)

routerGroups.post('/add', access, groupCon.add)

routerGroups.post('/joinGroup', access, groupCon.joinGroup)


module.exports = routerGroups