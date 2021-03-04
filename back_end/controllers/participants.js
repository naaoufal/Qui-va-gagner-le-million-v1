const Participants = require('../models/participants')
const nodemailer = require('nodemailer')
const winston = require('winston')
const jwt = require('jsonwebtoken')
const logs = require('../models/log')
require('dotenv').config()

// handle data to log collection
const log = (data, logs) => {
    return new logs({
        time: new Date(),
        file: data.file,
        line: data.line,
        info: data.info,
        type: data.type
    }).save()
}

// add log file
const logConfig = {
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: "./logger/logfile.log",
      }),
    ],
}
const myLogger = winston.createLogger(logConfig)

// config time
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1; //As January is 0.
var year = date.getFullYear();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

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
        password : req.body.password,
        score : req.body.score
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

async function show (req, res){
    try {
        const par = await Participants.find()
        res.json(par)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function all (req, res) {
    try {
        const participants = await Participants.find()
        res.json(participants)
        myLogger.log({
            message:"Participant found",
            level: ["info"],
            Date: day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second,
        })
        log({
            file: 'server.js',
            line: '10',
            info: "Participant Found",
            type: 'critical'
        }, logs);
    } catch (err) {
        res.json({message : err.message})
        myLogger.log({
            message: error.message,
            level: ["error"],
            Date: day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second,
        })
        log({
            file: 'server.js',
            line: '10',
            info: error,
            type: 'critical'
        }, logs);
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
    login,
    show
}