const express = require('express')
const routerQuestions = express.Router()
const access = require('../midlleware/auth')
const questCon = require('../controllers/questions')



routerQuestions.post('/add' , access, questCon.add)

routerQuestions.get('/all', access, questCon.all)


module.exports = routerQuestions