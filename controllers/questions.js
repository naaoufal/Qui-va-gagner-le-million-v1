const Questions = require('../models/questions')

async function add (req, res) {
    const questions = new Questions({
        quest : req.body.quest,
        answer : req.body.answer,
        points : req.body.points
    })
    try {
        const newQuest = await questions.save()
        res.json(newQuest)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function all (req, res) {
    try {
        const questions = await Questions.find()
        res.json(questions)
    } catch (error) {
        res.json({message : error.message})
    }
}


module.exports = {
    add,
    all
}