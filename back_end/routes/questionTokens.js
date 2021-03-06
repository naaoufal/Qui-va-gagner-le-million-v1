const express = require("express")
const router = express.Router()

const quesTokensCon = require('../controllers/questionTokens')

router.get("/all", quesTokensCon.all)

router.post("/addToken", quesTokensCon.createOne)

router.post("/endOfQuestions", quesTokensCon.endOfQuestions)

module.exports = router