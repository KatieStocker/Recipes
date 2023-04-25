const db = require('../pool.js')
const query = require('./sqlQueries.js');

const getInstructions = (req, res) => {
    db.query(`${query.selectAllFrom} recipe_instruction`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getInstructionById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${query.selectAllFrom} recipe_instruction ${query.where} id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getInstructionByRecipeId = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${query.selectAllFrom} recipe_instruction ${query.where} recipe_id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getInstructions,
    getInstructionById,
    getInstructionByRecipeId,
}