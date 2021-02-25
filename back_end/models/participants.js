const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({

    fullname : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    is_valid : {
        type : Boolean,
        required : true
    },
    online : {
        type : Boolean,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    score : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model('participants', participantSchema)