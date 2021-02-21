const Groups = require('../models/groups')

async function add (req, res) {
    const groups = new Groups({
        idparticipant : req.body.idparticipant,
        groupcode : req.body.groupcode
    })
    try {
        const newGroups = await groups.save()
        res.json(newGroups)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function joinGroup (req, res) {
    const groups = new Groups({
        idparticipant : req.body.idparticipant,
        groupcode : req.body.groupcode
    })
    try {
        const joinGroup = await groups.save()
        res.json(joinGroup)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function all (req, res) {
    try {
        const groups = await Groups.find()
        res.json(groups)
    } catch (error) {
        res.json({message : error.message})
    }
}

module.exports = {
    add,
    joinGroup,
    all
}