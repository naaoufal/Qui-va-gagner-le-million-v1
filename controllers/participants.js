const Participants = require('../models/participants')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function register (req, res) {
    const participants = new Participants({
        fullname : req.body.fullname,
        age : req.body.age,
        email : req.body.email,
        phone : req.body.phone,
        is_valid : req.body.is_valid,
        online : req.body.online,
        password : req.body.password
    })
    try {
        const newParticipant = await participants.save()
        res.json(newParticipant)
    } catch (err) {
        res.json({message : err.message})
    }
}

async function edit (req, res) {
    if(!req.body){
        return res.send({message : "they is not data !!!"})
    }
    const id = req.params.id
    Participants.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.send({
              message: `they is no participant !`
            });
          } else res.send({ message: "participant is updated successfully." })
    })
}

async function all (req, res) {
    try {
        const participants = await Participants.find()
        res.json(participants)
    } catch (err) {
        res.json({message : err.message})
    }
}

function login (req, res, next) {
    const {fullname} = req.body
    Participants.findOne({
        fullname : fullname
    }).then(partici => {
        if(!partici) {
            res.json({message : "You re Not Allowed"})
        } else {
            const fullname = req.body.fullname
            //const groupcode = req.body.groupcode
            const parti = {parti_name : fullname}
            const accessToken = jwt.sign(parti, process.env.ACCESS_TOKEN_GROUP)
            res.json({accessToken : accessToken})
            res.parti = parti
            next()
        }
    })
}

module.exports = {
    register,
    edit,
    all,
    login
}