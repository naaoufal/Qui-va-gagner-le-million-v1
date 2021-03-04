const QuestionTokens = require('../models/questionTokens')
const Questions = require('../models/questions')
const Participant = require('../models/participants')
const Groups = require('../models/groups')
const Winners = require('../models/winners')

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

        Groups.find(query, (err, data) => {
            var idparti = data.map(info => {
                return info.idparticipant
            })


            var ts = idparti.includes(quesTokens.idparticipant)
            //var myquery = {$set : {score : 90}}

            //console.log(myquery)

            if(!ts){
                res.json({message : "You Enter a Invalid User ID"})
            } else {
                try {
                    if(finalts){
                        Participant.findById(quesTokens.idparticipant).then(data => {
                            console.log("the current score of participant " + data._id + " is : " + data.score)
                            var myquery = {$set : {score : data.score + 10}}
                            Participant.findByIdAndUpdate(quesTokens.idparticipant, myquery).then(dt => {
                                console.log(dt.score)
                            })
                            newQuesTokens = quesTokens.save()
                        })
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
}

function endOfQuestions (req, res) {

    // const winner = new Winners({
    //     idparticipant : req.body.idparticipant,
    //     idgroup : req.body.idgroup,
    //     score : req.body.score
    // })

    try {
        Groups.find().then(data => {

            var code = data.map(i => {
                return i.groupcode
            })

            //console.log(code)

            var dups = code.filter ( (v,i,a) => a.indexOf(v) < i );
            //console.log(dups)

            dups.map(j => {
                //console.log(j)
                Groups.find({
                    groupcode : j
                }).then(dt => {
                    //console.log(dt)
                    dt.map(l => {
                        //console.log(l.idparticipant)
                        Participant.find({
                            _id : l.idparticipant
                        }).then(re => {
                            //console.log(re)
                            var t = re.map(final => {
                                var arr = []
                                var r = final.score
                                arr.push(r)
                                //r.split(/\r|\n/)
                                //console.log(r)
                                console.log(arr)
                            })

                            // var r = t

                            

                        })
                    })
                })
            })
        })
        
        //res.json(groups)
    } catch (error) {
        res.json({message : error.message})
    }
}

module.exports = {
    all,
    createOne,
    endOfQuestions
}