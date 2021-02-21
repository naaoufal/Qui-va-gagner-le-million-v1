const jwt = require('jsonwebtoken')
require('dotenv').config()
const Admins = require('../models/admins')

 
async function all (req, res) {
    try {
        const admins = await Admins.find()
        res.json(admins)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function createOne (req, res) {
    const admins = new Admins({
        fullname : req.body.fullname,
        phone : req.body.phone,
        password : req.body.password
    })
    try {
        const newAdmin = await admins.save()
        res.json(newAdmin)
    } catch (err) {
        res.json({message : err.message})
    }
}

function login (req, res, next) {
    const {phone, password} = req.body
    Admins.findOne({
        phone : phone,
        password : password
    }).then(admin => {
        if(!admin){
            res.json({message : "You re Not Allowed"})
        } else {
            const phone = req.body.phone
            const password = req.body.password
            const ad = {adname : phone, adpassword : password}
            const accessToken = jwt.sign(ad, process.env.ACCESS_TOKEN)
            res.json({accessToken : accessToken})
            res.ad = ad
            next()
        }
    })
}

module.exports = {
    all,
    createOne,
    login
}