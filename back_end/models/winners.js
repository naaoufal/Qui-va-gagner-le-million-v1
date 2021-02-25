const mongoose = require('mongoose')

const winnerSchema = new mongoose.Schema({

    idparticipant : {
        type : String,
        ref : 'participants',
        required : true
    },
    idgroup : {
        type : Number,
        ref : 'groups',
        required : true
    },
    score : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model('winners', winnerSchema)