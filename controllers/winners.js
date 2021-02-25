const Winners = require('../models/winners')
const Group = require('../models/groups')

async function all (req, res) {
    // try {
    //     const winners = await Winners.find()
    //     res.json(winners)
    // } catch (error) {
    //     res.json({message : error.message})
    // }

    // test field :
    const query = {_id : }
    Group.find()

}

async function createOne (req, res) {
    const winner = new Winners({
        idparticipant : req.body.idparticipant,
        idgroup : req.body.idgroup,
        score : req.body.score
    })

    try {
        const newWinner = await winner.save()
        res.json(newWinner)
    } catch (error) {
        res.json({message : error.message})
    }

}

module.exports = {
    all,
    createOne
}