require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const Participants = require('../models/participants')

module.exports = async function groupauth (req, res, next) {
    const autHeader = req.headers['authorization']
    const token = autHeader && autHeader.split(' ')[1]
  
    if(token == null){
        return res.sendStatus(403)
    }
  
    const code = jwt.verify(token, process.env.ACCESS_TOKEN_GROUP)
    const participant = await Participants.findById(code.id)

    if(!participant){
        return res.sendStatus(404)
    }
    req.participant = participant
    next()
}