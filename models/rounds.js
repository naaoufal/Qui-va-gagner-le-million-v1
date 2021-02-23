const mongoose = require('mongoose')
const questions = require('./questions')
const questionTokens = require('./questionTokens')

const roundSchema = new mongoose.Schema({

    idgroupmember : {
        type : String,
        ref : 'groups',
        required : true
    },
    idquestion : {
        type : String,
        ref : 'questions',
        required : true
    },
    idquestiontoken : {
        type : String,
        ref : 'questionTokens',
        required : true
    }

})

module.exports = mongoose.model('rounds', roundSchema)