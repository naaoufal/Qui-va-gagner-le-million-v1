const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({

    idparticipant : {
        type : String,
        ref : 'participants',
        required : true
    },
    groupcode : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model('groups', groupSchema)