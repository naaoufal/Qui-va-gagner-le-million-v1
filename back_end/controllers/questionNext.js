const QuestionNext = require('../models/next')


async function all (req, res) {
    try {
        const next = await QuestionNext.find()
        res.json(next)
    } catch (error) {
        res.json({message : error.message})
    }
}