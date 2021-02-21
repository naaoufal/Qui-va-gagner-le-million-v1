const express = require("express")
const router = express.Router()
const access = require('../midlleware/auth')

// declare our routes
const adminCon = require("../controllers/admins")



router.get("/all", access, adminCon.all)

router.post("/addOne", access, adminCon.createOne)

router.post("/login", adminCon.login)


module.exports = router