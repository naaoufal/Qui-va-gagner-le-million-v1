const express = require("express")
const router = express.Router()

const roundCon = require('../controllers/rounds')

router.get("/all", roundCon.all)

router.post("/addRound", roundCon.createOne)


module.exports = router