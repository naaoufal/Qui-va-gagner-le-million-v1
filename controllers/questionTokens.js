const QuestionTokens = require('../models/questionTokens')
const Questions = require('../models/questions')
const Participant = require('../models/participants')
const Groups = require('../models/groups')

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

    const query1 = {_id : quesTokens.idquestion}
    const query = {idparticipant : quesTokens.idparticipant}

    Questions.find(query1, (err, dt) => {

        // mao for questions to check andwers :
        var answ = dt.map(info => {
            return info.answer
        })

        var idques = dt.map(info => {
            return info._id
        })

        var finalts = answ.includes(quesTokens.participantanswer)

        

        //console.log(idques, answ)

        Groups.find(query, (err, data) => {
            var idparti = data.map(info => {
                return info.idparticipant
            })

            var ts = idparti.includes(quesTokens.idparticipant)

            if(!ts){
                res.json({message : "You Enter a Invalid User ID"})
            } else {
                try {
                    if(finalts){
                        // Participant.findById().then(data => {
                        //     console.log(data)
                        // })
                        const newQuesTokens = quesTokens.save()
                        //res.json(newQuesTokens)
                        res.json({message : "Answer Correct !!!"})
                    } else {
                        res.json({message : "Answer Is not Correct"})
                    }
                } catch (error) {
                    res.json({message : error.message})
                }
            }
        })
    })

    // try {
    //     const newQuesTokens = await quesTokens.save()
    //     res.json(newQuesTokens)
    // } catch (error) {
    //     res.json({message : error.message})
    // }
}

module.exports = {
    all,
    createOne
}