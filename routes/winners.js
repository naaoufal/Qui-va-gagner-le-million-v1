const express = require("express")
const router = express.Router()

const winnerCon = require('../controllers/winners')

router.get("/all", winnerCon.all)

router.post("/addWinner", winnerCon.createOne)


module.exports = router