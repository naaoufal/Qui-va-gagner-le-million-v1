const mongoose = require('mongoose')

const questionTokenSchema = new mongoose.Schema({

    idquestion : {
        type : String,
        ref : 'questions',
        required : true
    },
    participantanswer : {
        type : String,
        required : true
    },
    idparticipant : {
        type : String,
        ref : 'participants',
        required : true
    }

})

module.exports = mongoose.model('questionTokens', questionTokenSchema)