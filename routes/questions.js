const express = require('express')
const routerQuestions = express.Router()
const access = require('../midlleware/auth')
const questCon = require('../controllers/questions')
const router = require('../../../mcdonald/routes/cards')



routerQuestions.post('/add' , access, questCon.add)

routerQuestions.get('/all', access, questCon.all)

routerQuestions.get("/getOneQuestion", questCon.ShowRandomQuestions)


module.exports = routerQuestions