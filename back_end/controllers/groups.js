const Groups = require('../models/groups')
//const participants = require('../models/participants')

// create new groupe with validation
function add (req, res) {
    const groups = new Groups({
        idparticipant : req.body.idparticipant,
        groupcode : req.body.groupcode
    })
    const query = {idparticipant : groups.idparticipant}
    //console.log(query)

    Groups.find(query, (err, data) => {
        var parti_id = data.map((info) => {
            return info.idparticipant
        })
        console.log(parti_id.length)
        if(parti_id.length >= 1){
            res.json({message : "You Already Join a Group"})
        } else {
            const newGroups = groups.save()
            res.json(newGroups)
        }
    }).catch(err => {
        console.log(err)
    })
}

// join Group with validation
function joinGroup (req, res) {
    const groups = new Groups({
        idparticipant : req.body.idparticipant,
        groupcode : req.body.groupcode
    })
    const query = {groupcode : groups.groupcode}
    Groups.find(query, async (err, data) => {
        const code = data.map(info => {
            return info.groupcode
        })
        console.log(code.length)
        if(code.length >= 2){
            res.json({message : "Group is Full !!!"})
        } else {
            groups.save()
            res.json({message : "You Can Enter to The Group"})
        }
    })
}

// fetch all Groups 
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