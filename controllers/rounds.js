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
    try {
        const newRound = await rounds.save()
        res.json(newRound)
    } catch (error) {
        res.json({message : error.message})
    }
}

module.exports = {
    all,
    createOne
}