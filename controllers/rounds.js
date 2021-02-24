const Rounds = require('../models/rounds')

async function all (req, res) {
    try {
        const rounds = await Rounds.find()
        res.json(rounds)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function createOne (req, res) {
    const rounds = new Rounds({
        idgroupmember : req.body.idgroupmember,
        idquestion : req.body.idquestion,
        idquestiontoken : req.body.idquestiontoken
    })

    // test field for round:

    const query = {idgroupmember : rounds.idgroupmember}

    Rounds.find(query, async (err, data) => {
        var id = data.map(info => {
            return info.idgroupmember
        })
        var idroun = data.map(info => {
            return info.idquestion
        })

        var ts = idroun.includes(rounds.idquestion)

        console.log(idroun, ts, rounds.idquestion)

        if(id.length >= 3){
            res.json({message : "Round Is Ended"})
        } else {
            //console.log("Ba9i masalach round")
            try {
                if(ts){
                    res.json({message : "Question Already Passed"})
                } else {
                    const newRound = await rounds.save()
                    res.json(newRound)
                }
            } catch (error) {
                res.json({message : error.message})
            }
        }
    })


}

module.exports = {
    all,
    createOne
}