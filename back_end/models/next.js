const mongoose = require('mongoose')

const next = new mongoose.Schema({

    quest : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    },
    points : {
        type : Number,
        required : true
    },
    answers : [{
        type : String,
        require : true
    }]

})

module.exports = mongoose.model('next', next)