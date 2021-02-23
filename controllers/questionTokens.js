const QuestionTokens = require('../models/questionTokens')

async function all (req, res) {
    try {
        const questionTokens = await QuestionTokens.find()
        res.json(questionTokens)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function createOne (req, res) {
    const quesTokens = new QuestionTokens({
        idquestion : req.body.idquestion,
        participantanswer : req.body.participantanswer,
        idparticipant : req.body.idparticipant
    })
    try {
        const newQuesTokens = await quesTokens.save()
        res.json(newQuesTokens)
    } catch (error) {
        res.json({message : error.message})
    }
}

module.exports = {
    all,
    createOne
}