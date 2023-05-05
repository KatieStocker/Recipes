const db = require('../pool.js')
const query = require('./sqlQueries.js');

const selectTableString = `${query.selectAllFrom} recipe_nutritional_info`

const getNutritionalInfos = (req, res) => {
    db.query(`${selectTableString}`, (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
};

const getNutritionalInfoById = (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`${selectTableString} ${query.where} id = $1`, [id], (err, results) => {
        if (err) {
            throw err
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getNutritionalInfos,
    getNutritionalInfoById,
}