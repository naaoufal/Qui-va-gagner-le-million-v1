const Questions = require('../models/questions')
const Next = require('../models/next')

async function add (req, res) {
    const questions = new Questions({
        quest : req.body.quest,
        answer : req.body.answer,
        points : req.body.points,
        answers : req.body.answers
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

async function allPublic (req, res) {
    try {
        const questions = await Questions.find()
        res.json(questions)
    } catch (error) {
        res.json({message : error.message})
    }
}

async function ShowRandomQuestions (req, res) {
    const next = new Next()
    try {
        const ranQuestion =  await Questions.aggregate([{ $sample: { size: 1 } }]);
        res.json(ranQuestion)
        //next = ranQuestion.save()
        //console.log(ranQuestion)
    } catch (error) {
        res.json({ message : error.message });
    }
}

module.exports = {
    add,
    all,
    ShowRandomQuestions,
    allPublic
}