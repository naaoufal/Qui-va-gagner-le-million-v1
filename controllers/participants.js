const Participants = require('../models/participants')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// node mailer
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.GMAIL_USER,
        pass : process.env.GMAIL_PASSWORD
    }
})

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
        console.log(data.email)
        if (!data) {
            res.send({
              message: `they is no participant !`
            });
          } else {
            res.send({ message: "participant is updated successfully." })
            var mailOptions = {
                from : process.env.GMAIL_USER,
                to : data.email,
                subject : 'You Account is Activated',
                text : `We just want to informe you that your account is online and valide now go check that`
            }
            transporter.sendMail(mailOptions, function(err, info) {
                if(err){
                    res.json({message : err.message})
                } else {
                    res.json({message : "Email send to participant"})
                }
            })
          }
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