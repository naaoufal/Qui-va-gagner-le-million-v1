const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({

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

module.exports = mongoose.model('questions', questionSchema)