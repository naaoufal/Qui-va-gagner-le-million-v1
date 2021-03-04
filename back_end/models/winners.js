const mongoose = require('mongoose')

const winnerSchema = new mongoose.Schema({

    idparticipant : {
        type : String,
        ref : 'participants'
    },
    idgroup : {
        type : Number,
        ref : 'groups'
    },
    score : {
        type : Number
    }

})

module.exports = mongoose.model('winners', winnerSchema)