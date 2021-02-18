const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({

    fullname : {
        type : String
    },
    age : {
        type : Number
    },
    phone : {
        type : Number
    },
    is_valid : {
        type : Boolean
    },
    online : {
        type : Boolean
    },
    password : {
        type : String
    }

})

module.exports = mongoose.model('participants', participantSchema)