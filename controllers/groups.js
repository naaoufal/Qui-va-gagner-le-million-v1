const { json } = require('body-parser')
const Groups = require('../models/groups')

// create new groupe with validation
function add (req, res) {
    const groups = new Groups({
        idparticipant : req.body.idparticipant,
        groupcode : req.body.groupcode
    })
    const query = {idparticipant : groups.idparticipant}
    //console.log(query)

    Groups.find(query, async (err, data) => {
        var parti_id = data.map((info) => {
            return info.idparticipant
        })
        console.log(parti_id.length)
        if(parti_id.length >= 1){
            res.json({message : "You Already Join a Group"})
        } else {
            const newGroups = await groups.save()
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
    const query = {idparticipant : groups.idparticipant, groupcode : groups.groupcode}
    //console.log(query)
    Groups.find(query, async (err, data) => {
        var code = data.map((info) => {
            return info.groupcode
        })
        var part_id = data.map((info) => {
            return info.idparticipant
        })
        console.log(part_id.length)
        console.log(code.length)
        if(code.length >= 4 || part_id.length >= 1) {
            //console.log("hbess")
            res.json({message : "Group Full Or You ALready Join this Group !!!"})
        } else {
            const joinGroup = await groups.save()
            res.json(joinGroup)
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